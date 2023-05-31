import HttpRequest from "./http-request";

// auth
export const signIn = (payload) => {
  HttpRequest.post("/user/sign-in", payload);
};
export const signUp = (payload) => {
  HttpRequest.post("/user/sign-up", payload);
};
