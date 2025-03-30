import "./Experience.css";

export default function Experience() {
  const expData = [
    { company: "John Deere", post: "Senior Software Engineer I", time: "July 2022 - Present" },
    { company: "John Deere", post: "Graduate Engineering Trainee", time: "July 2021 - July 2022" },
    { company: "NIT Calicut", post: "Bachelor of Technology", major: "Computer Science and Engineering", time: "July 2017 - May 2021" }
  ];

  return (
    <div className="timeline-container">
         
      {/* {expData.map((item, index) => (
        <div key={index} style={{paddingLeft:`${300*index}px`}}>
            
          <div className="container right">
            <h3>{item.company}</h3>
            <p>{item.post}</p>
            {item.major && <p>{item.major}</p>}
            <p className="time">{item.time}</p>
          
          </div>
        </div>
      ))} */}

<div class="timeline">
  
  {expData.map((item, index)=>(
    <div class="container right">
    <div class="content">
      <h2>{item.company}</h2>
      <p>{item.post} {item?.major}</p>
      <p>{item.time}</p>
    </div>
  </div>
  ))}

</div>

    </div>
  );
}

