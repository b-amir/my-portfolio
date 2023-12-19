"use client";
import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";
import styles from "./styles/page.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Spline from "@splinetool/react-spline";
import { MdWavingHand } from "react-icons/md";
import Image from "next/image";
import { ProjectCard } from "./ProjectCard";

export const AllProjectsSection: React.FC = () => (
  <div className={styles.allProjectsSection}>
    <SectionHeader
      title="All Projects"
      icon={<BsFillGridFill className={styles.icon} />}
    />

    <div className={styles.allProjectsGrid}>
      <div className={styles.allStacks}>
        <div className={styles.myStack}>
          <h3>My current skills</h3>
          <p>click on a skill to see projects that use it.</p>

          <div className={styles.tagsRow}>
            <h3>Frontend:</h3>
            <Tag
              name="React"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          </div>

          <div className={styles.tagsRow}>
            <h3>Backend, API:</h3>
            <Tag
              name="Node"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
            <Tag
              name="Express"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
            <Tag
              name="MongoDB"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          </div>

          <div className={styles.tagsRow}>
            <h3>DevOps, Testing:</h3>
            <Tag
              name="Git"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
            <Tag
              name="Docker"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
            <Tag
              name="Linux"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          </div>
          <div className={styles.tagsRow}>
            <h3>Libs, etc:</h3>
            <Tag
              name="Git"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
            <Tag
              name="Docker"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
            <Tag
              name="Linux"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          </div>
        </div>

        <div className={styles.otherStack}>
          <h3>Other skills</h3>
          <p>
            Long time <span className={styles.inlineTag}>Linux</span> user. I
            know my way around graphical softwares like{" "}
            <span className={styles.inlineTag}>Figma</span> &{" "}
            <span className={styles.inlineTag}>PhotoShop</span>. Familiar with{" "}
            <span className={styles.inlineTag}>Agile</span> &{" "}
            <span className={styles.inlineTag}>Scrum</span> methodologies.
          </p>
          <br />
          <h3>Previous stack</h3>
          <p>
            Started with WordPress, learned{" "}
            <span className={styles.inlineTag}>PHP</span>,{" "}
            <span className={styles.inlineTag}>MySQL</span> and CSS, and
            integrated <span className={styles.inlineTag}>Python</span> into
            select project segments.
          </p>
        </div>
      </div>
      <div className={styles.projectsGrid}>
        <ProjectCard
          image={
            <Image
              src="/cslit-logo.svg"
              width={180}
              height={80}
              alt="this website"
            />
          }
          title="CS-LIT"
          tags={
            <Tag
              name="React"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          }
          description={
            <div>
              CS-LIT, short for "Computer Science Like I'm Ten," is a
              comprehensive web platform designed to simplify complex computer
              science subjects through user-generated analogies.
              <br />
              This fully functional product enables users to sign up,
              contribute, and explore analogies for challenging CS topics. As
              the sole developer, I built CS-LIT from the ground up, embracing
              the project as both a learning experience and a personal
              challenge.
              <br />
              The platform serves as a collaborative space where individuals can
              share their unique perspectives, making computer science more
              accessible and enjoyable for learners of all levels.
            </div>
          }
          githubLink=""
          demoLink=""
        />

        <ProjectCard
          image={
            <h1 className={styles.thiscoverdLogo}>
              <span>this</span>
              <span>.</span>
              <span>covered</span>
            </h1>
          }
          title="this.covered"
          tags={
            <Tag
              name="React"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          }
          description={
            <div>
              Introducing "this.covered" — a playful and client-side website
              crafted to empower individuals in enhancing their LinkedIn
              profiles with eye-catching header images. With the tagline "Wanna
              get discovered? You got this.covered!", the platform aims to
              elevate personal branding by offering a simple and enjoyable image
              creation experience. Utilizing the Unsplash API, users can easily
              find and customize header images that resonate with their
              professional identity. Elevate your online presence with
              "this.covered" and make a lasting impression.
            </div>
          }
          githubLink=""
          demoLink=""
        />

        <ProjectCard
          image={
            <Image
              src="/thing.svg"
              width={240}
              height={120}
              alt="this website"
            />
          }
          title="this website!"
          tags={
            <Tag
              name="React"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          }
          description={
            <div>
              I wanted my portfolio website to be more than just a showcase—it
              became a journey of exploration and learning. In this project, I
              decided to dip my toes into Sass for a cleaner style and ventured
              into 3D design using Spline, inspired by my past experiences with
              3D software in school. The goal was to embrace the opportunity to
              try new things. Sass added a bit of structure to the styling, and
              the subtle 3D touch reflects my curiosity. My portfolio is a
              simple testament to learning and experimenting in a space that's
              as much about discovery as it is about showcasing work.
            </div>
          }
          githubLink=""
          demoLink=""
        />

        <ProjectCard
          image={
            <Image
              src="/futpal-logo.svg"
              width={160}
              height={80}
              alt="this website"
            />
          }
          title="Futpal"
          tags={
            <Tag
              name="React"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          }
          description={
            <div>
              Futpal is a web application tailored for Fantasy Premier League
              (FPL) enthusiasts, designed to provide a toolkit for FPL managers
              seeking to elevate their game. With live Premier League game
              results sourced from a third-party API, users can stay on top of
              the action in real time. The application goes beyond the surface,
              offering granular in-game fantasy statistics and numbers retrieved
              from the unofficial FPL API, by overcoming the classic CORS
              problem. Futpal aims to empower FPL managers with the insights and
              tools they need to make strategic decisions and stay ahead in the
              fantasy football realm.
            </div>
          }
          githubLink=""
          demoLink=""
        />

        <ProjectCard
          image={
            <Image
              src="/adeptivity-logo.svg"
              width={220}
              height={120}
              alt="this website"
            />
          }
          title="Adeptivity"
          tags={
            <Tag
              name="React"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          }
          description={
            <div>
              Adeptivity marks the online presence of a real startup, offering a
              landing page and a dynamic blog section. The landing page, crafted
              with Next.js, serves as a captivating introduction to the
              startup's offerings and ethos. For the blog, I implemented a
              combination of Next.js and Strapi, leveraging the ease of Strapi
              as a content management system. This setup not only ensures a
              seamless and responsive landing page experience but also provides
              the startup with a user-friendly platform to share insights and
              updates through an efficiently managed blog.
            </div>
          }
          githubLink=""
          demoLink=""
        />

        <ProjectCard
          image={
            <Image
              src="/notopia-logo.svg"
              width={220}
              height={120}
              alt="this website"
            />
          }
          title="Notopia"
          tags={
            <Tag
              name="React"
              color=""
              icon={<BsFillGridFill className={styles.icon} />}
            />
          }
          description={
            <div>
              Notopia is my version of a note-taking app, both for the web and
              desktop. It features a block-style text editor, somewhat like a
              Notion clone. On the desktop, I used Electron, keeping things
              simple and using as few third-party libraries as possible—mainly
              relying on EditorJS for editing. It's my straightforward attempt
              at a practical and functional tool for note-taking.
            </div>
          }
          githubLink=""
          demoLink=""
        />
      </div>
    </div>

    <div className={styles.transitionToWhite}>
      <div className={styles.smile}>
        <Spline scene="https://prod.spline.design/SFtITqXREqMFyNh2/scene.splinecode" />
      </div>
      <p>That's all for now.</p>
      <div style={{ minHeight: "65px" }}>
        <button className={styles.buttonKeepInTouch}>
          <MdWavingHand /> Let's keep in touch
        </button>
      </div>
    </div>
  </div>
);
