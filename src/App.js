import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import priya from "./images/priya.png";
import farhan from "./images/farhan.png";
import priyanka from "./images/priyanka.png";
import Image1 from "./images/image 1.png";
import Image2 from "./images/image 2.png";
import Image3 from "./images/image 3.png";
import Image4 from "./images/image 4.png";
import Image5 from "./images/image 5.png";
import Image6 from "./images/image 6.png";
import Image7 from "./images/image 7.png";
import Image8 from "./images/image 8.png";
import LiveClass from "./images/liveClass.png";
import Progress from "./images/progress.png";
import Recorded from "./images/record.png";
import right from "./images/image 47.png";
import suvy from "./images/Mask-group.png";
import vector1 from "./images/image 157.png";
import vector2 from "./images/image 158.png";
import vector3 from "./images/image 159.png";
import vector4 from "./images/image 160.png";
import "./index.css";
import Mrs from "./images/mrsp.svg";

function pop()
{
  alert("Please confirm your details");
}
function App() {
  const [plans, setPlans] = useState("Free");
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
        </Routes>
      </Router>
      <div className="dashboard">
        <div className="py-1"></div>
        <img
          style={{ width: 320 }}
          className="m-auto py-3 d-lg-none d-md-none"
          src={require("./images/learning.png")}
        />
        <form className="form">
          <h1
            style={{
              textAlign: "center",
              fontFamily: '"Roboto"',
              marginTop: "-4px",
              fontSize: 25,
              color: "#ffffff",
            }}
          >
          <a href="http://localhost:3000/signin">  Start Learning for Free</a>
          </h1>
          <h4
            style={{
              textAlign: "center",
              fontFamily: '"Roboto"',
              marginBottom: 15,
              fontSize: "small",
              color: "#ffffff",
            }}
          >
            Learn from India’s best teachers
          </h4>
          <h3 className="dash">Enter Your Details</h3>
          <input type="text" placeholder="Student’s Name" />
          <input type="text" placeholder="Mobile Number" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Class" />
          <a href="">
          <button 
          // OnClick={pop()}
            type="submit"
            style={{ backgroundColor: "#d77a30", margin: "auto" }}
            className="btn"
          >
            <span
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                color: "ffffff",
                fontSize: "24px",
                marginTop: "-20px",
              }}
            >
              Start Learning
            </span>
          </button>
            
          <h1
            style={{
              textAlign: "center",
              fontFamily: '"Roboto"',
              marginTop: "-4px",
              fontSize: 25,
              color: "#ffffff",
            }}
          >
          {/* <a href="http://localhost:3001/signin">  Start Learning for Free</a> */}
          {/* <button>Enroll now</button> */}
          </h1>
          </a>
        </form>
      </div>
      <div style={{ marginTop: "-20px" }} className="container">
        <div className="row">
          <div className="col-lg-4 col-6  my-3 ">
            <div
              style={{
                height: "70px",
                background: "#ffffff",
                boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.08)",
                borderRadius: "10px",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                style={{
                  verticalAlign: "middle",
                  marginTop: "20px",
                  marginRight: "-15px",
                  height: "30px",
                  width: "30px",
                }}
                src={LiveClass}
              />
              <div style={{ marginTop: "25px", marginLeft: "20px" }}>
                Start Learning
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-6  my-3">
            <div
              style={{
                height: "70px",
                background: "#ffffff",
                boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.08)",
                borderRadius: "10px",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                style={{
                  verticalAlign: "middle",
                  marginTop: "30px",
                  marginRight: "5px",
                  height: "15px",
                  width: "15px",
                }}
                src={Recorded}
              />
              <div style={{ marginTop: "25px" }}>Recorded Sessions</div>
            </div>
          </div>
          <div class="col-3 d-lg-none d-md-none"></div>
          <div className="col-lg-4 col-6 my-3">
            <div
              style={{
                height: "70px",
                background: "#ffffff",
                boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.08)",
                borderRadius: "10px",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                style={{
                  verticalAlign: "middle",
                  marginTop: "28px",
                  marginRight: "5px",
                  height: "20px",
                  width: "15px",
                }}
                src={Progress}
              />
              <div style={{ marginTop: "25px" }}>Progress Tracking</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container my-5 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Experience the Highest Learning with SUVY
              </h1>

              <p class="text-gray-900">
                Are you a student in Class 1-10? With SUVY, you interact and
                learn with the very best teachers, through hands-on activities,
                projects,{" "}
              </p>
              <p class="text-gray-900">
                interactive quizzes and doubt clearing sessions.{" "}
              </p>
              <p class="text-gray-900">
                With SUVY, even Online Classes will be super Engaging, fun,
                personalized and truly useful to your learning progress.{" "}
              </p>
              <p class="text-gray-900">
                We are dedicated, passionate educators, eager to take your
                knowledge and curiosity, to the next level.{" "}
              </p>

              <div class="my-5">
                <p class="text-gray-900">
                  We select our teachers after a rigorous 3-step selection
                  process, and then train them to SUVY Quality. We also
                  rigorously monitor
                </p>
                <p class="text-gray-900">
                  {" "}
                  the quality and usefulness of our classes so you can learn
                  better and excel in any subject area.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container" align="center">
        <iframe
          className="video"
          height="345"
          width="1000"
          src="https://www.youtube.com/embed/UFoS02LgSHE"
        ></iframe>
      </div>
      <div className="container">
        <h1
          className="text-center my-5"
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "160%",
            letterSpacing: "0.02em",
            color: "#2C2C2C",
          }}
        >
          Our Team Comes From
        </h1>
        <div className="row">
          <div className="col-lg-2 col-3 my-3">
            <img src={Image1} />
          </div>
          <div className="col-lg-2 col-3 my-3">
            <img src={Image2} />
          </div>
          <div className="col-lg-2 col-3 my-3">
            <img src={Image3} />
          </div>
          <div className="col-lg-2 col-3 my-3">
            <img src={Image8} />
          </div>
          <div className="col-lg-2 col-3 my-3">
            <img src={Image4} />
          </div>
          <div className="col-lg-2 col-3 my-3">
            <img src={Image5} />
          </div>
          <div className="col-lg-2 col-3 my-3">
            <img src={Image6} />
          </div>
          <div className="col-lg-2 col-3 my-3">
            <img src={Image7} />
          </div>
        </div>
      </div>

      <div className="row" align="center">
        <p
          className="col-12"
          style={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "25px",
            lineHeight: "84px",
            color: "#2C2C2C",

          }}
        > Students and Parents Love Learning with SUVY</p>
         {/* <h1 > </h1> */}
        
        <p
          className="col-12"
          style={{
            marginTop: "-15px",
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "84px",
            letterSpacing: "0.2px",
            color: "#2C2C2C",
          }}
        >
          Here’s how they benefited from the SUVY Learning Experience
        </p>
      </div>

      {/* carousel1 Desktop*/}

      <>
        {/* Carousel wrapper */}
        <div
          id="carouselMultiItemExample"
          className="carousel slide carousel-dark text-center desktop-carousel"
          data-mdb-ride="carousel"
        >
          {/* Controls */}
          {/* <div
            style={{ gap: "90%" }}
            className="d-flex justify-content-center my-3"
          >
            <button
              className="carousel-control-prev position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
          {/* Inner */}
          <div className="carousel-inner py-4">
            {/* Single item */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src={require("./images/mrsp.jpg")}
                      alt="avatar"
                      style={{ width: 150 }}
                    />
                    <h5
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "26px",
                        color: "#2F327D",
                      }}
                      class="my-3"
                    >
                      Mrs Poorni
                    </h5>
                    <h4 className="my-3">
                      Parent of 11th CBSE Physics Student
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "180%",
                        textAlign: "center",
                      }}
                    >
                      “I’m glad that my son was able to try out several tutors
                      with SUVY before selecting one whose teaching style
                      exactly matched his needs in understanding Physics better”
                    </p>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src={require("./images/mrm.jpg")}
                      alt="avatar"
                      style={{ width: 150 }}
                    />
                    <h5
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "26px",
                        color: "#2F327D",
                      }}
                      class="my-3"
                    >
                      Mr Meiyalgan
                    </h5>
                    <h4 className="my-3">
                      Parent of Class 8 student, KSA, IGCSE
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "180%",
                        textAlign: "center",
                      }}
                    >
                      “My son needed several focused hours of study just before
                      his exams. SUVY classes helped us with just that - by
                      providing us excellent tutors on time. His overall
                      interest in studies has gone up since these sessions, and
                      we’re happy to continue with regular classes now.”
                    </p>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src={require("./images/kid.jpg")}
                      alt="avatar"
                      style={{ width: 150 }}
                    />
                    <h5
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "26px",
                        color: "#2F327D",
                      }}
                      class="my-3"
                    >
                      Sabari Raj
                    </h5>
                    <h4 className="my-3">
                      Sabari Raj, Class 9 student, India, CBSE
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "180%",
                        textAlign: "center",
                      }}
                    >
                      “At Suvy classes, I am taught difficult topics in an easy
                      way, my doubts are cleared then and there and topics
                      become interesting because of the excellent teaching
                      style. I joined as a 9th Science student, and now am
                      planning to request JEE coaching from SUVY tutors. I can
                      trust their quality and affordability.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Inner */}
        </div>
        {/* Carousel wrapper */}
      </>
      {/* carousel1 Mobile*/}
      <>
        <div
          id="carouselMultiItemExample3"
          className="carousel slide carousel-dark text-center mobile-carousel"
          data-mdb-ride="carousel"
        >
          {/* Controls */}
          {/* <div
            style={{ gap: "90%" }}
            className="d-flex justify-content-center my-3"
          >
            <button
              className="carousel-control-prev position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample3"
              data-mdb-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample3"
              data-mdb-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
          {/* Inner */}
          <div className="carousel-inner py-4">
            {/* Single item */}
            <div className="carousel-item active">
              <div>
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src={require("./images/mrsp.jpg")}
                  alt="avatar"
                  style={{ width: 150 }}
                />
                <h5
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#2F327D",
                  }}
                  class="my-3"
                >
                  Mrs Poorni
                </h5>
                <h4 className="my-3">Parent of 11th CBSE Physics Student</h4>
                <p
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "180%",
                    textAlign: "center",
                  }}
                >
                  “I’m glad that my son was able to try out several tutors with
                  SUVY before selecting one whose teaching style exactly matched
                  his needs in understanding Physics better”
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src={require("./images/mrm.jpg")}
                  alt="avatar"
                  style={{ width: 150 }}
                />
                <h5
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#2F327D",
                  }}
                  class="my-3"
                >
                  Mr Meiyalgan
                </h5>
                <h4 className="my-3">Parent of Class 8 student, KSA, IGCSE</h4>
                <p
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "180%",
                    textAlign: "center",
                  }}
                >
                  “My son needed several focused hours of study just before his
                  exams. SUVY classes helped us with just that - by providing us
                  excellent tutors on time. His overall interest in studies has
                  gone up since these sessions, and we’re happy to continue with
                  regular classes now.”
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src={require("./images/kid.jpg")}
                  alt="avatar"
                  style={{ width: 150 }}
                />
                <h5
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#2F327D",
                  }}
                  class="my-3"
                >
                  Mr Sabari Raj
                </h5>
                <h4 className="my-3">
                  Sabari Raj, Class 9 student, India, CBSE
                </h4>
                <p
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "180%",
                    textAlign: "center",
                  }}
                >
                  “At Suvy classes, I am taught difficult topics in an easy way,
                  my doubts are cleared then and there and topics become
                  interesting because of the excellent teaching style. I joined
                  as a 9th Science student, and now am planning to request JEE
                  coaching from SUVY tutors. I can trust their quality and
                  affordability.”
                </p>
              </div>
            </div>
          </div>
          {/* Inner */}
        </div>
      </>

      <div
        className="my-5"
        style={{
          fontFamily: "'Roboto'",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "28px",
          lineHeight: "33px",
          textAlign: "center",
          color: "#4345AF",
        }}
      >
        <button
          style={{
            margin: "auto",
            color: "white",
            width: "35%",
            height: "53px",
            fontSize: "medium",
            background:
              "linear-gradient(270.12deg, #E57E25 59.37%, rgba(240, 196, 25, 0) 144.38%)",
            filter:
              "drop-shadow(-5px -5px 10px rgba(255, 255, 255, 0.15)) drop-shadow(10px 10px 20px rgba(170, 170, 204, 0.15))",
            borderRadius: "10px",
          }}
        >
         <a href="http://localhost:3000/signin"> Start Learning</a>
        </button>
      </div>

      <div align="center" className="my-5">
        <h1
          style={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "84px",
            letterSpacing: "0.2px",
            color: "#2C2C2C",
          }}
        >
          SUVY Learning Plans for Students in Standards 1-10
        </h1>
        <p>
          The plans apply to school students of all curricula, and each provides
          an interactive and immersive experience
        </p>
      </div>

      <div id="learning-plans" className="container p-5 options">
        <div align="center" className="row gx-5">
          <div className="col-lg-3 col-4 my-3">
            <button
              className={` ${plans == "Free" ? "activePlan" : ""}`}
              onClick={() => {
                setPlans("Free");
              }}
              style={{
                width: "96px",
                height: "40px",
                background: "#FFFFFF",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(156, 156, 156, 0.48)",
                borderRadius: "4px",
              }}
            >
              Free Trial
            </button>
          </div>
          <div className="col-lg-3 col-4 my-3">
            <button
              className={`${plans == "1month" ? "activePlan" : ""}`}
              onClick={() => {
                setPlans("1month");
              }}
              style={{
                width: "96px",
                height: "40px",
                background: "#FFFFFF",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(156, 156, 156, 0.48)",
                borderRadius: "4px",
              }}
            >
              1 Month
            </button>
          </div>
          <div className="col-lg-3 col-4 my-3">
            <button
              className={`${plans == "6months" ? "activePlan" : ""}`}
              onClick={() => {
                setPlans("6months");
              }}
              style={{
                width: "96px",
                height: "40px",
                background: "#FFFFFF",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(156, 156, 156, 0.48)",
                borderRadius: "4px",
              }}
            >
              6 Months
            </button>
          </div>
          <div className="col-4 d-lg-none d-md-none"></div>
          <div className="col-lg-3 col-5 my-3">
            <button
              className={`${plans == "Yearly" ? "activePlan" : ""}`}
              onClick={() => {
                setPlans("Yearly");
              }}
              style={{
                width: "96px",
                height: "40px",
                background: "#FFFFFF",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(156, 156, 156, 0.48)",
                borderRadius: "4px",
              }}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      {plans == "Free" && (
        <div class="container my-3">
          
          <div class="row">
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4 offset-lg-3 col-lg-3 text-center my-3"
            >
              Basic Pro
            </div>

            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4 col-lg-3 text-center my-3"
            >
              Advanced Pro
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4  col-lg-3 text-center my-3"
            >
              Custom Pro
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 1-5
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 6-10
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Live Interactive Classes{" "}
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              In Class Quizzes
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Live Doubt Clearing
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Student Progress Report
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              School Specific Help
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Evaluated Assignments
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Prent Teacher Meetings
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Dual Teacher Model
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Flexible Timings
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
          </div>

          {/* <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 1-5
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 6-10
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">0 INR</div>
          </div> */}

          <div class="row gx-5">
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4 offset-lg-3 col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Try Free
              </button>
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4 col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Choose Plan
              </button>
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4  col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {plans == "1month" && (
        <div class="container my-3">
          <div class="row">
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4 offset-lg-3 col-lg-3 text-center my-3"
            >
              Basic Pro
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4 col-lg-3 text-center my-3"
            >
              Advanced Pro
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4  col-lg-3 text-center my-3"
            >
              Custom Pro
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 1-5
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">849 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">1799 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">2178 INR</div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 6-10
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">849 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">1989 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">2178 INR</div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Live Interactive Classes{" "}
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              In Class Quizzes
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Live Doubt Clearing
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Student Progress Report
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              School Specific Help
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Evaluated Assignments
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Prent Teacher Meetings
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Dual Teacher Model
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Flexible Timings
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
          </div>
          {/* <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 1-5
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">849 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">1799 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">2178 INR</div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 6-10
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">849 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">1989 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">2178 INR</div>
          </div> */}
          <div class="row gx-5">
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4 offset-lg-3 col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Try Free
              </button>
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4 col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Choose Plan
              </button>
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4  col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {plans == "6months" && (
        <div class="container my-3">
          <div class="row">
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4 offset-lg-3 col-lg-3 text-center my-3"
            >
              Basic Pro
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4 col-lg-3 text-center my-3"
            >
              Advanced Pro
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4  col-lg-3 text-center my-3"
            >
              Custom Pro
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 1-5
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">4974 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">8694 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              13068 INR
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 6-10
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">4974 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">9294 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              13068 INR
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Live Interactive Classes{" "}
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              In Class Quizzes
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Live Doubt Clearing
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Student Progress Report
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              School Specific Help
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Evaluated Assignments
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Prent Teacher Meetings
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Dual Teacher Model
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Flexible Timings
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
          </div>
          {/* <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 1-5
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">4974 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">8694 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              13068 INR
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 6-10
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">4974 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">9294 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              13068 INR
            </div>
          </div> */}
          <div class="row gx-5">
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4 offset-lg-3 col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Try Free
              </button>
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4 col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Choose Plan
              </button>
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4  col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {plans == "Yearly" && (
        <div class="container my-3">
          <div class="row">
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4 offset-lg-3 col-lg-3 text-center my-3"
            >
              Basic Pro
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4 col-lg-3 text-center my-3"
            >
              Advanced Pro
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="col-4  col-lg-3 text-center my-3"
            >
              Custom Pro
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 1-5
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">9499 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              14988 INR
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              26136 INR
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 6-10
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">9499 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              17999 INR
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              26136 INR
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Live Interactive Classes{" "}
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              In Class Quizzes
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Live Doubt Clearing
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Student Progress Report
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              School Specific Help
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Evaluated Assignments
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Prent Teacher Meetings
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Dual Teacher Model
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img src={right} style={{ margin: "auto" }} />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Flexible Timings
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              <img
                src={require("./images/cross.png")}
                style={{ margin: "auto" }}
              />
            </div>
          </div>
          {/* <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 1-5
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">9499 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              14988 INR
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              26136 INR
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-xs-4 col-lg-3 text-center my-3"
              style={{
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#000000",
              }}
            >
              Class 6-10
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">9499 INR</div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              17999 INR
            </div>
            <div class="col-4 col-xs-4 col-lg-3 text-center my-3">
              26136 INR
            </div>
          </div> */}
          <div class="row gx-5">
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4 offset-lg-3 col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Try Free
              </button>
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4 col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Choose Plan
              </button>
            </div>
            <div
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "28px",
                lineHeight: "33px",
                textAlign: "center",
                color: "#4345AF",
              }}
              class="p-3 col-4  col-lg-3 text-center my-3"
            >
              <button
                style={{
                  fontSize: "medium",
                  color: "white",
                  background:
                    "linear-gradient(90.03deg, #F0C419 -44.87%, #E57E25 94.27%)",
                  borderRadius: "10px",

                  height: "45px",
                }}
                className="plans"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* carousel2-desktop */}
      <>
        {/* Carousel wrapper */}
        <div
          id="carouselMultiItemExample2"
          className="carousel slide carousel-dark text-center desktop-carousel"
          data-mdb-ride="carousel"
        >
          {/* Controls */}
          {/* <div
            style={{ gap: "90%" }}
            className="d-flex justify-content-center my-3"
          >
            <button
              className="carousel-control-prev position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample2"
              data-mdb-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample2"
              data-mdb-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
          {/* Inner */}
          <div className="carousel-inner py-4">
            {/* Single item */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div
                    style={{
                      boxSizing: "borderBox",
                      background: "#FFFFFF",
                      width: "314px",
                      margin: "auto",
                      height: "567px",
                      border: "1px solid #CFCFDE",
                    }}
                    className="col-lg-4 col-4"
                  >
                    <img
                      className="rounded-circle shadow-1-strong my-3"
                      src={priyanka}
                      alt="avatar"
                      style={{ width: 150 }}
                    />
                    <h5
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "26px",
                        color: "#2F327D",
                      }}
                      class="my-3"
                    >
                      Priyanka Agarwal{" "}
                    </h5>
                    <p
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "180%",
                        textAlign: "center",
                      }}
                    >
                      A star educator with 3 years of teaching experience, Priya
                      possess B.A. in Economics and Mathematics, and is loved by
                      her students for her dedication to improving their
                      understanding from ground-up. She has even won a
                      Mathematics poetry competition organised by Delhi
                      University. She teaches students across Singapore, Middle
                      East, India and USA.
                    </p>
                  </div>
                  <div
                    style={{
                      boxSizing: "borderBox",
                      background: "#FFFFFF",
                      width: "314px",
                      margin: "auto",
                      height: "567px",
                      border: "1px solid #CFCFDE",
                    }}
                    className="col-lg-4 d-none d-lg-block"
                  >
                    <img
                      className="rounded-circle shadow-1-strong my-3"
                      src={farhan}
                      alt="avatar"
                      style={{ width: 150 }}
                    />
                    <h5
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "26px",
                        color: "#2F327D",
                      }}
                      class="my-3"
                    >
                      Farhan Ansari{" "}
                    </h5>
                    <p
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "180%",
                        textAlign: "center",
                      }}
                    >
                      is a passionate, dedicated and experienced Professor with
                      a proven track record for helping students to improve
                      their academic performance. He possess B.E in Mechanical
                      Engineering and has 5 years+ teaching experience, in both
                      online and offline classes. He teaches 9th and 10th class
                      physics and Chemistry.
                    </p>
                  </div>
                  <div
                    style={{
                      boxSizing: "borderBox",
                      background: "#FFFFFF",
                      width: "314px",
                      margin: "auto",
                      height: "567px",
                      border: "1px solid #CFCFDE",
                    }}
                  >
                    <img
                      className="rounded-circle shadow-1-strong my-3"
                      src={priya}
                      alt="avatar"
                      style={{ width: 150 }}
                    />
                    <h5
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "26px",
                        color: "#2F327D",
                      }}
                      class="my-3"
                    >
                      Priya Chikara
                    </h5>
                    <p
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "180%",
                        textAlign: "center",
                      }}
                    >
                      A star educator with 3 years of teaching experience, Priya
                      possess B.A. in Economics and Mathematics, and is loved by
                      her students for her dedication to improving their
                      understanding from ground-up. She has even won a
                      Mathematics poetry competition organised by Delhi
                      University. She teaches students across Singapore, Middle
                      East, India and USA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Inner */}
        </div>
        {/* Carousel wrapper */}
      </>
      {/* carousel2-mobile */}
      <>
        {/* Carousel wrapper */}
        <div
          id="carouselMultiItemExample4"
          className="carousel slide carousel-dark text-center mobile-carousel"
          data-mdb-ride="carousel"
        >
          {/* Controls */}
          {/* <div
            style={{ gap: "90%" }}
            className="d-flex justify-content-center my-3"
          >
            <button
              className="carousel-control-prev position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample4"
              data-mdb-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample4"
              data-mdb-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
          {/* Inner */}
          <div className="carousel-inner py-4">
            {/* Single item */}
            <div className="carousel-item active">
              <div
                style={{
                  boxSizing: "borderBox",
                  background: "#FFFFFF",
                  width: "314px",
                  margin: "auto",
                  height: "567px",
                  border: "1px solid #CFCFDE",
                }}
              >
                <img
                  className="rounded-circle shadow-1-strong my-3"
                  src={priyanka}
                  alt="avatar"
                  style={{ width: 150 }}
                />
                <h5
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#2F327D",
                  }}
                  class="my-3"
                >
                  Priyanka Agarwal{" "}
                </h5>
                <p
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "180%",
                    textAlign: "center",
                  }}
                >
                  A star educator with 3 years of teaching experience, Priya
                  possess B.A. in Economics and Mathematics, and is loved by her
                  students for her dedication to improving their understanding
                  from ground-up. She has even won a Mathematics poetry
                  competition organised by Delhi University. She teaches
                  students across Singapore, Middle East, India and USA.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div
                style={{
                  boxSizing: "borderBox",
                  background: "#FFFFFF",
                  width: "314px",
                  margin: "auto",
                  height: "567px",
                  border: "1px solid #CFCFDE",
                }}
              >
                <img
                  className="rounded-circle shadow-1-strong my-3"
                  src={farhan}
                  alt="avatar"
                  style={{ width: 150 }}
                />
                <h5
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#2F327D",
                  }}
                  class="my-3"
                >
                  Farhan Ansari{" "}
                </h5>
                <p
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "180%",
                    textAlign: "center",
                  }}
                >
                  is a passionate, dedicated and experienced Professor with a
                  proven track record for helping students to improve their
                  academic performance. He possess B.E in Mechanical Engineering
                  and has 5 years+ teaching experience, in both online and
                  offline classes. He teaches 9th and 10th class physics and
                  Chemistry.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div
                style={{
                  boxSizing: "borderBox",
                  background: "#FFFFFF",
                  width: "314px",
                  margin: "auto",
                  height: "567px",
                  border: "1px solid #CFCFDE",
                }}
              >
                <img
                  className="rounded-circle shadow-1-strong my-3"
                  src={priya}
                  alt="avatar"
                  style={{ width: 150 }}
                />
                <h5
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#2F327D",
                  }}
                  class="my-3"
                >
                  Priya Chikara
                </h5>
                <p
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "180%",
                    textAlign: "center",
                  }}
                >
                  A star educator with 3 years of teaching experience, Priya
                  possess B.A. in Economics and Mathematics, and is loved by her
                  students for her dedication to improving their understanding
                  from ground-up. She has even won a Mathematics poetry
                  competition organised by Delhi University. She teaches
                  students across Singapore, Middle East, India and USA.
                </p>
              </div>
            </div>
          </div>
          {/* Inner */}
        </div>
        {/* Carousel wrapper */}
      </>
      <div
        className="my-5"
        style={{
          fontFamily: "'Roboto'",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "28px",
          lineHeight: "33px",
          textAlign: "center",
          color: "#4345AF",
        }}
      >
        <button
          style={{
            margin: "auto",
            color: "white",
            width: "35%",
            height: "53px",
            fontSize: "medium",
            background:
              "linear-gradient(270.12deg, #E57E25 59.37%, rgba(240, 196, 25, 0) 144.38%)",
            filter:
              "drop-shadow(-5px -5px 10px rgba(255, 255, 255, 0.15)) drop-shadow(10px 10px 20px rgba(170, 170, 204, 0.15))",
            borderRadius: "10px",
          }}
        >
          Experience SUVY
        </button>
      </div>

      <div align="center" className="container my-5">
        <div
          className="my-3"
          style={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "84px",
            letterSpacing: "0.2px",
            color: "#2C2C2C",
          }}
        >
          ..... And we Learn Together !
        </div>
        <div className="row">
          <div className="col-lg-3 col-6 my-3">
            <img src={vector1} />
            <h1
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "28px",
                lineHeight: "84px",
                letterSpacing: "0.2px",
                color: "#2C2C2C",
              }}
            >
              200k
            </h1>
            <p style={{ marginTop: "-20px" }}>Learners & counting</p>
          </div>
          <div className="col-lg-3 col-6 my-3">
            <img src={vector2} />
            <h1
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "28px",
                lineHeight: "84px",
                letterSpacing: "0.2px",
                color: "#2C2C2C",
              }}
            >
              120+
            </h1>
            <p style={{ marginTop: "-20px" }}>Total Courses</p>
          </div>
          <div className="col-lg-3 col-6 my-3">
            <img src={vector3} />
            <h1
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "28px",
                lineHeight: "84px",
                letterSpacing: "0.2px",
                color: "#2C2C2C",
              }}
            >
              22+
            </h1>
            <p style={{ marginTop: "-20px" }}>Languages</p>
          </div>
          <div className="col-lg-3 col-6 my-3">
            <img src={vector4} />
            <h1
              style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "28px",
                lineHeight: "84px",
                letterSpacing: "0.2px",
                color: "#2C2C2C",
              }}
            >
              2K+
            </h1>
            <p style={{ marginTop: "-20px" }}>Tutors</p>
          </div>
        </div>
      </div>

      <footer style={{ background: "#15156C" }}>
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <img src={suvy} alt="logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 justify-items-center">
              <div>
                <p
                  style={{ color: "white" }}
                  className="text-base font-bold tracking-wide"
                >
                  Quick Links
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/https://suvyclasses.com/find-a-tutor/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Find a Tutor
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://suvyclasses.com/join-as-tutor"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Join as Tutor
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://suvyclasses.com/refund-policy"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://suvyclasses.com/about"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 text-sm">
                <p
                  style={{ color: "white" }}
                  className="text-base font-bold tracking-wide"
                >
                  Get in touch
                </p>
                <div className="flex" style={{ color: "white" }}>
                  <p className="mr-1 text-gray-50">Phone:</p>
                  <a
                    href="tel:+91-9940173952"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    +91-9940173952
                  </a>
                </div>
                <div className="flex" style={{ color: "white" }}>
                  <p className="mr-1 text-gray-50">Email:</p>
                  <a
                    href="mailto:
                    info@suvyclasses.com"
                    aria-label="Our email"
                    title="Our email"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    info@suvyclasses.com
                  </a>
                </div>
              </div>
              <div className="px">
                <span
                  style={{ color: "white" }}
                  className="text-base font-bold tracking-wide"
                >
                  Follow us on
                </span>
                <div className="flex items-center mt-1 space-x-3">
                  <a
                    href="https://in.linkedin.com/company/suvy-classes"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      class="h-8 w-8 text-red-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6"
                    >
                      {" "}
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                      <rect x="2" y="9" width="4" height="12" />{" "}
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/suvyclasses/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 30 30"
                      fill="currentColor"
                      className="h-6"
                    >
                      <circle cx="15" cy="15" r="4" />
                      <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                    </svg>
                  </a>
                  <a
                    href="https://m.facebook.com/Suvy-Classes-109131551651168/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
            <p className="text-sm text-gray-600">
              © 2022 Kalvi. All Rights Reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <a
                  href="https://suvyclasses.com/privacy-policy"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://suvyclasses.com/terms-conditions"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
