import React from 'react';
import hs from './Home.module.css'

const Home = (props) => {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    if (hours >= 6 && hours < 12) {
        timeOfDay = 'morning'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
    } else if (hours >= 17 && hours < 22) {
        timeOfDay = 'evening'
    } else {
        timeOfDay = 'night'
    }

    return (
        <section className={hs.homeStyle}>
            <h1>Good {timeOfDay}, username!</h1>
            <h2>{props.text} to homepage!</h2>
            
        </section>
    )
}

export default Home