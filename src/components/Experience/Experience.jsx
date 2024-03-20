import React from 'react';
import './Experience.css';

const Experience = () => {
    return ( 
        <section id="experience" className='experience'>
            <div className="about-header">
                <div className="line"></div>
                <h1 className="middle">Experience</h1>
                <div className="line"></div>
            </div>

            <div className="experience-content">
                <div className="job-section1">
                    <div className="job-title1">
                        <h1>Job title</h1>
                        <h4>Company Name</h4>
                        <hr/>
                        <h5>April 2022 - March 2023</h5>
                    </div>
                    <div className="vline1"></div>
                    <div className="job-description1">
                        <ul>
                            <li>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</li><br></br>
                            <li>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</li><br></br>
                            <li>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</li><br></br>
                        </ul>
                    </div>
                </div>

                <div className="job-section2">
                    <div className="job-title2">
                            <h1>Job title</h1>
                            <h4>Company Name</h4>
                            <hr/>
                            <h5>April 2022 - March 2023</h5>
                        </div>
                        <div className="vline2"></div>
                        <div className="job-description2">
                            <ul>
                                <li>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</li><br></br>
                                <li>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</li><br></br>
                                <li>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</li><br></br>
                            </ul>
                        </div>
                    </div>
            </div>
        </section>
     );
}
 
export default Experience;