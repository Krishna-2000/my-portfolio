import { useState, useEffect } from "react";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio"
import About from "../About/About"
import "./HomePage.css"
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

export default function HomePage(){
    const tabs = ["Home", "Portfolio", "About", "Experience", "Contact"]
    const [activeTab, setActiveTab] = useState('Home');
    const [content, setContent] = useState('');

    useEffect(()=>{
        console.log('hi', activeTab);
        switch(activeTab){
            case "Home": setContent(<Home/>);
            break;
            case "Portfolio": setContent(<Portfolio/>)
            break;
            case "About": setContent(<About/>);
            break;
            case "Experience": setContent(<Experience/>);
            break;
            case "Contact": setContent(<Contact/>);
            break;
        }
    },[activeTab])

    return(
        <>
            <div >
                {tabs.map((tab) => (
                    <button  key={tab} onClick={()=>setActiveTab(tab)}
                    style={{
                        background: "beige",
                        cursor: "pointer",
                        borderBottom: activeTab === tab ? "3pxrgb(101, 0, 3)rgb(143, 0, 0)" : "none",
                        fontWeight: "bold",
                        marginRight: "4px",
                        color: "rgb(71 33 33)",
                      }}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <h1 className="hero-title"><div>{content}</div></h1>
            
        </>
    );
}