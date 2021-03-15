import React from 'react'

const Contactme = () => {
    return (
        <div className="flex flex-col">
            <div className=" bg-green-500">
                <h1>Contact US</h1>
                <h4>Feel Free to contact us any time. We will get back to you as soon as we can</h4>

            </div>
            <div className=" bg-yellow-400 relative">
                <div className="w-3/4 bg-black text-white h-96 m-auto relative top-24 flex flex-col justify-evenly">
                    <h3>Info</h3>
                    <h4>mail@mail.com</h4>
                    <h4>-081-028-0192</h4>
                    <h4> Address</h4>
                    <h4>Active Hours</h4>
                </div>

            </div>
        </div>
    )
}

export default Contactme;
