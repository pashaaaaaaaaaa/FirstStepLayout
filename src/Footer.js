import React from "react";
import Link from './imges/link.svg'
import Inst from './imges/in.png'
import bh from './imges/bh.svg'
import ball from './imges/ball.png'
import './Footer.css'


class Footer extends React.Component{
    render(){
    return(
        <div className="footer">
            <h3>Contacts</h3>
            <p className="want">Want to know more or just chat?<br></br>You are welcome!</p>
            <button>Send message</button>
            <div className="icons">
                <img src={Link}/>
                <img src={Inst}/>
                <img src={bh}/>
                <img src={ball}/>
            </div>
            <p className="link">Like me on<br></br>LinkedIn, Instagram, Behance, Dribble</p>
        </div>
    )
  }
}
export default Footer;