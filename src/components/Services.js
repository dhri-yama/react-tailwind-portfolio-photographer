import React from 'react';
import ServiceCard from './ServiceCard';


function Services({images}) {
    return (
        <div>
            <h1 className="text-6xl px-6 font-bold">Services</h1>
            <div className="flex flex-col items-center mt-6 m-auto w-screen max-w-full lg:flex-row lg:justify-center">
                <ServiceCard image={images.current[0]} text="pre-wedding"/>
                <ServiceCard image={images.current[1]} text="Wedding"/>
                <ServiceCard image={images.current[2]} text="Fashion"/>
            </div>
            <h2 className="text-center w-screen max-w-full my-10">Lorem ipsum dolor sit amet consectetur adipisici <br/>
                dolore voluptas consectetur quas aliquid, suscipit lab <br/> 
                Ipsum ullam natus accusamus aspernatur voluptatem temporibus. Sit, quibusdam. </h2>
        </div>
    );
}

export default Services;
