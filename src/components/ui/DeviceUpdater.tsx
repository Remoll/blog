"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "@/hooks/useMediaQuery";
import { setIsMobile } from "@/store/slices/deviceSlice";
import { mobileBreakpoint } from "@/consts/consts";

const DeviceUpdater: React.FC = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(mobileBreakpoint);

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
  }, [isMobile, dispatch]);

  return null;
};

export default DeviceUpdater;
