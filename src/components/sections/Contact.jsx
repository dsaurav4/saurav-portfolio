import { useRef, useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const formStartedAt = useRef(Date.now());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const honeypot = new FormData(form).get("website");
    const submittedTooQuickly = Date.now() - formStartedAt.current < 3000;
    const linkCount = (formData.message.match(/https?:\/\/|www\./gi) || []).length;
    const lastSubmission = Number(localStorage.getItem("contactLastSent") || 0);
    const isCoolingDown = Date.now() - lastSubmission < 60000;

    if (honeypot || submittedTooQuickly || linkCount > 2 || isCoolingDown) {
      setStatus("blocked");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setFormData({ name: "", email: "", message: "" });
      localStorage.setItem("contactLastSent", String(Date.now()));
      formStartedAt.current = Date.now();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 scroll-mt-20"
    >
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <RevealOnScroll>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Let&apos;s connect
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400 leading-7">
              Have a project, opportunity, or idea in mind? Send me a message
              and I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] shadow-[0_25px_80px_rgba(0,0,0,0.3)] lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="relative border-b border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/[0.03] p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <h3 className="text-2xl font-semibold text-white">
                Start a conversation
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                I&apos;m always interested in software engineering roles,
                collaborations, and conversations about building useful
                technology.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="https://www.linkedin.com/in/sauravdahal4/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4 transition-colors hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Professional network
                    </p>
                    <p className="mt-1 font-semibold text-gray-200">LinkedIn</p>
                  </div>
                  <span className="text-blue-400 transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com/dsaurav4"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4 transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/10"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Code &amp; projects
                    </p>
                    <p className="mt-1 font-semibold text-gray-200">GitHub</p>
                  </div>
                  <span className="text-cyan-400 transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                Open to new opportunities
              </div>
            </aside>

            <form className="space-y-5 p-7 sm:p-9" onSubmit={handleSubmit}>
              <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-gray-600 transition focus:border-blue-500/60 focus:bg-blue-500/5 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                    placeholder="Jane Smith"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    required
                    maxLength={254}
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-gray-600 transition focus:border-blue-500/60 focus:bg-blue-500/5 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                    placeholder="jane@example.com"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={6}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-gray-600 transition focus:border-blue-500/60 focus:bg-blue-500/5 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                  placeholder="Tell me a little about your project or opportunity..."
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-[0_10px_35px_rgba(59,130,246,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-[0_15px_40px_rgba(59,130,246,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                {status !== "sending" && <span aria-hidden="true">→</span>}
              </button>

              <div className="min-h-6 text-center text-sm" aria-live="polite">
                {status === "success" && (
                  <p className="text-emerald-400">
                    Thanks! Your message was sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400">
                    Something went wrong. Please try again or connect on LinkedIn.
                  </p>
                )}
                {status === "blocked" && (
                  <p className="text-amber-400">
                    Please wait a moment, limit links to two, and try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
