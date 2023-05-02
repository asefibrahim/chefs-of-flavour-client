import React from 'react';
import Banner from './Banner/Banner';
import Chefs from './AllChefs/Chefs';
import ExtraSection from './ExtraSection';
import SecondExSection from './SecondExSection';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <ExtraSection></ExtraSection>
            <SecondExSection></SecondExSection>
        </div>
    );
};

export default HomePage;