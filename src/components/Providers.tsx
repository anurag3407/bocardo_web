"use client";

import React from "react";
import { AppProvider } from "@/context/AppContext";

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default Providers;
