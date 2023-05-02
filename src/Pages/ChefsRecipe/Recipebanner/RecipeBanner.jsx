import React from 'react';
import { Link } from 'react-router-dom';

const RecipeBanner = ({ data }) => {
    const { id, image, name, likes, numRecipes, yearsOfExperience, bio
    } = data
    console.log(data);

    return (
        <div class="relative bg-[url(https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat h-[500px] " >
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 absolute inset-0 bg-black/50  sm:from-white/95 sm:to-white/25 ">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-purple-500  sm:text-4xl sm:leading-none">
                                {name}


                            </h2>
                            <p className="text-base text-white md:text-lg">
                                {bio.length < 250 ? <>{bio}</> :
                                    <>{bio.slice(0, 250)}... <Link className='text-blue-500'>Read More</Link> </>
                                }
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        I'll be sure to note that in my log
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        Lookout flogging bilge rat main sheet bilge water nipper fluke
                                        to go on account heave down.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        A business big enough that it could be listed
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        Those options are already baked in with this model shoot me an
                                        email clear.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src={image}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeBanner;