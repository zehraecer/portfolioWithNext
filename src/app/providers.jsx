"use client";

import { MyProvider } from "./context";

export default function Providers({ children }) {
    return <MyProvider>{children}</MyProvider>;
}