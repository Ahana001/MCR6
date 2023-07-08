import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayContextProvider({ children }) {
  const [isReviewModalVisible, setIsReviewModalVisible] = useState();

  return (
    <DisplayContext.Provider
      value={{
        isReviewModalVisible,
        setIsReviewModalVisible,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
