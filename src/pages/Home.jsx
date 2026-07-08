import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services';
import Trusted from '../components/Trusted';
import FeatureProducts from '../components/FeatureProducts';


const Home = () => {

    const data = {
        heading: "Shop Smarter, Live Better",
        description: "Your one-stop destination for all your shopping needs.",
    }
    return (
        <>
            <HeroSection Data={data} />

            <FeatureProducts />


        </>
    )
}

export default Home

