import React from 'react';

const ServiceCard = ({text,image}) => {
    console.log(image)
    return (
        <div className="container  h-96 w-96 m-2 shadow-lg">
            <div className="container m-auto h-72 w-72 mt-12">
                <img src={process.env.PUBLIC_URL+ image} alt=""
                    className="w-72 h-72 object-cover"
                    />
            </div>
            <h3 className="text-center text-black text-2xl uppercase pt-1">{text}</h3>
        </div>
    )
}

export default ServiceCard;
