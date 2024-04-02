"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GetBusiness } from "../_util/GlobalApi";
import BusinessItem from "./BusinessItem";
import BusinessItemSkeleton from "./BusinessItemSkeleton";

const BusinessList = () => {
  const params = useSearchParams();
  const [category, setCategory] = useState("all");
  const [businessList, setBusinessList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    params && setCategory(params.get("category"));
    params && getBusinessList(params.get("category"));
  }, [params]);

  const getBusinessList = (category_) => {
    setIsLoading(true);
    GetBusiness(category_).then((resp) => {
      setBusinessList(resp?.restaurants);
      setIsLoading(false);
    });
  };

  return (
    <section className="mt-5">
      <h2 className="font-bold text-2xl">Popular {category} Restaurants</h2>
      <h2 className="font-bold text-primary">{businessList?.length} Results</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-5">
        {!isLoading
          ? businessList.map((restaurants, index) => (
              <BusinessItem restaurants={restaurants} key={index} />
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <BusinessItemSkeleton key={index} />
            ))}
      </div>
    </section>
  );
};

export default BusinessList;
