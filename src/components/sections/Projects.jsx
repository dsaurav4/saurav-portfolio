import RevealOnScroll from "../RevealOnScroll";

const projects = [
  {
    title: "The Finance App",
    description:
      "A personal finance management tool designed to simplify budgeting, expense tracking, and financial decision-making.",
    tech: ["React", "Material UI", "Redux Toolkit", "Formik", "Yup", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary"],
    href: "https://saurav-finance.netlify.app",
    label: "Live Project",
    featured: true,
  },
  {
    title: "VC1620 Assembler",
    description:
      "Translates assembly language programs into machine language and emulates their execution through dedicated assembler and emulator components.",
    tech: ["C++"],
    href: "https://github.com/dsaurav4/VC1620Assembler",
  },
  {
    title: "Yahtzee C++",
    description:
      "A feature-rich implementation of Yahtzee with human and computer players, game serialization, AI assistance, and tournament mode.",
    tech: ["C++"],
    href: "https://github.com/dsaurav4/Yahtzee-C-Plus-Plus",
  },
  {
    title: "Diabetes Prediction Using BRFSS Data",
    description:
      "A machine learning study using the 2015 BRFSS dataset to assess how demographic and lifestyle factors influence diabetes risk.",
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib"],
    href: "https://github.com/dsaurav4/Diabetes_Prediction_BRFSS_2015",
  },
  {
    title: "Stroke Data Analysis and Visualization",
    description:
      "An analysis of demographic and health factors using logistic regression to uncover significant predictors of stroke risk.",
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "ggplot"],
    href: "https://archive.org/details/cmps320_Group_1_final_project_report",
    label: "View Report",
  },
  {
    title: "Yahtzee Java-Android",
    description:
      "A mobile version of the classic dice game with human-versus-computer play, scoring, hints, and save/load functionality.",
    tech: ["Java", "Android", "Android Studio"],
    href: "https://github.com/dsaurav4/Yahtzee-JAVA-ANDROID",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-24 scroll-mt-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Selected work
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400 leading-7">
              A collection of full-stack applications, systems projects, and
              data-driven research built to solve practical problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_20px_70px_rgba(37,99,235,0.12)] ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div
                  className={`flex h-full flex-col ${
                    project.featured
                      ? "md:grid md:grid-cols-[1fr_0.8fr] md:gap-10"
                      : ""
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {project.featured && (
                          <span className="mb-3 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
                            Featured build
                          </span>
                        )}
                        <h3 className="text-xl sm:text-2xl font-semibold text-white transition-colors group-hover:text-blue-300">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-sm font-semibold text-gray-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 text-sm sm:text-base leading-7 text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={`mt-6 flex flex-col justify-between gap-6 ${
                      project.featured ? "md:mt-0" : "flex-1"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300 transition-colors hover:bg-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-2 font-semibold text-blue-400 transition-all hover:gap-3 hover:text-blue-300"
                      aria-label={`${project.label || "View code"} for ${project.title}`}
                    >
                      {project.label || "View Code"}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
