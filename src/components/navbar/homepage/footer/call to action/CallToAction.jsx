import React from 'react';

const CallToAction = () => {
    return (
        <div className='w-11/12 mx-auto text-center text-white space-y-4'>
            <h2 className='font-extrabold text-3xl lg:text-4xl'> Ready to Transform Your Workflow?</h2>
            <p className='text-[16px]'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

            <div className='space-x-3'>
                <button className='btn rounded-full'>Explore Products</button>
                <button className='btn btn-outline rounded-full'>View Pricing</button>
            </div>
            <p className='text-[16px]'>14-day free trial • No credit card required • Cancel anytime</p>

        </div>
    );
};

export default CallToAction;