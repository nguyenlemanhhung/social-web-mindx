import HttpRequest from "./http-request";

// auth
export const signInApi = (payload) => {
  return HttpRequest.post("/user/sign-in", payload);
};
export const signUpApi = (payload) => {
  return HttpRequest.post("/user/sign-up", payload);
};
export const userProfileApi = () => {
  return HttpRequest.get("/user/current");
};
export const signOut = () => {
  return HttpRequest.post("/user/sign-out");
};
export const updateProfileApi = (payload) => {
  return HttpRequest.put("/user/edit-profile", payload);
};

//post
export const createPostApi = (payload) => {
  return HttpRequest.post("/post/create", payload);
};
export const getAllPostsByCurrentUserApi = () => {
  return HttpRequest.get("/post/my-post");
};
export const getAllPostApi = () => {
  return HttpRequest.get("/post");
};
