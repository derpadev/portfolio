import { Briefcase, Code, User } from "lucide-react";
import myPhoto from "../images/devin.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex justify-center mb-6">
              <img
                src={myPhoto}
                alt="Devin Hua"
                className="rounded-full w-40 h-52 ring-6 ring-primary mb-6"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Software Developer & Teacher
            </h3>
            <p className="text-muted-foreground mb-4">
              Currently working towards my Bachelors of Science in Computer
              Engineering at UC Irvine.
            </p>

            <p className="text-muted-foreground">
              Beyond school, I run a YouTube channel where I teach math in an
              engaging, approachable way. I also teach coding and flag football
              to youth, encouraging them to explore these subject. In my free
              time, I enjoy trying new cafes and dancing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a href="#contact" className="cosmic-button-2">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Webdevlopment</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Building responsive websites and web applications using
                    React and Next.js
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Yummy Math</h4>
                  <p className="text-muted-foreground">
                    Creating YouTube videos that make learning calculus easier
                    and approachable
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Leadership</h4>
                  <p className="text-muted-foreground">
                    Coaching a youth flag football team, fostering teamwork,
                    leadership, and sportmanship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
