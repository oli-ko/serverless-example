### setup
1. install firebase cli
2. run `npm install` in /backend/functions and once in /

### starting everything
for only functions: in /backend/functions run "npm run serve" to start the firebase functions emulator

for functions & firestore: in /backend/functions run "npm run build && firebase emulators:start" to start the firebase functions emulator and firestore emulator

then use postman & click on the Firestore emulator link printed to the console to test some reactive functions. 
with curl parsing the json body did not work even though the header was set to application/json 

### deploying
does not work because we are not paying.
for only functions: in /backend/functions run "npm run deploy" to deploy the functions to firebase