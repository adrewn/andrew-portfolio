import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Andrew Nguyen</h2>
          <ul>
            <li>
              Front-end web developer. <br />
              Location: Toronto, Ontario (Willing to relocate anywhere in
              Canada). <br />
              Tel: +1 (647) 819 7474 (Text prefer). <br />
              Email: andrew.nguyen.rv@gmail.com
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/andrew-nguyen-rv/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://drive.google.com/file/d/1gx40LgKLqMkwrak6lWJ0TqbX_q3pgTLI/view?usp=sharing"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
              Programming languages: C, C++,Java, JavaScript ES6, (HTML, CSS)
              <br />
              FrameWorks: ReactJS, NextJS, NodeJS
              <br />
              Database Management Systems: MySQL
              <br />
              Version Control: Git
              <br />
              Soft Skills: Time management, Teamwork, Seft-taught
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
