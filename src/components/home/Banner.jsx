import React from 'react';
import { motion, scale } from "motion/react"
import grp1 from '../../assets/banner/grp1.jpeg'
import grp2 from '../../assets/banner/grp2.jpeg'


const Banner = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <motion.img
                    src={grp1}
                    animate={{y : [-180, -160, -180], }}
                    transition={{ duration: 5 , repeat: Infinity}}
                    className="max-w-[20rem] shadow-2xl rounded-t-4xl rounded-br-4xl border-l-4 border-b-4 border-green-500"
                    />
                    <motion.img
                    src={grp2}
                    animate={{x : [80, 60, 80], }}
                    transition={{ duration: 5, repeat: Infinity}}
                    className="max-w-[20rem] shadow-2xl rounded-t-4xl rounded-br-4xl border-l-4 border-b-4 border-green-500"
                    />
                    <div>
                    <motion.h1 
                    whileHover={{scale: 1.5}}
                    whileTap={{scale: 0.8}}
                    animate={{rotate : 360, scale: 1.1, transition: {duration: 0.5}}}
                    className="text-5xl font-bold cursor-pointer">Latest <motion.span 
                    animate={{color: ['#99ffcc', '#ff00ff', '#0066ff', '#0066ff']}}
                    transition={{duration: 1.5, repeat: Infinity}}
                    >Job</motion.span> News!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;