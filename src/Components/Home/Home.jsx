import React from 'react';
 import hs from './Home.module.css'

 const Home = (props) => {
     return (
         <section className={hs.homeStyle}>
             Home page - {props.text}
         </section>
     )
 }

 export default Home