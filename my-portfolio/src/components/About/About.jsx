import "./About.css"
import img from "../../assets/Krishnapriya.jpeg"
export default function About(){
    return(
         <section className="about">
         <div className="box">
             <div className="descr">
                 <img src={img} alt="Krishnapriya Santhosh" className="about-img"/>
                 <p className="about-content">
                     Hi there! I’m Krishnapriya Santhosh, a passionate and inventive developer, much like a canopy—offering both structure and creativity while adapting to every challenge with resilience. With a strong foundation in front-end design and development, I thrive on transforming concepts into seamless, visually captivating, and highly functional digital experiences.
                     <br /><br />
                     My strength lies in analytical reasoning and problem-solving, where I embrace challenges head-on, breaking down complexities into elegant solutions. Innovation drives me, and I am always eager to push boundaries, learn new technologies, and craft experiences that leave a lasting impact.
                     <br /><br />
                     Beyond code, my creativity finds expression in storytelling through videos, blending visuals and narratives to engage and inspire. With a relentless drive for excellence and a deep commitment to growth, I strive to not just build applications, but shape immersive digital experiences that truly resonate.
                 </p>
             </div>
         </div>
     </section>
    );
}