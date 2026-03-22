"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_ajd113",          // ✅ your service id
        "template_6gjx7m7",        // 🔁 replace
        formRef.current,
        { publicKey: "0Nk4JGJWoZqqtKfHu" } // 🔁 replace
      );

      toast.success("Message sent! 🚀");
      formRef.current.reset();
    } catch (err) {
      toast.error("Failed to send. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      {/* HEADER (left aligned, glass) */}
      <div className="mb-12">
        <div className="inline-block relative rounded-2xl px-8 py-4 border border-black/15 dark:border-white/15 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl dark:from-cyan-400/20 dark:to-blue-500/20" />
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Contact
          </h2>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          I’d love to connect — feel free to reach out for opportunities,
          collaborations, or any questions!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT PANEL */}
        <div className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white/35 p-8 backdrop-blur-2xl shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.14)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_0_30px_rgba(56,189,248,0.10)] dark:hover:shadow-[0_0_55px_rgba(56,189,248,0.25)]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5 opacity-70 dark:from-cyan-400/10 dark:to-blue-500/10" />
          <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />
          <div className="absolute -bottom-12 -right-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Let&apos;s Connect
            </h3>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Whether you have an opportunity or just want to say hello, feel free to message me.
            </p>

            {/* INFO */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/10">
                  <Mail className="h-5 w-5 text-cyan-500" />
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  akashjyotidas32@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full p-3 bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/10">
                  <MapPin className="h-5 w-5 text-cyan-500" />
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Assam, India
                </span>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/akashjd113"
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon h-11 w-11 flex items-center justify-center rounded-full border border-black/10 bg-white/70 dark:bg-white/10 transition duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="h-5 w-5 group-hover/icon:text-slate-900 dark:group-hover/icon:text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/akash-jyoti-das-671b26389/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon h-11 w-11 flex items-center justify-center rounded-full border border-black/10 bg-white/70 dark:bg-white/10 transition duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5 group-hover/icon:text-blue-600" />
              </a>

              <a
                href="https://www.instagram.com/akash_j_d"
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon h-11 w-11 flex items-center justify-center rounded-full border border-black/10 bg-white/70 dark:bg-white/10 transition duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="h-5 w-5 group-hover/icon:text-pink-500" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white/35 p-8 backdrop-blur-2xl shadow-[0_18px_50px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_0_30px_rgba(56,189,248,0.10)]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5 opacity-70 dark:from-cyan-400/10 dark:to-blue-500/10" />

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="mt-8 space-y-5">
              {/* INPUTS */}
              {["from_name", "from_email", "subject"].map((name, i) => (
                <input
                  key={name}
                  type={name === "from_email" ? "email" : "text"}
                  name={name}
                  placeholder={
                    name === "from_name"
                      ? "Your Name"
                      : name === "from_email"
                      ? "Your Email"
                      : "Subject"
                  }
                  required
                  className="w-full rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 text-sm outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              ))}

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full resize-none rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 text-sm outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="group w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold transition duration-300 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(37,99,235,0.35)] disabled:opacity-70"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSending ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}