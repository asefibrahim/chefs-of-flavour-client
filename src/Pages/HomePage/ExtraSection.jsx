import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <section
                class="relative bg-[url(https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat h-[500px] "
            >
                <div
                    className="absolute inset-0 bg-black/50  sm:from-white/95 sm:to-white/25 "
                ></div>

                <div
                    class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen lg:px-8"
                >
                    <div class="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right pt-5">
                        <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
                            Restaurant Consulting Services


                        </h1>

                        <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                            Alanzo, along with his team, offers culinary and management services. We have the experience to provide concept development strategies and best practice principles in order to achieve maximum sales performance.
                        </p>

                        <div class="mt-8 flex flex-wrap gap-4 text-center">

                            <a
                                class="inline-block rounded bg-purple-500
                                border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"

                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-purple-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExtraSection;