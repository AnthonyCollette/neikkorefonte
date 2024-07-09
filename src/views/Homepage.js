import React from 'react';
import Nav from '../components/Nav';
import LiveStream from '../components/LiveStream';

const Homepage = () => {
    return (
        <div className='page'>
            <Nav />
            <LiveStream />
        </div>
    );
};

export default Homepage;