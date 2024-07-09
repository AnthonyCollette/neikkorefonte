import React from 'react'
import Nav from '../components/Nav'
import { useStoryblok, StoryblokComponent } from '@storyblok/react'

const Concours = () => {

    const fetchData = async () => {
        console.log(story)
    }

    let slug = "giveaways"

    const story = useStoryblok(slug, { version: 'draft' })

    return (
        <div className='page'>
            <Nav />
            <section className='container giveaways'>
                <h1>Giveaways</h1>
                <button onClick={fetchData}>Test</button>
            </section>
        </div>
    );
};

export default Concours;