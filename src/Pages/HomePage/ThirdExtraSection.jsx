import React from 'react';
import LazyLoad from 'react-lazy-load';

const ThirdExtraSection = () => {
    return (
        <div>

            <section class="bg-black
             dark:bg-gray-900">
                <div class="max-w-6xl px-6 pb-16 mx-auto">
                    <p class="text-xl font-medium text-purple-500 ">Testimonials</p>

                    <h1 class="mt-2 text-2xl font-semibold text-gray-300 capitalize lg:text-3xl dark:text-gray-300">
                        Meet Our Master Chef
                    </h1>

                    <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                        <div class="absolute w-full bg-gray-800 -z-10 md:h-96 rounded-2xl"></div>

                        <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">

                            <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="client photo" />


                            <div class="mt-2 md:mx-6">
                                <div>
                                    <p class="text-xl font-medium tracking-tight text-gray-300">Enrique Olvera </p>
                                    <p class="text-blue-200 ">Chief  chef at Stech</p>
                                </div>

                                <p class="mt-4 text-lg leading-relaxed text-gray-300 md:text-xl"> “Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat.” <br /> <br /> - Enrique Olvera </p>

                                <div class="flex items-center justify-between mt-6 md:justify-start">
                                    <button title="left arrow" class="p-2 text-gray-300 transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <button title="right arrow" class="p-2 text-gray-300 transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>

        </div>
    );
};

export default ThirdExtraSection;