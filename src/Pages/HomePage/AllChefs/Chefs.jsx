import React, { useEffect, useState } from 'react';
import SingleChefs from './SingleChefs';

const Chefs = () => {
    const [Chefs, setChef] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])


    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-900">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>

                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative text-5xl text-purple-500">Here's </span>
                        </span>{' '}
                        Our <br />  Most Talented <span className='text-5xl text-purple-500'> Chiefs</span>
                    </h2>
                    <p className="text-base text-gray-300  md:text-lg font-semibold">
                        Chefs are responsible for ensuring that the food they prepare is of the highest quality. They select the ingredients, prepare the dishes, and present them in an attractive manner. Good chefs take pride in their work and strive to create dishes that are not only delicious but also visually appealing
                    </p>
                </div>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        Chefs.map(chef => <SingleChefs chef={chef}></SingleChefs>)
                    }

                </div>
            </div>


        </div>
    );
};

export default Chefs;