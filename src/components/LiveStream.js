import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

const LiveStream = () => {

    return (
        <section className='container live-stream'>
            <h1>Neikko</h1>
            <div className='twitch-player'>
                <TwitchEmbed channel="neikkominou" width="100%" height="100%" />
            </div>
        </section>
    );
};

export default LiveStream;