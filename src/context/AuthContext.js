import React, { createContext, useContext, useEffect, useReducer } from "react";
import HttpRequest from "../services/http-request";
import { signInApi, signOut, signUpApi, userProfileApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const Types = {
  Initial: "INITIALZE",
  Signin: "SIGNIN",
  Signup: "SIGNUP",
  Signout: "SIGNOUT",
};

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  metadata: null,
};

const AuthContext = createContext(null);

const Reducer = (state, action) => {
  switch (action.type) {
    case "INITIALZE":
      return {
        isInitialized: true,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        metadata: action.payload.metadata,
      };
    case "SIGNIN":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        metadata: action.payload.metadata,
      };
    case "SIGNUP":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        metadata: action.payload.metadata,
      };
    case "SIGNOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        metadata: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const token = window !== undefined ? localStorage.getItem("token") : "";

        if (token) {
          const response = await userProfileApi();
          const user = response.data.user;
          const metadata = response.data.metadata;
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user: user,
              metadata: metadata,
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
              metadata: null,
            },
          });
        }
      } catch (error) {
        console.log(error, "Không có thông tin user");
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
            metadata: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signin = async (email, password) => {
    try {
      const response = await signInApi({ email: email, password: password });
      // console.log("response signin:", response);
      const { token, user, metadata } = response.data || {};

      localStorage.setItem("token", token);

      dispatch({
        type: Types.Signin,
        payload: {
          isAuthenticated: true,
          user: user,
          metadata: metadata,
        },
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  const signup = async (username, email, password) => {
    try {
      const response = await signUpApi({ username, email, password });
      const { token, user, metadata } = response.data || {};

      dispatch({
        type: Types.Signup,
        payload: {
          isAuthenticated: true,
          user: user,
          metadata: metadata,
        },
      });
      navigate("/");

      // console.log("dang nhap thanh cong");
    } catch (error) {
      console.error(error);
    }
  };
  const signout = async () => {
    try {
      await signOut();
      dispatch({
        type: Types.Signout,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signin,
        signup,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
