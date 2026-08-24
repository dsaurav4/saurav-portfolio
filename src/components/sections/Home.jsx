import RevealOnScroll from "../RevealOnScroll";
import myImage from "../../assets/my_image.jpeg";
import myImage2 from "../../assets/my_image_2.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <RevealOnScroll>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                Full-stack developer · MS in Computer Science
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Saurav{" "}
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Dahal.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl leading-8 text-gray-400">
                I build thoughtful, reliable software across full-stack
                development, data science, and machine learning—turning complex
                problems into useful digital experiences.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="#projects"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-[0_10px_35px_rgba(59,130,246,0.25)] transition-all hover:-translate-y-1 hover:bg-blue-400 hover:shadow-[0_15px_40px_rgba(59,130,246,0.35)]"
                >
                  View Projects <span aria-hidden="true">→</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-gray-200 transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
                <span className="mr-1">Focused on</span>
                {["React", "Node.js", "Python", "SQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/20 blur-2xl" />
              <div className="relative min-h-[430px] sm:min-h-[500px]">
                <div className="absolute left-0 top-0 w-[78%] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <img
                    src={myImage}
                    alt="Saurav Dahal"
                    className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-[56%] overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0a] p-2 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                  <img
                    src={myImage2}
                    alt="Saurav Dahal working outdoors"
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                </div>
                <div className="absolute right-2 top-8 rounded-xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-md shadow-xl">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Current focus
                  </p>
                  <p className="mt-1 font-semibold text-white">Full-stack systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
