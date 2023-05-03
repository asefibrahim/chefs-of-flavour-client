import React from 'react';
import RecipeBanner from './Recipebanner/RecipeBanner';
import { useLoaderData } from 'react-router-dom';

const MainChefRecipe = () => {
    const data = useLoaderData()



    return (
        <div >
            <RecipeBanner data={data}></RecipeBanner>
        </div>
    );
};

export default MainChefRecipe;