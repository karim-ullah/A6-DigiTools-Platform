import React from 'react';

const Stats = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-around items-center gap-10 text-center'>
            <div>
                <h1 className='font-bold lg:font-extrabold text-white text-4xl lg:text-6xl'>50K</h1>
                <p className='text-sm text-white'>Active User</p>
            </div>
            <div>
                <h1 className='font-bold lg:font-extrabold text-white text-4xl lg:text-6xl'>200+</h1>
                <p className='text-sm text-white'>Premium Tools</p>
            </div>
            <div>
                <h1 className='font-bold lg:font-extrabold text-white text-4xl lg:text-6xl'>4.9</h1>
                <p className='text-sm text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;