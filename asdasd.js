import React from 'react';

function App() {
  return (
    <div 
      className="min-h-screen w-screen flex flex-col justify-center lg:justify-evenly"
      style={{
        background: 'linear-gradient(to bottom, #f0f4fd, #A1A3BA)'
      }}
    >
      
      <div className="mx-10 w-40">
        <img src={process.env.PUBLIC_URL + '/assets/bolt-food-logo.png'} alt='logo'
        className="w-32 "
        />
      </div>
      
      <div className="flex flex-col mt-8 lg:flex-row-reverse lg:justify-evenly lg:transform lg:-translate-y-10">
        
        <img src={process.env.PUBLIC_URL + '/assets/food.svg'} alt='food'
          className=" m-auto sm:max-w-xl md:max-w-xl flex-none lg:w-76 "
          />
  
        <div className=" mt-2 m-auto flex flex-col">
          <h1 
          className="text-center text-5xl font-bold font-black lg:text-left  lg:text-6xl" >
            Fresh Healthy <br/>
            <span className="font-quicksand-400 font-light">
              Delicious Salads
            </span>
            </h1>
          <p className="text-center text-lg text-base text-gray-700 lg:text-left lg:px-1">
            We made fresh and healthy foods
          </p>  

        
          <span
          className="lg:text-left bg-blue-600 px-10 py-2 text-xl rounded-full m-auto mt-4 uppercase shadow-lg cursor-pointer"
          >Explore</span>
        

        </div>
        
      </div>
      
    </div>
    
  );
}

export default App;
