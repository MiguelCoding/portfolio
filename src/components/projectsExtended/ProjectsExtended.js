// figure out if this is nessesary or not. perhaps it can be put in a function and hoisted instead.
// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import './ProjectsExtended.css';
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRect } from "./utilities";


function  ProjectsExtended() 
{
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
  
    // Main function
    const runCoco = async () => {
      const net = await cocossd.load();
      console.log("COCOSSD LOaded");
      //  Loop and detect hands
      setInterval(() => {
        detect(net);
      }, 10);
    };
  
    const detect = async (net) => {
      // Check data is available
      console.log(webcamRef.current);
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
        //video.play();
  
        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
  
        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
  
        // Make Detections
        const obj = await net.detect(video);
        console.log(obj);
  
        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawRect(obj, ctx); 
      }
    };
  
    useEffect(()=>{runCoco()},[]);
  
    return (
      <div className="ProjectsExtended">
        <header className="ProjectsExtended-header">
          <Webcam
            ref={webcamRef}
            muted={true} 
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />
  
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 8,
              width: 640,
              height: 480,
            }}
          />
        </header>
      </div>
    );
  };
export default ProjectsExtended;


// {
//     useEffect(() => {
//         AOS.init({
//         duration: 1000,
//         });
//     }, []);
//     return (
//         <section id="projects">
//         <div className="container projects" data-aos="fade-up">
//             <h2>Projects</h2>
//             <div className="projects-grid">
//             <div className="project" data-aos="fade-right">
//                 <div className="project-icon">
//                 <FaGithub color="#0a1930" size={22} />
//                 </div>
//                 <div className="project-text">
//                 <h3>Autocomplete AI</h3>
//                 <p>
//                     Fill out the blanks here for all the possible projects that may arise in the future.
//                 </p>
//                 <a href="https://www.google.com"><h1>View Project</h1></a>
//                 </div>
//             </div>
//             <div className="project" data-aos="fade-left">
//                 <div className="project-icon">
//                 <FcAndroidOs color="#0a1930" size={22} />
//                 </div>
//                 <div className="project-text">
//                 <h3>Android development</h3>
//                 <p>
//                     testing values.
//                 </p>
//             </div>

//             </div>
//             </div>
//         </div>
//         </section>
//     );
// };