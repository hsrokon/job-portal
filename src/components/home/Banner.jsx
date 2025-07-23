import React from 'react';
import { motion, scale } from "motion/react"
const Banner = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                    <motion.h1 
                    whileHover={{scale: 1.5}}
                    whileTap={{scale: 0.8}}
                    animate={{rotate : 360, scale: 1.1, transition: {duration: 0.5}}}
                    className="text-5xl font-bold cursor-pointer">Latest Job News!</motion.h1>
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