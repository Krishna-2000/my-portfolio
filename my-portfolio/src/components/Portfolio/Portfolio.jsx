import { useState } from "react";
import "./Portfolio.css";
import rewardNrecog from "../../assets/reward2.webp"
import ukgaws from "../../assets/ukgaws1.jpg"
import confirmation from "../../assets/confirm1.jpg"
import aicomp from "../../assets/aicomp.jpg"
import mess from "../../assets/mess1.png"
import secret from "../../assets/s1.jpg"

const portfolioData = [
    {
        title: "Reward and Recognition tool",
        imgSrc: rewardNrecog,
        description: "A recognition platform that streamlined rewards distribution, fostering a culture of excellence.",
        details: ` A platform designed to recognize and celebrate employees across the organization. It enables the creation of customizable awards, with an automated process for nominations, evaluations, and winner announcements, fostering a culture of appreciation.`,

        tech: "React JS, Node.js, AWS S3, AWS DynamoDB, AWS Cloudwatch, AWS Event Bridge, AWS Lambda, SAP SuccessFactors, JavaScript, HTML, CSS."
    },
    {
        title: "Global Document Management Solution",
        imgSrc: ukgaws,
        description: "A solution for automating the transfer of files from any location to a centralized system.",
        details: `A fully automated system for seamless document uploads to a centralized repository. It processes files as needed and securely transfers them to the appropriate SFTP server, ensuring efficient document management. It ensures seamless access, security, and efficient management of vendor documents.`,
        tech: "React JS, AWS S3, AWS Cloudfront, AWS APIGateway, AWS EC2, AWS Lambda, CSS, Python."
    },
    {
        title: "Confirmation Tool",
        imgSrc: confirmation,
        description: "A tool that enabled managers to efficiently review and take action on employee confirmations.",
        details: `A solution that streamlines the employee confirmation process for managers. It automates review workflows, generates emails and confirmation letters, and provides detailed reports for easy tracking and decision-making.`,
        tech: "Pega PRPC, Successfactors, REST API"
    },
    {
        title: "AI Companion",
        imgSrc: aicomp,
        description: "AI-powered companion streamlining access to domain-specific knowledge for company-related inquiries.",
        details: `An AI-powered assistant that delivers precise and instant answers to domain-specific queries. It reduces reliance on individuals and provides a single, reliable source of information, enhancing efficiency.`,
        tech: "Microsoft Team, Microsoft Copilot Studio, Power Automate, HTTP Connector, Open AI, Adaptive Cards."
    },
    {
        title: "Mess Management",
        imgSrc: mess,
        description: "A mess management tool that improved operational efficiency for hostel staff.",
        details: `A digital solution for mess management agencies to track enrolled students, monitor individual purchases, and automate bill generation. Monthly reports ensure transparency and simplify financial management.`,
        tech: "PHP, MySQL, CSS, HTML, Javascript"
    },
    // {
    //     title: "Click to know more!",
    //     imgSrc: secret,
    //     description: "Click to more",
    //     details: ` 
    // The Reward and Recognition platform is a great way to acknowledge and appreciate your peers for their outstanding work. It allows organizations to create and configure awards, enabling employees to nominate and celebrate achievements. This fosters a culture of appreciation and motivation within the workplace.`,
    //     tech: "React JS, Node.js, AWS S3, AWS DynamoDB, AWS Cloudwatch, AWS Event Bridge, AWS, Lambda, SAP SuccessFactors, JavaScript, HTML, CSS."
    // }
];

export default function Portfolio() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="box">
            <div className="portfolio-container">
                {selectedItem ? (
                    // **Detailed View**
                    <div className="details-view">
                        <button className="back-button" onClick={() => setSelectedItem(null)}>
                            Back To Projects
                        </button>
                        <div className="details-content">
                            <div className="details-text">
                                <h1>{selectedItem.title}</h1>

                                <div className="descr">
                                    <img src={selectedItem.imgSrc} alt="Krishnapriya Santhosh" className="about-img" />
                                    <p>
                                        {selectedItem.details.split("\n").map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                        <br></br>
                                        {selectedItem.tech.split("\n").map((line, index) => (
                                            <span key={index}>
                                                Technologies Used: {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // **Grid View**
                    <div className="wrapper">
                        {portfolioData.map((item, index) => (
                            <div className="card" key={index}>
                                <img src={item.imgSrc} alt={item.title} />
                                <div className="info">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <button onClick={() => setSelectedItem(item)}>Know More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
