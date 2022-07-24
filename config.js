import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBZ8Qcmno0RHqHe4g5IWmU69UGdffdsIkg",
  authDomain: "azizdev-uz.firebaseapp.com",
  databaseURL: "https://azizdev-uz-default-rtdb.firebaseio.com",
  projectId: "azizdev-uz",
  storageBucket: "azizdev-uz.appspot.com",
  messagingSenderId: "76655059147",
  appId: "1:76655059147:web:3b02eb7718ab974f2afb4e",
  measurementId: "G-NXDVC69TH6"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;