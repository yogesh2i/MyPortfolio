import React, { useContext } from 'react';
import './portfolio.scss';
import Ecommerce from '../../img/ecommerce.png';
import Weather from '../../img/weather.jpg';
import Todo from '../../img/todo.jpg';
import YouTube from '../../img/YouTube.png';
import gRPC from '../../img/grpc.jpeg';
import { themeContext } from '../../Context';


export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="portfolio" id='Portfolio'>
        {/* heading  */}
        <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
        <span>Portfolio</span>
        {/* slide  */}
          <div className="box">
            <div className='text'>
              <a href="https://github.com/yogesh2i/grpc_Node"><span style={{ color: 'var(--orange)', cursor: "pointer" }}>gRPC Documentation</span></a>
              <p>Recognizing the critical need for clear and accessible documentation to facilitate the adoption of gRPC within our Node.js ecosystem, I took the initiative to develop a comprehensive suite of resources. This involved a thorough understanding of gRPC concepts and Node.js implementation specifics, culminating in the creation of detailed guides, practical, runnable code examples covering various scenarios (unary, server streaming, client streaming, bidirectional streaming), and reusable templates for service definitions and client implementations. This documentation significantly reduced the learning curve for new team members, streamlined the integration of gRPC services across different Node.js applications, and minimized potential errors arising from inconsistent implementations. </p>
            </div>
            <a href="https://github.com/yogesh2i/grpc_Node" className='imgportfolio'><img src={gRPC} alt="" /></a>
          </div>
        <div className="project_list">
        <div className="box box-even">
            <a href="https://main--youtube2i.netlify.app/" className='imgportfolio'><img src={YouTube} alt="" /></a>
            <div className='text'>
              <a href="https://main--youtube2i.netlify.app/"><span style={{ color: 'var(--orange)', cursor: 'pointer' }}>YouTube Clone</span></a>
              <p>YouTube is a web application built using Next JS, which mimmicks the behaviour of youtube. The application utilizes Redux for data flow management and SCSS for styling and Typescript.
                The application will display all functionalities like YouTube - playing video,get trending videos,search videos,get recommended videos.
                To develop this application, I used Next JS as the framework due to its flexibility, scalability, and ease of use. The Redux toolkit was chosen for data flow management because it allows for global state management and makes it easier to pass data between components without having to rely on prop drilling.
              </p>
            </div>
          </div>
          <div className="box">
            <div className='text'>
              <a href="https://yogesh2i.github.io/exclusive-commerce"><span style={{ color: 'var(--orange)', cursor: "pointer" }}>Exclusive Commerce</span></a>
              <p>
                To ensure a smooth and efficient data flow, the project utilizes React Redux. The Redux library helps manage the state of the application, making it easier to share data between different components. This ensures that the application performs efficiently and quickly, providing a hassle-free experience to the users.
                <br />
                In addition to the React Redux integration, the project also uses SCSS for styling. This helps ensure that the application is visually appealing and provides a great user experience.
                The use of ReactJS, React Redux, and SCSS ensures that the application is efficient, scalable, and easy to maintain.</p>
            </div>
            <a href="https://yogesh2i.github.io/exclusive-commerce" className='imgportfolio'><img src={Ecommerce} alt="" /></a>
          </div>
          <div className="box box-even">
            <a href="https://yogesh2i.github.io/nowweather/" className='imgportfolio'><img src={Weather} alt="" /></a>
            <div className='text'>
              <a href="https://yogesh2i.github.io/nowweather/"><span style={{ color: 'var(--orange)', cursor: 'pointer' }}>Weather Today</span></a>
              <p>Weather Today is a web application built using React JS, which allows users to view the current weather condition. The application utilizes the Context API for data flow management and SCSS for styling.
                The application will display the current temperature, humidity, wind speed, and weather condition (such as sunny, cloudy, or rainy).
                To develop this application, I used React JS as the front-end framework due to its flexibility, scalability, and ease of use. The Context API was chosen for data flow management because it allows for global state management and makes it easier to pass data between components without having to rely on prop drilling.
              </p>
            </div>
          </div>
          <div className=" box">
            <div className="text">
              <a href="https://yogesh2i.github.io/todoapp/"><span style={{ color: 'var(--orange)', cursor: 'pointer' }}>My TODO</span></a>
              <p>My Todo is a simple web application built using React.js that helps users keep track of their daily tasks and to-do lists. With the help of this application, users can add, edit, delete and mark tasks as complete or incomplete.
                The application makes use of props drilling and state lifting techniques to handle data flow between different components of the application. The main component of the application is the TodoList component which is responsible for rendering the list of tasks. The TodoList component passes the task data to its child component, the TodoItem component, using props. The TodoItem component is responsible for rendering each individual task item.
                The application is fully responsive and can be used on desktops, laptops, tablets, and mobile devices.
              </p>
            </div>
            <a href="https://yogesh2i.github.io/todoapp/" className='imgportfolio'><img src={Todo} alt="" /></a>
          </div>
        </div>

      </div>
    </>
  )
}
