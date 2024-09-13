import React, { useEffect, useContext, useState, Children } from "react";

import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();

export const UserProvider = ({ Children }) => {
  return (
    <UserContext.Provider value="user context">{Children}</UserContext.Provider>
  );
};

// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
