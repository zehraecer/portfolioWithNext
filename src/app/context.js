"use client"

import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <MyContext.Provider value={{ isClicked, setIsClicked }}>
            {children}
        </MyContext.Provider>
    );
};
