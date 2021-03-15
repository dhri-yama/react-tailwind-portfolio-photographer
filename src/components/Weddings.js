import React from 'react';
import Polaroid from './Polaroid';

const Weddings = () => {
    return (
        <div className="mt-24">
            <h1 className="text-center m-4 py-4 text-6xl font-black lg:px-16"> Featured Wedding </h1>
            <div className="flex flex-col lg:flex-row justify-center">
                <Polaroid/>
                <Polaroid/>
                <Polaroid/>
            </div>
        </div>
    )
}

export default Weddings;
