import React from 'react';
import coverpic from './images/flyerimg.png'
import './style.css'

const HomePage = () =>(

    <>
    <div className="header">
        
        <h1 className="heading">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.</h1>
        
        <img src={coverpic} className="FlyerImg"/>
        
     </div> 
     <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,256L48,245.3C96,235,192,213,288,208C384,203,480,213,576,234.7C672,256,768,288,864,266.7C960,245,1056,171,1152,133.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
     </div>

     <div className="subheading">
        <h4>Hi, I am Vaibhav Pandey. Nice to meet you.</h4>
     </div>

    </>

    
);
export default HomePage;