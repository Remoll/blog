import React from "react";

interface DotMarkersProps {
  children: React.ReactNode[];
  currentIndex: number;
}

const DotMarkers = ({ children, currentIndex }: DotMarkersProps) => {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      {React.Children.map(children, (_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
            index === currentIndex ? "bg-secondary" : "border border-secondary"
          }`}
        />
      ))}
    </div>
  );
};

export default DotMarkers;
