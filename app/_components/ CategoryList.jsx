"use client";
import React, { useEffect, useRef, useState } from "react";
import { GetCategory } from "../_util/GlobalApi";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CategoryList = () => {
  const listRef = useRef(null);
  const [categoryList, setCategoryList] = useState([]);
  const params = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setSelectedCategory(params.get("category"));
  }, [params]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GetCategory().then((resp) => setCategoryList(resp.categories));
  };

  const scrollRightHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mt-10 relative">
      <ArrowLeftCircle className="absolute -left-10 top-9 bg-gray-500 rounded-full text-white h-8 w-8 cursor-pointer" />
      <div className="flex gap-4 overflow-auto scrollbar-hide" ref={listRef}>
        {categoryList.map((category, index) => (
          <Link
            href={"?category=" + category.slug}
            key={index}
            className={`flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28 hover:border-primary hover:bg-orange-100 cursor-pointer group ${
              selectedCategory === category.slug &&
              "border-primary text-primary bg-orange-100"
            }`}
          >
            <Image
              className="group-hover:scale-110 transition-all duration-200"
              src={category.icon?.url}
              alt={category.name}
              width={40}
              height={40}
            />
            <h2 className="text-sm font-bold group-hover:text-primary">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
      <ArrowRightCircle
        className="absolute -right-10 top-9 bg-gray-500 rounded-full text-white h-8 w-8 cursor-pointer"
        onClick={() => scrollRightHandler()}
      />
    </section>
  );
};

export default CategoryList;
