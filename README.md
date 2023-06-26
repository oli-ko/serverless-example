### in /backend/functions run "npm run serve"

curl -X POST http://127.0.0.1:5001/serverless-example-7692345/us-central1/users-api/addPaymentMethod -H 'Content-Type: application/json' -d '{"card_number":"42","card_holder":"Mr. Me"}'