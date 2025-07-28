import React from 'react';
import Banner from '../components/home/Banner';
import HotJobs from '../components/home/HotJobs';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <HotJobs></HotJobs>
            </section>
        </div>
    );
};

export default Home;