import React from 'react';


import Pdf from "react-to-pdf";


const ref = React.createRef();

const QnA = () => {
    return (
        <div >
            <div className='text-center text-gray-300 bg-black  pt-5 '>
                <div className='px-7 py-3 w-44 mx-auto  border-2 hover:scale-110 transition duration-300 hover:text-purple-500'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Download PDF</button>}
                    </Pdf>
                </div>

            </div>


            <section class="bg-black ">
                <div class="container px-6 py-12 mx-auto">
                    <h1 class="text-2xl font-semibold text-gray-300 text-center lg:text-3xl dark:text-gray-300">Frequently asked questions.</h1>

                    <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-2">
                        <div>
                            <div class="inline-block p-3 text-gray-300 bg-purple-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div ref={ref} className=''>
                                <h1 class="text-xl font-semibold text-gray-300 "> Tell us the differences between uncontrolled and controlled components.</h1>

                                <p class="mt-2 text-sm text-gray-300 dark:text-gray-300">
                                    Uncontrolled components are form elements where the data is handled by the DOM (Document Object Model) rather than the React component. In other words, the form element is responsible for managing its own state. When the user interacts with the form, the DOM updates the element's state and the React component can access the updated value via the DOM.

                                    Controlled components, on the other hand, are form elements where the data is managed by the React component. The component's state is used to keep track of the value of the form element, and when the user interacts with the form, the component's state is updated. This allows the React component to have complete control over the form data.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div class="inline-block p-3 text-gray-300 bg-purple-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold text-gray-300 dark:text-gray-300">How to validate React props using PropTypes</h1>

                                <p class="mt-2 text-sm text-gray-300 dark:text-gray-300">
                                    In React, PropTypes is a built-in library that allows developers to specify the expected data type and structure of props that a component receives. This helps to ensure that the component is being used correctly and can help prevent bugs caused by unexpected data.

                                    <p>
                                        1 .Import the PropTypes library: Start by importing the PropTypes library from the 'prop-types' package.
                                    </p>
                                    <p>2 . Define the expected prop types: Define the expected prop types for your component by adding a propTypes object to your component's definition. The propTypes object should contain a key for each expected prop, and the value of each key should be the expected data type. </p>
                                    <p>3 . Pass props to your component: Pass props to your component as usual when you render it.</p>


                                </p>
                            </div>
                        </div>

                        <div>
                            <div class="inline-block p-3 text-gray-300 bg-purple-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold text-gray-300 dark:text-gray-300"> What are the difference between nodejs and express js.</h1>

                                <p class="mt-2 text-sm text-gray-300 dark:text-gray-300">
                                    Node.js and Express.js are both important tools for building server-side applications with JavaScript, but they serve different purposes and have different features.

                                    Node.js is a runtime environment that allows developers to run JavaScript code on the server-side. It provides a non-blocking I/O model and event-driven architecture that makes it ideal for building scalable and high-performance server-side applications. With Node.js, you can build web servers, command-line tools, and other types of server-side applications using JavaScript.

                                    Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools that make it easier to build web applications and APIs. Express.js provides a simple and flexible API for handling HTTP requests and responses, routing, middleware, and more. It's designed to be minimalistic and unopinionated, meaning that you can use it with any front-end framework or database of your choice.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div class="inline-block p-3 text-gray-300 bg-purple-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold text-gray-300 dark:text-gray-300">What is a custom hook, and why will you create a custom hook?</h1>

                                <p class="mt-2 text-sm text-gray-300 dark:text-gray-300">
                                    custom hook is a JavaScript function that starts with the prefix "use" and allows you to encapsulate and reuse stateful logic across multiple components. Custom hooks allow you to share stateful logic between components without the need for higher-order components or render props.

                                    Here are some reasons why you might create a custom hook:

                                    Reusability: Custom hooks allow you to encapsulate and reuse stateful logic across multiple components, making your code more modular and easier to maintain.

                                    Abstraction: Custom hooks can abstract away complex logic and make it easier to reason about and test.

                                    Separation of Concerns: Custom hooks can help you separate concerns and keep your code organized by allowing you to extract stateful logic from your components.

                                    Code Reduction: Custom hooks can help reduce code duplication by providing a single source of truth for stateful logic that can be reused across multiple components.

                                    Better Composability: Custom hooks can help you create more composable code by allowing you to compose different hooks together to create more complex behavior.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default QnA;

