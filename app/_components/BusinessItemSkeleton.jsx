import React from "react";

const BusinessItemSkeleton = () => {
  return (
    <div>
      <div className="h-[130px] w-full bg-slate-200 rounded-xl animate-pulse"></div>
      <div className="w-full h-5 bg-slate-200 animate-pulse mt-3"></div>
    </div>
  );
};

export default BusinessItemSkeleton;
