import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center scroll-py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">The Finance App</h3>
              <p className="text-gray-400 mb-4">
                The Finance App is a personal finance management tool designed
                to simplify budgeting, expense tracking, and financial
                decision-making.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Material-UI (MUI)",
                  "Redux Toolkit",
                  "Formik",
                  "Yup",
                  "Node.js",
                  "Express.js",
                  "Nodemailer",
                  "MongoDB",
                  "Mongoose",
                  "Cloudinary",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://saurav-finance.netlify.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">VC1620 Assembler</h3>
              <p className="text-gray-400 mb-4">
                This project is a comprehensive solution that translates
                assembly language programs into machine language and then
                emulates their execution. It's built around a core of two
                primary components: an Assembler and an Emulator.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C++"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/dsaurav4/VC1620Assembler"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Yahtzee C++</h3>
              <p className="text-gray-400 mb-4">
                This project is a C++ implementation of the popular dice game
                Yahtzee. The program supports both human and computer players
                and includes various features such as game serialization, AI
                assistance, and a structured tournament mode.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C++"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/dsaurav4/Yahtzee-C-Plus-Plus"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 4 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Diabetes Prediction Using BRFSS Data
              </h3>
              <p className="text-gray-400 mb-4">
                This project is a a machine learning project aimed at predicting
                diabetes using the 2015 Behavioral Risk Factor Surveillance
                System (BRFSS) dataset. The project focuses on assessing the
                impact of various demographic and lifestyle factors, such as
                Body Mass Index (BMI), exercise frequency, and dietary habits,
                on the likelihood of developing diabetes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "scikit-learn",
                  "matplotlib",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/dsaurav4/Diabetes_Prediction_BRFSS_2015"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 5 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Stroke Data Analysis and Visualization
              </h3>
              <p className="text-gray-400 mb-4">
                This project aims to analyze and predict stroke occurrences
                using the "Stroke Prediction Dataset" from Kaggle. Various
                demographic and health-related factors are examined to uncover
                insights into stroke risk factors. Logistic regression analysis
                is utilized to highlight significant predictors of stroke
                occurrence, aiding in the understanding of the impact of these
                factors on stroke risk.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "scikit-learn",
                  "matplotlib",
                  "ggplot",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/dsaurav4/Stroke-Analysis"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 6 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Yahtzee Java-Android</h3>
              <p className="text-gray-400 mb-4">
                This project is a digital implementation of the classic Yahtzee
                game, developed in Java for Android. It allows players to enjoy
                Yahtzee with a human-vs-computer mode, incorporating a detailed
                scoring system, helpful hints, and save/load functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Android", "Android Studio"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/dsaurav4/Yahtzee-JAVA-ANDROID"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
