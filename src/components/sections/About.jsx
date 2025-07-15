import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["React", "Bootstap", "TailwindCSS", "MaterialUI"];

  const backendSkills = [
    "Node.js",
    "ExpressJS",
    "MongoDB",
    "Python",
    "C++",
    "SQL",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 tansition-all">
            <p className="text-gray-300 mb-6">
              A highly motivated Computer Science enthusiast seeking to make a
              significant contribution to software development. With a strong
              background in full-stack development, data science, and machine
              learning, I am eager to use my skills to change the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4">🏫 Education</h3>
              <strong>
                <h4 className="text-lg">Ramapo College of New Jersey </h4>
              </strong>
              <p>B.S. in Computer Science w. Minor in Data Science</p>
              <p>(Summa Cum Laude)</p>
              <p>
                GPA:{" "}
                <span>
                  <strong>3.97</strong>/4.00
                </span>
              </p>
              <p className="font-bold mt-5">Relevant Courses:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Data Structues</li>
                <li>Web Development</li>
                <li>Machine Learning</li>
                <li>Computer Graphics</li>
                <li>Database Design</li>
              </ul>
              <p className="font-bold mt-5">Academic Achievement</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>HackRU 2023 Winner (Best use of MongoDB)</li>
                <li>
                  Pi Mu Epsilon (National Mathematics Honor Society) – Inducted
                  Spring 2025
                </li>
                <li>Dean's List</li>
                <li>Presidential Scholarship</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4">💼 Work Experience</h3>
              <strong>
                <h4 className="text-lg">Network Assistant</h4>
              </strong>
              <p>ITS Network Team, Ramapo College (2023-2025)</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                <li>
                  Supported network optimization efforts, contributing to a 35%
                  downtime reduction, a 40% boost in IT support satisfaction,
                  and enhanced monitoring with Cisco tools.
                </li>
              </ul>
              <strong>
                <h4 className="text-lg mt-3">Tutor</h4>
              </strong>
              <p>STEM CENTER, Ramapo College (2024-2024)</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                <li>
                  Mentored students in software engineering (Python, C++,
                  JavaScript), OOP, and data structures to strengthen their
                  algorithmic and problem-solving skills.
                </li>
              </ul>
              <strong>
                <h4 className="text-lg mt-3">Resident Assistant</h4>
              </strong>
              <p>ResLife, Ramapo College (2024-2025)</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                <li>
                  Increased student engagement by 30% through community
                  initiatives while ensuring resident safety via expert crisis
                  management and emergency response.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
