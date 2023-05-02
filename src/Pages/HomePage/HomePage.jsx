import React from 'react';
import Banner from './Banner/Banner';
import Chefs from './AllChefs/Chefs';
import ExtraSection from './ExtraSection';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default HomePage;