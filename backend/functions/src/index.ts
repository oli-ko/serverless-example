import {FunctionParser} from "firebase-backend";
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
exports = new FunctionParser({rootPath: __dirname, exports}).exports;