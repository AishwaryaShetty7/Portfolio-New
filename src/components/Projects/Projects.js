import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import img1 from "../../Assets/Projects/access (1).png";
import img2 from "../../Assets/Projects/access (2).png";
import img3 from "../../Assets/Projects/access (3).png";
import img4 from "../../Assets/Projects/access (4).png";
import img5 from "../../Assets/Projects/access (5).png";
import img6 from "../../Assets/Projects/access (6).png";
import img7 from "../../Assets/Projects/access (7).png";
import img8 from "../../Assets/Projects/access (8).png";
import img9 from "../../Assets/Projects/access (9).png";
import img10 from "../../Assets/Projects/access (10).png";
import img11 from "../../Assets/Projects/access (11).png";
import img12 from "../../Assets/Projects/access (12).png";
import img13 from "../../Assets/Projects/access (13).png";
import img14 from "../../Assets/Projects/access (14).png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img2}
              title="Budget Box"
              description="This project is an online ledger where you can track your expenditure and income at a glance, and effectively monitor your spending and save time from the tedious process of bookkeeping. We have diagrammatic and graphical representations to enhance your understanding. This gives you the ability to sync and manage your entire bookkeeping in a single app."
              ghLink="https://github.com/AishwaryaShetty7/Budget-Box"
              demoLink="https://frontend-budgetbox.herokuapp.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={img7}
              title="Hive Wear Tech"
              description="A convenient and fun way to browse featured clothing & accessories from some of the best clothing brands online, especially aimed at teenagers. With this web app, you can browse products by any color you like or by trending colors, save products into favorites, and share products with friends on social media."
              ghLink="https://github.com/AishwaryaShetty7/HiveWearTech"
              demoLink="https://hive-tech-wear-frontend.herokuapp.com/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={img4}
              title="Cinema Paradise"
              description="In this web application you will find many informative movie reviews, you can compare different reviews on current, upcoming, recent, or vintage movies and even get a sneak peek at the trailers. You can filter the movies by genre. This extension is built in a more user-friendly manner where they can save time by loading all the currently playing movies in a single click."
              ghLink="https://github.com/AishwaryaShetty7/Cinema-Paradise"
              demoLink="https://frontend-cenema.herokuapp.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={img13}
              title="Travel Bug"
              description="Visiting Different Country? This virtual guide is extremely handy, you can scan the entire area and find invaluable information on major attractions, places of interest, events, museums, plays, and probable locations of rare species of wild animals which you may be lucky enough to get a glimpse of! With this app, you can easily navigate your visit!."
              ghLink="https://github.com/AishwaryaShetty7/Travel-Bug"
              demoLink="https://frontend-travels-bug.herokuapp.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img1}
              title="Accessories"
              description="Accessories app is a prototype of a mini E-commerce web app, designed for buying and selling electronic products and their accessories online. It has great potential to be a better version of the conventional stores and boost online sales, reduce overpricing of products and provide more verified information, and make shopping for electronics and their accessories easier."
              ghLink="https://github.com/AishwaryaShetty7/Accessories"
              demoLink="https://frontend-accessories.herokuapp.com/"
            />
          </Col>
          
          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img11}
              title="Tasty Taters"
              description="This is an online food menu service for Smokehouse restaurants. These days, when you visit a restaurant, you often use the QR code to load the PDF of the menu. It has no image and is not easy to select items. So we created the menu app where you can see food images with the needed information and select your items easily. During such unprecedented time and social distancing, online menu card technology is a boon!"
              ghLink="https://github.com/AishwaryaShetty7/TastyTaters"
              demoLink="https://tasty-taters-frontend.herokuapp.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img3}
              title="Coolpics"
              description="This project contains an extensive collection of images exclusively used by children for zoom meeting backgrounds. This application enables a preview where you can check how it looks. Users can filter images by tags, names, keywords, and get search results according to the letters typed. (due to covid, zoom usage grew exponentially, and appropriate backgrounds were required. This background can be created in one minute)"
              ghLink="https://github.com/AishwaryaShetty7/Coolpics"
              demoLink="https://frontend-coolpics.herokuapp.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img9}
              title="Java Project"
              description="This is a project I made in java that explores the Object Oriented Programming concepts like Inheritance, Abstraction and Encapsulation. The project consists of a stopwatch and timer class which are both timeable (abstract class). They work on a Time object that has fields such as hour, minute and second."
              ghLink="https://github.com/AishwaryaShetty7/Java_Project"
              demoLink=""
            />
          </Col>

          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img6}
              title="FreshZest"
              description="This is an online Juice menu service for FreshZest restaurants. These days, when you visit a restaurant, you often use the QR code to load the PDF of the menu. It has no image and is not easy to select items. So we created the menu app where you can see food images with the needed information and select your items easily. During such unprecedented time and social distancing, online menu card technology is a boon!"
              ghLink="https://github.com/AishwaryaShetty7/FreshZest"
              demoLink="https://fresh-zest-frontend-a.herokuapp.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img10}
              title="Potato Corner"
              description="This is an online food menu service for Potato Corner restaurants. These days, when you visit a restaurant, you often use the QR code to load the PDF of the menu. It has no image and is not easy to select items. So we created the menu app where you can see food images with the needed information and select your items easily. During such unprecedented time and social distancing, online menu card technology is a boon!"
              ghLink="https://github.com/AishwaryaShetty7/PotatoCorner"
              demoLink="https://potato-corner-frontend.herokuapp.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img14}
              title="Twitter Clone"
              description="With this project, we created a platform where you can express your thoughts anonymously, showcase your pictures, and much more on a single website. Post, edit, or delete posts at the convenience of just a few touches. This project is based on Twitter and anonymity adds to its special features. Without the necessity of an account, you can share your thoughts and memories with the world at any time. You can even learn CRUD(Create/Read/Update/Delete) through this project."
              ghLink="https://github.com/AishwaryaShetty7/Twitter-Clone"
              demoLink="https://twitterclone.thejasb1.repl.co/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img5}
              title="Counter App"
              description="It is a simple, easy-to-use counter app that keeps track of multiple values."
              ghLink="https://github.com/AishwaryaShetty7/CounterApp"
              demoLink="https://CounterApp.aishwaryashet10.repl.co"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img12}
              title="To-Do App"
              description="This project was bootstrapped with Create React App. Easily make a to-do list and mark tasks complete when finished."
              ghLink="https://github.com/AishwaryaShetty7/To-Do-App"
              demoLink="https://To-Do-App.aishwaryashet10.repl.co"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">

            <ProjectCard
              imgPath={img8}
              title="HTML Assessment"
              description="HTML is the language for describing the structure of Web pages. HTML gives authors the means to: Publish online documents with headings, text, tables, lists, photos, etc. Retrieve online information via hypertext links, at the click of a button."
              ghLink="https://github.com/AishwaryaShetty7/HTML-Assessment"
              demoLink="file:///Users/techi.s./Desktop/PROJECT/HTML-ASSESSMENT/index.html"
            />
          </Col>

          
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
