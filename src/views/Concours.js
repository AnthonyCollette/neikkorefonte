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

    useEffect(() => {
        console.log(giveaways)
    }, [giveaways])

    return (
        <div className='page'>
            <Nav />
            <section className='container giveaways'>
                <h1>Giveaways</h1>
                <div className="giveaways-list">
                    {giveaways? giveaways.map((giveaway, index) => <GiveawayResume key={index} id={giveaway?.id} title={giveaway?.content?.title} image={giveaway?.content?.image} richtext={giveaway?.content?.description} finish={giveaway?.content?.finish}  winner={giveaway?.content?.winner} date={giveaway?.content?.Date} />) : <p class="text--default">Il n'y a pas de concours.</p>}
                </div>
            </section>
        </div>
    );
};

export default Concours;