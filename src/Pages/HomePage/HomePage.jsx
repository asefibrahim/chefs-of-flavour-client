import React from 'react';
import Banner from './Banner/Banner';
import Chefs from './AllChefs/Chefs';
import ExtraSection from './ExtraSection';
import SecondExSection from './SecondExSection';
import ThirdExtraSection from './ThirdExtraSection';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <ExtraSection></ExtraSection>
            <SecondExSection></SecondExSection>
            <ThirdExtraSection></ThirdExtraSection>
        </div>
    );
};

export default HomePage;