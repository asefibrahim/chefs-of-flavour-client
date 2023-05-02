import React from 'react';

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { FaCheck, FaHeart } from 'react-icons/fa';

const RecipeCard = ({ single }) => {
    const { name, rating, ingredients, image, method } = single

    return (
        <div>
            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 py-5"

            ><div className="flex flex-col  overflow-hidden bg-black border rounded shadow-sm lg:flex-row sm:mx-auto">

                    <div className="relative overflow-hidden lg:w-1/2">
                        <img
                            src={image}
                            className="object-cover w-full lg:absolute h-60 lg:h-full   transition hover:scale-125 duration-500 hover:shadow-xl"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-black lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                        >
                            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-8  lg:p-16 lg:pl-10 lg:w-1/2">

                        <div className='flex items-center gap-5 justify-between mb-5'>
                            < h1 className=' font-bold text-4xl text-gray-300'  > {name}</h1>
                            <p className='flex items-center w-32  text-gray-300 '>
                                <Rating style={{ maxWidth: 250 }} value={rating} readOnly />

                                <span >{rating}</span>
                            </p>

                        </div>
                        <div className=''>
                            <p>
                                <p className='text-2xl font-bold  mb-3 text-gray-300 '>  Ingredient :</p>  {

                                    ingredients.slice(0, 5).map(ing => {
                                        return <p className='flex text-gray-300 gap-2 items-center '>

                                            <span className='text-purple-500'>  <FaCheck></FaCheck></span>
                                            {ing}</p>

                                    })
                                }

                            </p>

                            <p className='mt-4 mb-3 text-gray-300 '> <span className='text-xl font-bold text-gray-300'>Method </span>: {method}</p>
                        </div>

                        <div className="flex items-center">
                            <button

                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-purple-700 text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none    transition hover:scale-110 hover:shadow-xl"
                            >
                                Add to Favorite <FaHeart className='text-red-500 '></FaHeart>
                            </button>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-gray-300 "
                            >
                                Learn More
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div >


    );
};

export default RecipeCard;