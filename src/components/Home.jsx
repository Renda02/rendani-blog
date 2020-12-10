import React ,{useState} from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';



function Home() {
    const [isOpen, setIsOpen] = useState(false);


    // (!Open) basically setting the state to true and back to false
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>        
        </>
    )
}

export default Home
