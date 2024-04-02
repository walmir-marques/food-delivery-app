import Image from "next/image";
import React from "react";

const BusinessItem = ({ restaurants }) => {
  return (
    <div className="p-3 hover:border rounded-xl hover:border-primary cursor-pointer hover:bg-orange-100">
      <Image
        src={restaurants.banner?.url}
        alt={restaurants.name}
        width={500}
        height={130}
        className="h-[130px] rounded-xl object-cover"
      />
      <div className="mt-2">
        <h2 className="font-bold text-lg">{restaurants.name}</h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image src="/star.png" alt="star" height={14} width={14} />
            <label className="text-gray-500">4.5</label>
            <h2 className="text-gray-500 text-sm">
              {restaurants?.restroType[0]}
            </h2>
          </div>
          <h2 className="text-sm text-primary">
            {restaurants.categories[0].name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessItem;
