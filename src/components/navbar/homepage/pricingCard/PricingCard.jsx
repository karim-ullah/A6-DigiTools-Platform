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
      <div className="grid grid-cols-1 justify-around justify-items-center gap-8 lg:grid-cols-3 pt-15">
          {/* card one */}
  
          <div className=" w-full lg:w-96 bg-[#F9FAFC] shadow-sm p-10 rounded-xl">
            
            <div className="flex flex-col h-full">
              
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Starter</h2>
                <p>Perfect for getting started</p>
                <span className="text-xl">
                  <span className="font-bold text-4xl">$0</span>/Month
                </span>
              </div>

              <div className="flex-1">
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
              </div>

              <div className="mt-6">
                <button className="btn btn-primary btn-block rounded-full font-medium">
                  Get Started free
                </button>
              </div>

            </div>

          </div>
  
          {/* card middle */}
  
          <div className="w-full lg:w-96 bg-[#9514FA] text-white shadow-sm p-10 rounded-xl relative">
            <div className="absolute -top-3 left-[35%]">
                <p className="badge badge-warning">Most Popular</p>
            </div>
            <div className="flex flex-col h-full">
              
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Starter</h2>
                <p>Best for professionals</p>
                <span className="text-xl">
                  <span className="font-bold text-4xl">$29</span>/Month
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-2 text-xs flex-1">
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Access to all premium tools
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Unlimited templates
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Priority support
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Unlimited projects
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Cloud sync
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Advanced analytics
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn bg-[#ffff] rounded-full font-medium w-full">
                  Start Pro Trail
                </button>
              </div>
            </div>
          </div>
  
          {/* card end */}
  
          <div className=" w-full lg:w-96 bg-[#F9FAFC] shadow-sm p-10 rounded-xl">
            <div className="flex flex-col h-full">
              {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Enterprise</h2>
                <p>For teams and businesses</p>
                <span className="text-xl">
                  <span className="font-bold text-4xl">$99</span>/Month
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-2 text-xs flex-1">
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Everything in Pro
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Team collaboration
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Custom integrations
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Dedicated support
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>SLA guarantee
                </li>
                <li className="flex items-center gap-2 font-medium text-[16px]">
                  <Check color="#30B868"></Check>Custom branding
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
