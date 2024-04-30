import * as React from 'react';

import LogoCarousel from '../component/LogoCarousel';
import TestimonialCarousel from '../component/TestimonialCarousel';
import FeaturedCase from '../component/FeaturedCase';
import FeedbackForm from '../component/Feedback';
import GetInTouch from '../component/GetInTouch';
import Footer from '../component/Footer';
import Navbar from '../component/NavBar';
import AppLayout from '../AppLayout';




const Home = () => {

    
  return (
    <>
<AppLayout >



    <LogoCarousel/>
<TestimonialCarousel/>
<FeaturedCase/>
<FeedbackForm/>
<GetInTouch/> 

</AppLayout>
</>
  )}
  export default Home





