import React from "react";

function About() {
  return (
    <div className="py-16 px-6 my-10  font-roboto">
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p className="mb-4">
        I'm a passionate Full-Stack and Mobile Developer with expertise in
        Python, JavaScript, React, and React Native.
      </p>

      <ul className="list bg-base-100 rounded-box shadow-md pb-2">
        <li className="p-4 pb-2 text-s opacity-60 tracking-wide">
          Most Valuable Skills
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="python.svg"
              alt="python logo"
            />
          </div>
          <div>
            <div>Python</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Programing Language
            </div>
          </div>
          <p className="list-col-wrap text-s">
            A versatile, high-level programming language known for its
            readability and simplicity. It's widely used for web development,
            data analysis, AI, automation, and more.
          </p>
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="javascript.svg"
              alt="javasccript logo"
            />
          </div>
          <div>
            <div>Javascript</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Scripting Language
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            A dynamic, high-level scripting language primarily used for creating
            interactive web pages. It's essential for front-end development and
            is also used on the server-side with Node.js.
          </p>
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="react.svg"
              alt="react logo"
            />
          </div>
          <div>
            <div>React</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Framework
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            A popular JavaScript library developed by Facebook for building user
            interfaces, especially single-page applications. It allows efficient
            updates and rendering of UI components using a virtual DOM.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default About;
