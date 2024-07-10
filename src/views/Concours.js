import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import GiveawayResume from '../components/GiveawayResume'

const Concours = () => {

    const [giveaways, setGiveaways] = useState()

    useEffect(() => {
        fetch('https://api.storyblok.com/v2/cdn/stories?starts_with=giveaways&token=' + process.env.REACT_APP_STORYBLOK_TOKEN).then(res => res.json()).then(data => {
            setGiveaways(data.stories)
        })
    }, [])

    return (
        <div className='page'>
            <Nav />
            <section className='container giveaways'>
                <h1>Giveaways</h1>
                <div className="giveaways-list">
                    {giveaways?.map((giveaway, index) => <GiveawayResume key={index} id={giveaway.id} title={giveaway.content.body[0].title} image={giveaway.content.body[0].image} richtext={giveaway.content.body[0].description} finish={giveaway.content.body[0].finish}  winner={giveaway.content.body[0].winner} />)}
                </div>
            </section>
        </div>
    );
};

export default Concours;