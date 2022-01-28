import React from 'react';
import '../styles/styles.css';
import LogoAbout from './LogoAbout';
import { motion } from 'framer-motion';
import { variants } from '../../sources/Variants';

const Index = () => {
    return (
        <div className="content">
            <div className="row">
                <motion.div 
                    className="column logo"
                    variants={variants}
                    initial="hidden"
                    animate="show"
                >
                    <LogoAbout/>
                </motion.div>
                <div className="column">
                    <h1 className="title">About</h1>
                    <p className="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam mollitia totam beatae eum asperiores doloribus quas consectetur perferendis, atque numquam qui ipsa sit ullam ad ex possimus provident delectus harum? Iure nulla vel quod ipsam eveniet placeat quae minima eum consequatur, nesciunt, non expedita omnis, voluptas eos qui. Quo.</p>
                </div>
            </div>
        </div>
    );
};

export default Index;
