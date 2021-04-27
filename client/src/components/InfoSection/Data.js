import Img1 from "../../images/svg-1.svg";
import Img2 from "../../images/svg-2.svg";
import Img3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Instant Chat",
  headline: "Chat with any users of Mern Rocket",
  description:
    "Using the simple chat and the engine chat, users have access to all users on the website.",
  buttonLabel: "Get started",
  imgStart: true,
  img: Img1,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Visible Users",
  headline: "See other users accounts",
  description:
    "Access to other users accounts, awards, challenges, and other fun events",
  buttonLabel: "Get started",
  imgStart: false,
  img: Img2,
  alt: "users",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: "",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Easy Payments",
  headline: "Paypal button is easy to use",
  description:
    "Paypal button allows for payment with credit cards or through paypal payment in just a few seconds",
  buttonLabel: "Get started",
  imgStart: true,
  img: Img3,
  alt: "Paypal",
  dark: false,
  primary: false,
  darkText: true,
};
