"use client";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import Image from "next/image";
import { globalPaddingClasses } from "@/consts/consts";
import translations from "@/locates/pl/translations.json";

const GlobalHeader: React.FC = () => {
  const isMobile = useSelector((state: RootState) => state.device.isMobile);

  return (
    <header className={globalPaddingClasses}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={185}
        height={58}
        className="w-auto pt-3 md:py-8"
      />
      {!isMobile && (
        <div className="mb-3">
          <p className="text-2xs font-bold font-opensans uppercase pb-4">
            {`- ${translations["blog"]}`}
          </p>
          <div className="border-b border-gray-400 w-full" />
        </div>
      )}
    </header>
  );
};

export default GlobalHeader;
