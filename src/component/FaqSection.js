import React, { useState } from "react";
import styled from 'styled-components';
import { AnimateSharedLayout } from "framer-motion";

import Toggle from "./Toggle";

import { About, Description, Hide, Image } from "../styles";

const FaqSection = () => {

    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat corporis.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error totam
                        </p>
                    </div>

                </Toggle>
                <Toggle title="How Do I Start?">

                    <div className="answer">
                        <p>Different payment methods</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, neque.
                        </p>
                    </div>

                </Toggle>
                <Toggle title="What Products do you offer?">

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, neque
                    </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding 1rem 0rem;
        }
    }
`;

export default FaqSection;
