import React, { useEffect, createContext, useReducer, useContext } from "react";
import UserDataReducer from "./UserDataReducer";
import { AuthContext } from "./AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const INITIAL_STATE = {
  userData: null,
  loading: true,
  error: null,
};

export const UserDataContext = createContext(INITIAL_STATE);

export const UserDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserDataReducer, INITIAL_STATE);

  const fetchUserData = async (uid) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const docRef = doc(db, "setupData", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        dispatch({ type: "SET_USER_DATA", payload: userData });
      } else {
        dispatch({ type: "SET_USER_DATA", payload: null });
      } //Simulate a network delay

      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      console.error("Error during data fetching:", error);
      dispatch({ type: "SET_ERROR", payload: "Error fetching user data" });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUserData(currentUser.uid);
  }, [currentUser.uid]);
  return (
    <UserDataContext.Provider value={{ state, fetchUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
