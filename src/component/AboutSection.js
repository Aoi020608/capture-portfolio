import React from 'react';
import styled from 'styled-components';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';


const AboutSection = () => {



    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us any photography or videography ideas that you have. We have professionals with amazing skills to help you acheive it.</p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy woth a camera" />
            </Image>
        </About>
    );
}

//styled components



export default AboutSection;