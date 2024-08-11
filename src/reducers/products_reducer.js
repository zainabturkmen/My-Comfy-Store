import { useEffect } from "react";

const products_reducer = (state, action) => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, isSidebarOpen: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};


export default products_reducer;
