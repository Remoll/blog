"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store/store";

interface ClientProviderProps {
  children: React.ReactNode;
}

const ClientProviders = ({ children }: ClientProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProviders;
