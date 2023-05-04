import React, { useEffect, useState } from 'react';
import SingleChefs from './SingleChefs';
import LazyLoad from 'react-lazy-load';

const Chefs = () => {
    const [Chefs, setChef] = useState([])
    useEffect(() => {
        fetch('https://cheifes-of-flavour-server-strongman01666-gmailcom.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])


    return (
        <div>
            <div className="px-4 py-16 w-full  lg:px-8 lg:py-20 bg-gray-900">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center  lg:max-w-2xl md:mb-12">
                    <div>

                    </div>
                    <h2 className=" mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto sm:text-center">
                        <span className="relative inline-block">

                            <span className="relative text-5xl text-purple-500">Here's </span>
                        </span>{' '}
                        Our <br />  Most Talented <span className='text-5xl text-purple-500'> Chiefs</span>
                    </h2>
                    <p className="text-base text-gray-300  md:text-lg font-semibold">
                        Chefs are responsible for ensuring that the food they prepare is of the highest quality. They select the ingredients, prepare the dishes, and present them in an attractive manner. Good chefs take pride in their work and strive to create dishes that are not only delicious but also visually appealing
                    </p>
                </div>
                <LazyLoad>
                    <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3">
                        {
                            Chefs.map(chef => <SingleChefs chef={chef}></SingleChefs>)
                        }

                    </div>
                </LazyLoad>
            </div>


        </div>
    );
};

export default Chefs;