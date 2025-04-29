import React from "react";

const Education = () => {
  return (
    <section className="min-h-screen mt-10 " data-aos="fade-end">
      <h1 className=" text-3xl lg:text-4xl font-bold  animate__animated animate__slideInDown">
        Education
      </h1>
      <p className="text-highlight font-bold">Completed & Ongoing Studies</p>
      <div className="mt-9 w-11/12 mx-auto">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
         
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2021</time>
              <div className="text-lg font-black">SSC – Science</div>
              Ghonar Chala High School, Sakhipur
              <br />
              Completed as a science student via homeschooling. Only attended
              for exams and special programs.
            </div>
            <hr />
          </li>

          
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2022 – Present</time>
              <div className="text-lg font-black">Diploma in CST</div>
              Tangail Polytechnic Institute
              <br />I got admitted to Tangail Polytechnic Institute in 2022 for
              a Diploma in Computer Science & Technology. I am currently in my
              7th semester.
            </div>
            <hr />
          </li>

          
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2024 – Present</time>
              <div className="text-lg font-black">Web Development Course</div>
              Programming Hero
              <br />I started learning Web Development from Programming Hero in
              2024. I have completed React.js and currently learning MongoDB,
              Node.js, and Express.js to become a full-stack developer.
            </div>
          </li>

          
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">Future</time>
              <div className="text-lg font-black">BSc in CSE – Planned</div>I
              plan to pursue a Bachelor's degree in Computer Science &
              Engineering after completing my diploma, to deepen my theoretical
              and research knowledge.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
