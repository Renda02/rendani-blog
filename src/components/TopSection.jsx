import Typed from 'react-typed';
import avatar from "../images/profile.JPG"

function TopSection() {
    return (
        <div className="top__section">
            <div className="intro">
                <p>Hello , I am</p>
                <h1>Rendani Luvhengo</h1>
                <br/>
            <p className="title"><Typed strings={["Front End Developer"]} typeSpeed={30} showCursor={false} /></p> 

            </div>
            <img src={avatar} alt="logo" />
           
            
        </div>
    )
}

export default TopSection
