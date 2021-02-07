import React from 'react';
import styled from 'styled-components';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from "../animaton";
import Wave from './Wave';


const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us any photography or videography ideas that you have. We have professionals with amazing skills to help you acheive it.</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} intial="hidden" animate="show" src={home1} alt="guy woth a camera" />
            </Image>
            <Wave />
        </About>
    );
}




export default AboutSection;