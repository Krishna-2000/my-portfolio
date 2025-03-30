import "./Home.css"
import resume from "../../assets/Krishnapriya_Santhosh_Resume_PDF.pdf"

export default function Home() {
    function handleDownload(){
        console.log('hi');
        const fileUrl = resume;  
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Krishnapriya_Resume.pdf"; // Change this to your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h2>
                        I'M <br />
                        KRISHNAPRIYA<br />
                        SANTHOSH
                    </h2>
                    
                </div>
                    <a onClick={handleDownload} className="btn">DOWNLOAD RESUME</a>
            </section>
        </>
    );
}