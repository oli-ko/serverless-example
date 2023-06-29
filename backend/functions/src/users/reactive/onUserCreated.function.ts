import * as functions from "firebase-functions";

exports.onUserCreated = functions.firestore
  .document("users/{userId}")
  .onCreate((snapshot, context) => {
    const data = snapshot.data();
    console.log("User email: ", data.email)
  });
