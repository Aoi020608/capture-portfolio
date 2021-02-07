import React from "react";
//page components
import AboutSection from '../component/AboutSection';
import ServiceSection from "../component/ServiceSection";
import FaqSection from '../component/FaqSection';
//animation
import {motion} from "framer-motion";
import { pageAnimation } from "../animaton";

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate="show" exit="exit">
            <AboutSection />
            <ServiceSection />
            <FaqSection />
        </motion.div>
    );
}

export default AboutUs;
