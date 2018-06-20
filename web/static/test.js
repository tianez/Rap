/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

"use strict";

var receiveChannel;

var dataChannelReceive = document.querySelector("textarea#dataChannelReceive");
var sendButton = document.querySelector("button#sendButton");

sendButton.onclick = sendData;

var dataConstraint = null;
var servers = null;
var localConnection = new RTCPeerConnection(servers);
var sendChannel = localConnection.createDataChannel("sendDataChannel", dataConstraint);

localConnection.onicecandidate = function(e) {
    console.log(e);
    remoteConnection.addIceCandidate(e.candidate);
};
sendChannel.onopen = onSendChannelStateChange;
sendChannel.onclose = onSendChannelStateChange;
function onSendChannelStateChange() {
    var readyState = sendChannel.readyState;
    console.log(readyState);
}

localConnection.createOffer().then(gotDescription1);

var remoteConnection = new RTCPeerConnection(servers);
remoteConnection.ondatachannel = function(event) {
    receiveChannel = event.channel;
    receiveChannel.onmessage = onReceiveMessageCallback;
    receiveChannel.onopen = onReceiveChannelStateChange;
    receiveChannel.onclose = onReceiveChannelStateChange;
};

function sendData() {
    var data = "dataChannelSend.value";
    sendChannel.send(data);
    console.log(data);
}

function gotDescription1(desc) {
    localConnection.setLocalDescription(desc);
    console.log(1111);
    setTimeout(() => {
        console.log(11211);
        gots(desc);
    }, 10);
}

function gots(desc) {
    remoteConnection.setRemoteDescription(desc);
    remoteConnection.createAnswer().then(gotDescription2);
}

function gotDescription2(desc) {
    remoteConnection.setLocalDescription(desc);
    localConnection.setRemoteDescription(desc);
}

function onReceiveMessageCallback(event) {
    // trace("Received Message");
    dataChannelReceive.value = event.data;
}

function onReceiveChannelStateChange() {
    var readyState = receiveChannel.readyState;
    // trace("Receive channel state is: " + readyState);
}
