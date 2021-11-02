import React from "react";
import './Skils.css'
import ImageOne from './imges/one.png'
import ImageTwo from './imges/two.png'
import ImageThree from './imges/three.png'
import ImageFour from './imges/four.png'
import startOne from './imges/start.svg'
import startTwo from './imges/start2.svg'


class Skils extends React.Component{
    render(){
        return(
            <div className="SkilsContainer">
                <h3>Skills</h3>
                <p className="p">I work in such programs as</p>
                <div className="skilsIcon">

                    <div className="one">
                        <img className="icon" src={ImageOne}/>
                        <p>Adobe<br></br>Photoshop</p>
                        <img src={startOne}/>
                    </div>
                    <div className="two">
                        <img  className="icon" src={ImageTwo}/>
                        <p>Adobe<br></br>Illustrator</p>
                        <img src={startTwo}/>
                    </div>
                    <div className="one">
                        <img  className="icon" src={ImageThree}/>
                        <p>Adobe<br></br>After Effects</p>
                        <img src={startOne}/>
                    </div>
                    <div className="one">
                        <img  className="icon" src={ImageFour}/>
                        <p className="figma">Figma</p>
                        <img src={startOne}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skils;