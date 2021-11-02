import React from "react";
import PortOne from './imges/portOne.png'
import PortTwo from './imges/portTwo.png'
import portThree from './imges/portThree.png'


import './portfolio.css'

class Portfolio extends React.Component{
    render(){
        return(
            <div className="portContainer">
                <h3>Portfolio</h3>
                <div className="portOne">
                     <img src={PortOne}/>
                </div>
                <p className="online" >Online fashion store - Homepage</p>
                <div className="portTwo">
                    <img src={PortTwo}/>
                </div>
                <div className="portThree">
                    <img src={portThree}/>
                </div>
                <p className="braun">Braun Landing Page - Concept</p>
            </div>
        )
    }
}
export default Portfolio;