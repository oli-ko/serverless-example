import { Request, Response } from "express";
import { Endpoint, RequestType } from "firebase-backend";
const admin = require("firebase-admin");

export default new Endpoint(
  "postMessage",
  RequestType.POST,
  async (request: Request, response: Response) => {
    const data = getData(request);

    if (containsBadWords(data.message)) {
      response.status(403).send("Language!");
    }
    else {
      admin
      .firestore()
      .collection("messages")
      .add(data)
      .then((writeResult: any) => {
        response.status(201).send(writeResult);
      })
      .catch((err: any) => {
        response.status(500).send(err);
      });
    }
  },
  {
    enableCors: true
  }
);


function containsBadWords(str: string): boolean {
  const badWords = ["bad", "word"];
  return badWords.some((word) => str.includes(word));
}


function getData(request: Request) {
  return {
    message: request.body["message"],
    username: request.body["username"],
    ts: request.body["ts"] ? parseInt(request.body["ts"]) : Date.now(),
  };
}
