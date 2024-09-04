import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center h-full items-center">
      <div className="w-20 h-20 rounded-full border-t-8 border-l-8 border-r-8 border-primary animate-spin"></div>
    </div>
  );
};

export default Loading;
