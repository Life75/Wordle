const functions = require("firebase-functions");

const express = require("express");
const { response } = require("express");

const server = express();

server.get("/some-data", (request, response) => {
    response.send("Hello")
});

exports.app = functions.https.onRequest(server);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


