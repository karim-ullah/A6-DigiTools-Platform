import React from "react";

const GetStarted = () => {
  return (
    <div className="w-11/12 mx-auto py-30">
      <div className="text-center space-y-3">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#001931]">
          Get Started in 3 Steps
        </h1>
        <p className="text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-5">

        {/* card one */}

        <div className="border-1 border-[#fafafa] rounded-2xl p-6 text-center space-y-3 shadow-sm relative">
            <div className="badge badge-primary p-3 w-6 h-6 rounded-full absolute top-5 right-5">
                <p className="font-medium">01</p>
            </div>
            <div className="bg-[#fae9fe] p-5 w-fit rounded-full mx-auto mt-10">
                <img src="/src/assets/user.png" alt="" />
            </div>
            <h3 className="font-bold text-2xl">Create Account</h3>
            <p className="text-lg text-[#627382] px-2">Sign up for free in seconds. No credit card required to get started.</p>
        </div>

        {/* card two */}
        <div className="border-1 border-[#fafafa] rounded-2xl p-6 text-center space-y-3 shadow-sm relative">
            <div className="badge badge-primary p-3 w-6 h-6 rounded-full absolute top-5 right-5">
                <p className="font-medium">02</p>
            </div>
            <div className="bg-[#fae9fe] p-5 w-fit rounded-full mx-auto mt-10">
                <img src="/src/assets/package.png" alt="" />
            </div>
            <h3 className="font-bold text-2xl">Choose Products</h3>
            <p className="text-lg text-[#627382] px-2">Browse our catalog and select the toolsthat fit your needs.</p>
        </div>

        {/* card three */}
        <div className="border-1 border-[#fafafa] rounded-2xl p-6 text-center space-y-3 shadow-sm relative">
            <div className="badge badge-primary p-3 w-6 h-6 rounded-full absolute top-5 right-5">
                <p className="font-medium">03</p>
            </div>
            <div className="bg-[#fae9fe] p-5 w-fit rounded-full mx-auto mt-10">
                <img src="/src/assets/rocket.png" alt="" />
            </div>
            <h3 className="font-bold text-2xl">Start Creating</h3>
            <p className="text-lg text-[#627382] px-20">Download and start using your premium tools immediately.</p>
        </div>

        

      </div>
    </div>
  );
};

export default GetStarted;
