import React from 'react';
import LazyLoad from 'react-lazy-load';

const SecondExSection = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-black text-gray-300 ">
                <div className="max-w-xl mb-10 sm:text-center lg:max-w-2xl md:mb-20 ">

                    <div className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-5xl text-start ">

                        <p className='pb-3'>  <span className='text-purple-500'>What </span> Our customer </p> <p>Are Saying
                            <span className='text-purple-500'> About Us </span>!!</p>
                    </div>
                    <p className="text-start text-gray-300 md:text-lg">
                        We pride ourselves on what our happy
                        clients say.
                    </p>
                </div>
                <div className="grid lg:px-4 gap-16 lg:grid-cols-2 sm:mx-auto">
                    <LazyLoad>
                        <div className="flex flex-col justify-center">
                            <div className="flex">
                                <div className="mr-4">
                                    <div className="flex items-center justify-center w-16 h-10 mb-3 rounded-full bg-indigo-50">
                                        <img
                                            className="object-cover w-24 h-16 rounded-full shadow "
                                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                            alt="Person"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h6 className=" font-bold leading-5  mb-4 text-2xl">
                                        Karen Liya
                                    </h6>
                                    <p className="text-sm text-gray-300">
                                        "I had the most amazing meal at this restaurant last night! The food was cooked to perfection, the flavors were incredible, and the presentation was beautiful. I particularly enjoyed the sea bass, which was tender and flavorful. I also appreciated the attentive service and the cozy atmosphere. Highly recommend!"


                                    </p>
                                    <hr className="w-full my-6 border-purple-500" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mr-4">
                                    <div className="flex items-center justify-center w-16 h-10 mb-3 rounded-full ">
                                        <img
                                            className="object-cover w-24 h-16 rounded-full shadow"
                                            src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                            alt="Person"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-4 text-2xl font-semibold leading-5">
                                        Anny Maria
                                    </h6>
                                    <p className="text-sm text-gray-300">
                                        "I was really disappointed with my meal at this restaurant. The food was overcooked and lacked any real flavor. The service was slow and inattentive, and the atmosphere was sterile and uninspired. I had high hopes for this place, but unfortunately, it fell short."
                                    </p>
                                    <hr className="w-full my-6 border-purple-500" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mr-4">
                                    <div className="flex items-center justify-center w-16 h-10 mb-3 rounded-full ">
                                        <img
                                            className="object-cover w-16 h-16 rounded-full shadow"
                                            src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                            alt="Person"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-4 text-2xl font-semibold  leading-5">
                                        Marry Rodam
                                    </h6>
                                    <p className="text-sm text-gray-300">
                                        "I visited this restaurant for brunch and was blown away by the delicious food and friendly service. The avocado toast was a standout - the bread was toasted to perfection, and the avocado was creamy and flavorful. The coffee was also excellent. The ambiance was cozy and welcoming. Will definitely be returning!"
                                    </p>
                                    <hr className="w-full my-6 border-purple-500" />
                                </div>
                            </div>


                        </div>
                    </LazyLoad>
                    <div className="grid grid-cols-2 gap-5 overflow-hidden">


                        <div className='col-span-2 '>
                            <LazyLoad>

                                <img
                                    className="object-cover w-full h-56 rounded shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-2xl"
                                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                            </LazyLoad>
                        </div>



                        <div className='overflow-hidden'>
                            <LazyLoad>
                                <img
                                    className="object-cover w-full h-48 rounded shadow-lg hover:scale-125 transition-all duration-300 cursor-pointer hover:shadow-2xl"
                                    src="https://images.unsplash.com/photo-1575691386840-d355059d6341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt=""
                                />
                            </LazyLoad>
                        </div>
                        <div className='overflow-hidden'>
                            <LazyLoad>
                                <img
                                    className="object-cover w-full h-48 rounded shadow-lg hover:scale-125 transition-all duration-300 cursor-pointer hover:shadow-2xl"
                                    src="https://images.unsplash.com/photo-1572054466274-25b4ed6d6899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt=""
                                />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SecondExSection;