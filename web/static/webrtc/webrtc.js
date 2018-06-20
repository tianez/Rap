"use strict";
var url = "ws://" + window.location.host;
window.socket = io(url, {
    reconnect: true
});

var remoteVideo = document.getElementById("remoteVideo");
var receiveChannel;
var servers = null;
var remoteConnection = new RTCPeerConnection(servers);
remoteConnection.ondatachannel = receiveChannelCallback;

remoteConnection.onaddstream = function(e) {
    remoteVideo.srcObject = e.stream;
};

remoteConnection.ondatachannel = receiveChannelCallback;

function receiveChannelCallback(event) {
    receiveChannel = event.channel;
    receiveChannel.onmessage = onReceiveMessageCallback;
    receiveChannel.onopen = onReceiveChannelStateChange;
    receiveChannel.onclose = onReceiveChannelStateChange;
}

function onReceiveMessageCallback(event) {
    // trace("Received Message");
    console.log(event.data);
    // dataChannelReceive.value = event.data;
}

function onReceiveChannelStateChange() {
    var readyState = receiveChannel.readyState;
    // trace("Receive channel state is: " + readyState);
}

socket.on("connect", function() {
    console.log("链接成功！");
    socket.on("login", function(data) {
        console.log(data);
    });
    socket.on("broadcast", function(data) {
        console.log(data);
    });
    socket.on("chat", function(data) {
        console.log(data);
    });
    socket.on("chat", function(data) {
        console.log(data);
    });
    socket.on("offer", function(data) {
        remoteConnection.setRemoteDescription(data);
        remoteConnection.createAnswer().then(offer => {
            // console.log(offer.sdp);
            socket.emit("offer", offer);
            remoteConnection.setLocalDescription(offer);
        });
    });
    socket.on("sendcandidate", function(data) {
        remoteConnection.addIceCandidate(new RTCIceCandidate(data));
    });
});
