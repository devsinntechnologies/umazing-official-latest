import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ProductCategories = () => {
  return (
    <div className="space-y-6 md:space-y-10">
      <div className="w-full flex items-center justify-between">
        {/* empty div for alignments */}
        <div className="hidden md:block md:w-40" />
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-center font-bold">Product Categories</h1>
        <Link href="/categories">
          <Button variant="link">View All</Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-rows-6 gap-5">
        <div className="lg:col-span-2 xl:xl:row-span-3 bg-[#EEEEEE] rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between">
          <div className="w-full flex items-start justify-center flex-col">
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Home & Living</h4>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold">Sofa</h3>
          </div>
          <div className="w-full flex items-center justify-center md:justify-end">
            <Image
              src="/images/home/sofa.png"
              alt=""
              width={320}
              height={260}
              className="w-[78%] md:w-full lg:w-52 xl:w-80"
            />
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 bg-[#D4EDF8] rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between">
          <div className="w-full flex items-start justify-center flex-col">
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Home & Living</h4>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold">Sofa</h3>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/images/home/sofa.png"
              alt=""
              width={290}
              height={235}
              className="w-[78%] md:w-full"
            />
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 bg-[#FEF9C4] rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between">
          <div className="w-full flex items-start justify-center flex-col">
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Home & Living</h4>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold">Sofa</h3>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/images/home/sofa.png"
              alt=""
              width={290}
              height={235}
              className="w-[78%] md:w-full"
            />
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 bg-[#F2E7E3] rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between">
          <div className="w-full flex items-start justify-center flex-col">
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Home & Living</h4>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold">Sofa</h3>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/images/home/sofa.png"
              alt=""
              width={290}
              height={235}
              className="w-[78%] md:w-full"
            />
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 bg-[#E3F2E6] rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 flex flex-col justify-between">
          <div className="w-full flex items-start justify-center flex-col">
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Home & Living</h4>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold">Sofa</h3>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/images/home/sofa.png"
              alt=""
              width={290}
              height={235}
              className="w-[78%] md:w-full"
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:row-span-3 bg-[#FAE8E8] rounded-xl p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="w-full flex items-start justify-center flex-col">
        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Home & Living</h4>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold">Sofa</h3>
          </div>
          <div className="w-full flex items-center justify-center md:justify-end">
            <Image
              src="/images/home/sofa.png"
              alt=""
              width={320}
              height={260}
              className="w-full lg:w-52 xl:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
