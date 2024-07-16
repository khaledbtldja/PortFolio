import React from 'react';
import "./app.scss"; 
import Navbar from "./components/navbar/Navbar"; 
import Home from "./components/Home/home"; 
import Parallax from './components/parallax/parallax';
import Services from "./components/Services/services";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Comment from './components/Comment/Comment'; 


const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar/>
        <Home/>
      </section>

      <section id="motionServices">
        <Parallax type ="motionServices"/>
      </section>

      <section id="langage">
        <Services />
      </section>

      <section id="motionProject">
        <Parallax type ="motionProject"/>
      </section>

      <Project />

      <section id="contact"><Contact/></section>
      <section id="Comment">
        <Comment /> 
      </section>

    </div>
  );
};

export default App;
