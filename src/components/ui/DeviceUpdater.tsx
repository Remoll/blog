"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "@/hooks/useMediaQuery/useMediaQuery";
import { setIsMobile } from "@/store/slices/deviceSlice/deviceSlice";

const mobileBreakpoint = "(max-width: 767px)";

const DeviceUpdater: React.FC = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(mobileBreakpoint);

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
  }, [isMobile, dispatch]);

  return null;
};

export default DeviceUpdater;
