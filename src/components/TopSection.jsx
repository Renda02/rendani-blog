import Typed from 'react-typed';
import avatar from "../images/profile.JPG"

function TopSection() {
    return (
        <div className="main">
            <div className="intro">
                <p>Hello , I am</p>
            <h1>Rendani Luvhengo</h1>
            <p className="title"><Typed strings={["Front End Developer"]} typeSpeed={30} showCursor={false} /></p> 
            <p>Who enjoys to take new challenges and is always eagerly seeking ways to grow. </p>
            </div>
            <img src={avatar} alt="logo" />
           
            
        </div>
    )
}

export default TopSection
