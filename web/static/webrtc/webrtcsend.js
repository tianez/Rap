"use strict";
var url = "ws://" + window.location.host;
window.socket = io(url, {
    reconnect: true
});

// var localVideo = document.getElementById("local");
var localVideo = document.querySelector("video");
var sendButton = document.getElementById("btn");
sendButton.onclick = sendData;

var constraints = (window.constraints = {
    audio: false,
    video: true
    // video: {
    //     mandatory: { minWidth: 640, minHeight: 480 },
    //     optional: [{ minWidth: 1280 }, { minHeight: 720 }, { facingMode: "user" }]
    // }
});

var dataConstraint = null;
var servers = null;
var localConnection = new RTCPeerConnection(servers);
var sendChannel = localConnection.createDataChannel("sendDataChannel", dataConstraint);

sendChannel.onopen = onSendChannelStateChange;
sendChannel.onclose = onSendChannelStateChange;

localConnection.onicecandidate = function(event) {
    if (event.candidate) {
        // console.log(event.candidate);
        // pc2.addIceCandidate(new RTCIceCandidate(event.candidate));
        socket.emit("candidate", { socketid: socket.id, candidate: event.candidate });
        // pc2.addIceCandidate(event.candidate);
    }
};

function sendData() {
    sendChannel.send("11111111111");
}

function onSendChannelStateChange() {
    var readyState = sendChannel.readyState;
    console.log(readyState);
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
    socket.on("offer", function(desc) {
        localConnection.setRemoteDescription(desc);
    });
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(handleSuccess)
        .catch(error => {
            console.log(error);
        });
});

function handleSuccess(stream) {
    var videoTracks = stream.getVideoTracks();
    console.log("Got stream with constraints:", constraints);
    console.log("Using video device: " + videoTracks[0].label);
    stream.oninactive = function() {
        console.log("Stream inactive");
    };
    window.stream = stream; // make variable available to browser console
    localVideo.srcObject = stream;
    localConnection.addStream(stream);
    localConnection.createOffer().then(offer => {
        localConnection.setLocalDescription(offer);
        socket.emit("offer", offer);
    });
}
