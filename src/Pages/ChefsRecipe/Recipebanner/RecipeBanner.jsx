import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaChessKing, FaGoogle } from 'react-icons/fa';
import RecipeCard from './RecipeCard';
import LazyLoad from 'react-lazy-load';


const RecipeBanner = ({ data }) => {
    const { id, image, name, likes, numRecipes, yearsOfExperience, bio
    } = data
    console.log(data);

    return (
        <div>
            <div class="relative bg-[url(https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat h-[700px] " >
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 absolute inset-0 bg-black/50  sm:from-white/95 sm:to-white/25 ">
                    <div className="grid gap-10 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none">
                                    {name}


                                </h2>
                                <p className="text-base text-white md:text-lg">
                                    {bio.length < 250 ? <>{bio}</> :
                                        <>{bio.slice(0, 250)}... <Link className='text-blue-500'>Read More</Link> </>
                                    }
                                </p>
                            </div>
                            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                                <div className=" border-l-4 shadow-sm border-deep-purple-accent-400 ">
                                    <div className="h-full p-5 border-2 border-purple-500 border-l-0 rounded-r">
                                        <h6 className="mb-2 font-semibold leading-5">

                                        </h6>
                                        <p className="text-sm text-gray-900">
                                            <a
                                                class="group relative 
                                            
                                        
                                            inline-block text-sm font-medium text-purple-400 focus:outline-none
                                            focus:ring active:text-purple-500"

                                            >
                                                <span class="absolute inset-0 border border-current"></span>
                                                <span
                                                    class="block border-2
                                                border-purple-400  px-8 py-5  transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 "
                                                >
                                                    <p className='flex text-white items-center gap-2 '>
                                                        <p className='text-lg text-purple-500'><FaHeart></FaHeart>
                                                        </p>
                                                        <span>Liked </span>
                                                        By {likes} People</p>
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className=" border-l-4 shadow-sm border-deep-purple-accent-400 ">
                                    <div className="h-full p-5 border-2 border-purple-500 border-l-0 rounded-r  ">
                                        <h6 className="mb-2 font-semibold leading-5">

                                        </h6>
                                        <p className="text-sm text-gray-900">
                                            <a
                                                class="group relative 
                                            
                                        
                                            inline-block text-sm font-medium text-purple-400 focus:outline-none
                                            focus:ring active:text-purple-500"

                                            >
                                                <span class="absolute inset-0 border border-current"></span>
                                                <span
                                                    class="block border-2
                                                border-purple-400  px-8 py-5  transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 "
                                                >
                                                    <p className='flex text-white items-center gap-2 '>
                                                        <p className='text-lg text-purple-500'><FaChessKing></FaChessKing>
                                                        </p>
                                                        <span>Number of Recipe :  </span>
                                                        {numRecipes} </p>
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </div>


                                <div>
                                    <a
                                        class="flex items-center justify-center gap-2 text-white bg-purple-800  py-4  font-bold 

                                    transition hover:scale-110 hover:shadow-xl

                                    focus:outline-none focus:ring mt-5 text-lg "
                                        href="/blog"
                                    >
                                        {yearsOfExperience} Years of Experiences <span aria-hidden="true" role="img">🤔</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className='overflow-hidden'>
                            <LazyLoad>
                                <img
                                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96 transition hover:scale-125 duration-500 hover:shadow-xl "
                                    src={image}
                                    alt=""
                                />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-black'>
                <h1 className='text-6xl font-bold text-center text-gray-200 py-12 '>{name}'s Recipe Here </h1>

                <div className=' '>
                    {
                        data.recipes.map(single => <RecipeCard single={single}></RecipeCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default RecipeBanner;

