import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Bootstrap",
    "TailwindCSS",
    "MaterialUI",
    "Angular",
  ];

  const backendSkills = [
    "Node.js",
    "ExpressJS",
    "MongoDB",
    "Python",
    "C++",
    "SQL",
  ];

  const relevantCourses = [
    "Data Structures",
    "Web Development",
    "Machine Learning",
    "Computer Graphics",
    "Database Design",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Get to know me
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 bg-gradient-to-br from-blue-500/[0.08] to-transparent shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
            <p className="max-w-3xl text-base sm:text-lg leading-8 text-gray-300">
              A highly motivated Computer Science enthusiast seeking to make a
              significant contribution to software development. With a strong
              background in full-stack development, data science, and machine
              learning, I am eager to use my skills to change the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl border border-white/10 bg-black/20 p-5 hover:border-blue-500/30 transition-colors">
                <h3 className="text-lg font-semibold mb-4 text-white">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 border border-blue-500/20 text-blue-300 py-1.5 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-5 hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg font-semibold mb-4 text-white">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 py-1.5 px-3 rounded-full text-sm hover:bg-cyan-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 mt-6 items-stretch">
            <div className="h-full p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.025] shadow-[0_20px_70px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 border border-blue-500/20">🎓</span>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="relative border-l border-blue-500/30 pl-6 space-y-7">
                <div className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-blue-400 ring-4 ring-blue-500/10" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Fall 2026 – Present</p>
                  <h4 className="text-lg font-semibold mt-1">George Mason University</h4>
                  <p className="text-gray-300">M.S. in Computer Science</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-500/10" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Summa Cum Laude · GPA 3.97/4.00</p>
                  <h4 className="text-lg font-semibold mt-1">Ramapo College of New Jersey</h4>
                  <p className="text-gray-300">B.S. in Computer Science, Minor in Data Science</p>
                </div>
              </div>
              <p className="font-semibold mt-7 mb-3 text-white">Relevant Courses</p>
              <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
                {relevantCourses.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
                  >
                    {course}
                  </li>
                ))}
              </ul>
              <p className="font-semibold mt-7 mb-3 text-white">Academic Achievements</p>
              <ul className="space-y-3 text-sm leading-6 text-gray-300">
                <li>
                  <span className="mr-2 text-blue-400">✦</span>Tech Talent Investment Program Scholarship Recipient –
                  George Mason University
                </li>
                <li><span className="mr-2 text-blue-400">✦</span>HackRU 2023 Winner (Best use of MongoDB)</li>
                <li>
                  <span className="mr-2 text-blue-400">✦</span>Pi Mu Epsilon (National Mathematics Honor Society) – Inducted
                  Spring 2025
                </li>
                <li><span className="mr-2 text-blue-400">✦</span>Dean&apos;s List</li>
                <li><span className="mr-2 text-blue-400">✦</span>Presidential Scholarship</li>
              </ul>
            </div>

            <div className="h-full p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.025] shadow-[0_20px_70px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">💼</span>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              <div className="space-y-7">
                <article className="relative border-l border-blue-500/30 pl-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Junior Web Developer</h4>
                      <p className="text-blue-300">RockWeb Systems · Remote</p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-gray-400 sm:mt-1">Mar – Jul 2026</span>
                  </div>
                  <ul className="list-disc pl-5 text-sm leading-6 text-gray-300 space-y-2 mt-3 marker:text-blue-400">
                <li>
                  Built and enhanced client web applications using TypeScript,
                  React, and SQL backends, delivering UI improvements and new
                  features.
                </li>
                <li>
                  Implemented server-side security improvements, secure
                  configuration headers, and verification checks against common
                  web vulnerabilities.
                </li>
                <li>
                  Diagnosed and resolved software bugs, async data transfer
                  issues, CORS errors, and database query inefficiencies to
                  improve site stability.
                </li>
                  </ul>
                </article>
                <article className="border-l border-white/10 pl-5">
                  <h4 className="text-lg font-semibold">Network Assistant</h4>
                  <p className="text-sm text-gray-400">ITS Network Team, Ramapo College · 2023–2025</p>
                  <ul className="list-disc pl-5 text-sm leading-6 text-gray-300 mt-3 marker:text-cyan-400">
                <li>
                  Supported network optimization efforts, contributing to a 35%
                  downtime reduction, a 40% boost in IT support satisfaction,
                  and enhanced monitoring with Cisco tools.
                </li>
                  </ul>
                </article>
                <article className="border-l border-white/10 pl-5">
                  <h4 className="text-lg font-semibold">Tutor</h4>
                  <p className="text-sm text-gray-400">STEM Center, Ramapo College · 2024</p>
                  <ul className="list-disc pl-5 text-sm leading-6 text-gray-300 mt-3 marker:text-cyan-400">
                <li>
                  Mentored students in software engineering (Python, C++,
                  JavaScript), OOP, and data structures to strengthen their
                  algorithmic and problem-solving skills.
                </li>
                  </ul>
                </article>
                <article className="border-l border-white/10 pl-5">
                  <h4 className="text-lg font-semibold">Resident Assistant</h4>
                  <p className="text-sm text-gray-400">ResLife, Ramapo College · 2024–2025</p>
                  <ul className="list-disc pl-5 text-sm leading-6 text-gray-300 mt-3 marker:text-cyan-400">
                <li>
                  Increased student engagement by 30% through community
                  initiatives while ensuring resident safety via expert crisis
                  management and emergency response.
                </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
