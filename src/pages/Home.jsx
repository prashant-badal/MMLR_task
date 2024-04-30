import * as React from 'react';

import LogoCarousel from '../component/LogoCarousel';
import TestimonialCarousel from '../component/TestimonialCarousel';
import FeaturedCase from '../component/FeaturedCase';
import FeedbackForm from '../component/Feedback';
import GetInTouch from '../component/GetInTouch';
import Footer from '../component/Footer';
import Navbar from '../component/NavBar';
import AppLayout from '../AppLayout';
import "./Home.css"



const Home = () => {

    
  return (
    <>
<AppLayout >

<div className="allComponents">

    <LogoCarousel/>
<TestimonialCarousel/>
<FeaturedCase/>
<FeedbackForm/>
<GetInTouch/> 
</div>
</AppLayout>
</>
  )}
  export default Home





