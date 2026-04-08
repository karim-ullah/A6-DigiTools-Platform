import { Check } from "lucide-react";
import React from "react";

const PricingCard = () => {
  return (
    <div>
      <div className="text-center space-y-3">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#001931]">
          Simple, Transparent Pricing
        </h1>
        <p className="text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 justify-around justify-items-center gap-5 lg:grid-cols-3 pt-15">
          {/* card one */}
  
          <div className="w-full lg:w-96 bg-[#F9FAFC] shadow-sm p-10 rounded-xl">
            <div className="">
              {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Starter</h2>
                <p>Perfect for getting started</p>
                <span className="text-xl">
                  <span className="font-bold text-4xl">$0</span>/Month
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-2 text-xs">
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Access to 10 free tools
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Basic templates
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Community support
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>1 project per month
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block rounded-full font-medium">
                  Get Started free
                </button>
              </div>
            </div>
          </div>
  
          {/* card middle */}
  
          <div className="w-full lg:w-96 bg-[#9514FA] text-white shadow-sm p-10 rounded-xl relative">
            <div className="absolute -top-3 left-[40%]">
                <p className="badge badge-warning">Popular</p>
            </div>
            <div className="">
              {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Starter</h2>
                <p>Perfect for getting started</p>
                <span className="text-xl">
                  <span className="font-bold text-4xl">$0</span>/Month
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-2 text-xs">
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Access to 10 free tools
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Basic templates
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Community support
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>1 project per month
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn bg-[#ffff] rounded-full font-medium w-full">
                  Get Started free
                </button>
              </div>
            </div>
          </div>
  
          {/* card end */}
  
          <div className=" w-full lg:w-96 bg-[#F9FAFC] shadow-sm p-10 rounded-xl">
            <div className="">
              {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Starter</h2>
                <p>Perfect for getting started</p>
                <span className="text-xl">
                  <span className="font-bold text-4xl">$0</span>/Month
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-2 text-xs">
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Access to 10 free tools
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Basic templates
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Community support
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>1 project per month
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block rounded-full font-medium">
                  Get Started free
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PricingCard;
