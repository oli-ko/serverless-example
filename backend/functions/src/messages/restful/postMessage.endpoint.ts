import { Request, Response } from "express";
import { Endpoint, RequestType } from "firebase-backend";

export default new Endpoint(
  "postMessage",
  RequestType.POST,
  async (request: Request, response: Response) => {
    const admin = require("firebase-admin");

    // store message, username in firestores messages collection
    const data = {
      message: request.body["message"],
      username: request.body["username"],
      ts: request.body["ts"] ? parseInt(request.body["ts"]) : Date.now(),
    };
    admin
      .firestore()
      .collection("messages")
      .add(data)
      .then((writeResult: any) => {
        console.log("Message written to Firestore");
        response.status(201).send(writeResult);
      })
      .catch((err: any) => {
        console.log(err);
        console.log("Error writing message to Firestore");
        response.status(500).send(err);
      });
  },
  {
    enableCors: process.env.FUNCTIONS_EMULATOR === "true",
  }
);
