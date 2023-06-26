import { Request, Response } from "express";
import { Endpoint, RequestType } from "firebase-backend";

export default new Endpoint(
  "addPaymentMethod",
  RequestType.POST,
  (request: Request, response: Response) => {
    const cardNumber = request.body["card_number"];
    const cardHolder = request.body["card_holder"];
    
    const paymentToken = `${cardNumber} - ${cardHolder}`;

    return response.status(201).send({ token: paymentToken, body: request.body.toJSON() });
  }
);
