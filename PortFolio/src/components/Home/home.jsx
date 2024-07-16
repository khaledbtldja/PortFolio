import { motion } from 'framer-motion';
import React from 'react';
import "./home.scss";

const textvariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        initial: {
            opacity: 1,
        },
        animate:{
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
     
    },
};

const slidervariants = {
    initial: {
        x: 0,
        opacity: 1,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
            staggerChildren: 0.1,
        },
    }
};

const Home = () => {
    return (
        <div className="home">
            <div className="wrapper">
                <motion.div className="textContiner" variants={textvariants} initial="initial" animate="animate">
                    <motion.h2 variants={textvariants}>BOUTELDJA KHALED</motion.h2>
                    <motion.h1 variants={textvariants}>Web developer   <br/>  and UI designer</motion.h1>
                    <motion.div className="buttons">
                        <motion.button variants={textvariants}>mes projets</motion.button>
                        <motion.button variants={textvariants}>contact me</motion.button>
                    </motion.div>

                    <motion.img variants={textvariants.scrollButton}  src="scroll.png" alt="Scroll icon" />

                </motion.div>
            </div>

            <motion.div className="slidingTextContiner" variants={slidervariants} initial="initial" animate="animate">
                PROGRAMMER
            </motion.div>

            <div className="imageContiner">
                <img src="/hero1.png" alt="Hero" />
            </div>
        </div>
    );
};

export default Home;