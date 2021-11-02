import React from "react";
import "./main.css"
import Image from './imges/BSPP2266.jpg'
import Menu from './imges/menu.svg'


class Main extends React.Component{
    render(){
        return(
            <div className="mainContainer">
                <div className="mainOne">
                    <div className="phoneMain">
                        <h1>Denis <br/> Novik</h1>
                        <h5>UX | UI designer <br/> 24 years old, Minsk</h5>
                    </div>
                    <img className="menu" src={Menu}/>
                    <p className="pOne">RU | ENG</p>
                </div>
                <img className="man" src={Image}/>
            </div>
        )
    }
}
export default Main;