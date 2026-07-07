import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TopNav from "@/components/TopNav";
import styles from "./page.module.css";

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}`;

export default function Home() {
  return (
    <>
      <CustomCursor accent="#c8ff00" withGlow glowColor="rgba(200,255,0,0.032)" />

      <aside className={styles.sidebar}>
        <span className={styles.sbName}>Kaushik Rajbongshi</span>
        <nav className={styles.sbLinks}>
          <a href="https://github.com/kaushikrajbongshi" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kaushik-rajbongshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:kaushikraj0241@gmail.com">Email</a>
        </nav>
      </aside>

      <TopNav />

      <main className={styles.main}>
        {/* HERO */}
        <section id="hero" className={`${styles.section} ${styles.hero}`}>
          <div className={styles.heroBadge}>
            <div className={styles.heroBadgeDot} />
            Open to Internships &amp; Junior Roles
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleSolid}>FULL STACK</span>
            <br />
            <span className={styles.heroTitleOutline}>DEVELOPER</span>
          </h1>
          <p className={styles.heroTagline}>
            Hi! I&apos;m <strong>Kaushik Rajbongshi</strong> — a Full Stack Developer and MSc CS
            student specializing in <strong>scalable web applications, secure backend systems,
              AI-powered features, and modern cloud technologies</strong>. I enjoy turning
            complex backend challenges into clean, well-engineered products.
          </p>
          <div className={styles.heroActions}>
            <a href="mailto:kaushikraj0241@gmail.com" className={`${styles.btn} ${styles.btnFill}`}>
              Get In Touch ↗
            </a>
            <a
              href="/resume/KAUSHIK_RAJBONGSHI_RESUME.pdf"
              download
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              ↓ Resume
            </a>
            <a href="#projects" className={`${styles.btn} ${styles.btnText}`}>
              View Projects →
            </a>
          </div>
          <div className={styles.heroStats}>
            <div>
              <div className={styles.statNum}>
                <Counter target={5} />
                <sup>+</sup>
              </div>
              <div className={styles.statLbl}>Projects Built</div>
            </div>
            <div>
              <div className={styles.statNum}>
                <Counter target={12} />
                <sup>+</sup>
              </div>
              <div className={styles.statLbl}>Technologies</div>
            </div>
            <div>
              <div className={styles.statNum}>
                <Counter target={2} />
                <sup>+</sup>
              </div>
              <div className={styles.statLbl}>Years Coding</div>
            </div>
          </div>
          <div className={styles.heroScroll}>
            <div className={styles.scrollBar} />
            Scroll
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className={styles.section}>
          <Reveal as="p" className={styles.secLabel}>
            01 — About Me
          </Reveal>
          <Reveal as="h2" className={styles.secTitle} delay={100}>
            I build things
            <br />
            that <em style={{ color: "var(--accent)", fontStyle: "normal" }}>actually</em> work.
          </Reveal>
          <div className={styles.aboutWrap}>
            <Reveal className={styles.aboutCopy} delay={200}>
              <p>
                I&apos;m a <strong>Full Stack Developer</strong> passionate about building secure,
                scalable web applications with modern technologies. Currently pursuing my{" "}
                <strong>MSc in Computer Science</strong> at Gauhati University while developing
                production-ready applications that solve real-world problems.
              </p>

              <p>
                My approach is{" "}
                <em style={{ color: "var(--accent)", fontStyle: "normal" }}>backend-first</em>.
                I enjoy designing REST APIs, authentication systems, scalable databases, AI-powered
                features, and cloud-based architectures before crafting clean, responsive user interfaces.
              </p>

              <p>
                I&apos;m always exploring new technologies such as AI, Redis, BullMQ, and modern
                backend architectures to build faster, more reliable applications while continuously
                improving my engineering skills.
              </p>
            </Reveal>
            <div className={styles.facts}>
              <Reveal className={styles.fact} delay={200}>
                <div className={styles.factIco}>🔐</div>
                <div>
                  <div className={styles.factHead}>Security First</div>
                  <div className={styles.factBody}>
                    OAuth, JWT, RBAC, MFA, and secure authentication systems designed from the
                    ground up—not added as an afterthought.
                  </div>
                </div>
              </Reveal>

              <Reveal className={styles.fact} delay={300}>
                <div className={styles.factIco}>⚡</div>
                <div>
                  <div className={styles.factHead}>Full Stack Development</div>
                  <div className={styles.factBody}>
                    Building scalable applications with Next.js, NestJS, REST APIs, responsive
                    interfaces, cloud deployment, and modern database architectures.
                  </div>
                </div>
              </Reveal>

              <Reveal className={styles.fact} delay={400}>
                <div className={styles.factIco}>🤖</div>
                <div>
                  <div className={styles.factHead}>AI & Backend Engineering</div>
                  <div className={styles.factBody}>
                    Integrating AI, Redis, BullMQ, background job processing, and scalable
                    backend services to build intelligent, production-ready applications.
                  </div>
                </div>
              </Reveal>

              <Reveal className={styles.fact} delay={500}>
                <div className={styles.factIco}>🚀</div>
                <div>
                  <div className={styles.factHead}>Continuous Learning</div>
                  <div className={styles.factBody}>
                    Constantly exploring distributed systems, cloud technologies, system design,
                    and modern engineering practices to build better software.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className={styles.section}>
          <Reveal as="p" className={styles.secLabel}>
            02 — Tech Stack
          </Reveal>
          <Reveal as="h2" className={styles.secTitle} delay={100}>
            My Tech
            <br />
            Arsenal
          </Reveal>

          {/* FRONTEND */}
          <Reveal className={styles.stackBlock} delay={200}>
            <div className={styles.stackCatLbl}>Frontend</div>
            <div className={styles.stackRow}>
              <div className={styles.chip}>
                <img src={devicon("html5/html5-original.svg")} alt="HTML5" />
                HTML5
              </div>
              <div className={styles.chip}>
                <img src={devicon("css3/css3-original.svg")} alt="CSS3" />
                CSS3
              </div>
              <div className={styles.chip}>
                <img src={devicon("javascript/javascript-original.svg")} alt="JavaScript" />
                JavaScript
              </div>
              <div className={styles.chip}>
                <img src={devicon("typescript/typescript-original.svg")} alt="TypeScript" />
                TypeScript
              </div>
              <div className={styles.chip}>
                <img src={devicon("react/react-original.svg")} alt="React" />
                React
              </div>
              <div className={styles.chip}>
                <img
                  className={styles.chipInv}
                  src={devicon("nextjs/nextjs-plain.svg")}
                  alt="Next.js"
                />
                Next.js
              </div>
              <div className={styles.chip}>
                <img
                  src={devicon("tailwindcss/tailwindcss-original.svg")}
                  alt="Tailwind CSS"
                />
                Tailwind CSS
              </div>
              <div className={styles.chip}>
                <img src={devicon("bootstrap/bootstrap-original.svg")} alt="Bootstrap" />
                Bootstrap
              </div>
            </div>
          </Reveal>

          {/* BACKEND */}
          <Reveal className={styles.stackBlock} delay={300}>
            <div className={styles.stackCatLbl}>Backend</div>
            <div className={styles.stackRow}>
              <div className={styles.chip}>
                <img src={devicon("nodejs/nodejs-original.svg")} alt="Node.js" />
                Node.js
              </div>
              <div className={styles.chip}>
                <img src={devicon("express/express-original.svg")} alt="Express.js" />
                Express.js
              </div>
              <div className={styles.chip}>
                <img src={devicon("nestjs/nestjs-original.svg")} alt="NestJS" />
                NestJS
              </div>
              <div className={styles.chip}>
                <img src={devicon("php/php-original.svg")} alt="PHP" />
                PHP
              </div>
            </div>
          </Reveal>

          {/* LANGUAGES */}
          <Reveal className={styles.stackBlock} delay={400}>
            <div className={styles.stackCatLbl}>Languages</div>
            <div className={styles.stackRow}>
              <div className={styles.chip}>
                <img src={devicon("python/python-original.svg")} alt="Python" />
                Python
              </div>
              <div className={styles.chip}>
                <img src={devicon("c/c-original.svg")} alt="C" />
                C
              </div>
              <div className={styles.chip}>
                <img src={devicon("cplusplus/cplusplus-original.svg")} alt="C++" />
                C++
              </div>
            </div>
          </Reveal>

          {/* DATABASE & ORM */}
          <Reveal className={styles.stackBlock} delay={500}>
            <div className={styles.stackCatLbl}>Database &amp; ORM</div>
            <div className={styles.stackRow}>
              <div className={styles.chip}>
                <img src={devicon("mongodb/mongodb-original.svg")} alt="MongoDB" />
                MongoDB
              </div>
              <div className={styles.chip}>
                <img src={devicon("mysql/mysql-original.svg")} alt="MySQL" />
                MySQL
              </div>
              <div className={styles.chip}>
                <img
                  className={styles.chipInv}
                  src={devicon("prisma/prisma-original.svg")}
                  alt="Prisma"
                />
                Prisma
              </div>
              <div className={styles.chip}>
                <img src={devicon("mongoose/mongoose-original.svg")} alt="Mongoose" />
                Mongoose
              </div>
              <div className={styles.chip}>
                <img src={devicon("redis/redis-original.svg")} alt="Redis" />
                Redis
              </div>
            </div>
          </Reveal>

          {/* AI & CLOUD */}
          <Reveal className={styles.stackBlock} delay={600}>
            <div className={styles.stackCatLbl}>AI &amp; Cloud</div>
            <div className={styles.stackRow}>
              <div className={styles.chip}>🤖 Gemini AI</div>
              <div className={styles.chip}>⚙️ BullMQ</div>
              <div className={styles.chip}>
                <img src={devicon("firebase/firebase-original.svg")} alt="Firebase" />
                Firebase
              </div>
              <div className={styles.chip}>☁️ Cloudinary</div>
              <div className={styles.chip}>▲ Vercel</div>
              <div className={styles.chip}>🚀 Render</div>
            </div>
          </Reveal>

          {/* TOOLS */}
          <Reveal className={styles.stackBlock} delay={700}>
            <div className={styles.stackCatLbl}>Tools</div>
            <div className={styles.stackRow}>
              <div className={styles.chip}>
                <img src={devicon("git/git-original.svg")} alt="Git" />
                Git
              </div>
              <div className={styles.chip}>
                <img
                  className={styles.chipInv}
                  src={devicon("github/github-original.svg")}
                  alt="GitHub"
                />
                GitHub
              </div>
              <div className={styles.chip}>
                <img src={devicon("postman/postman-original.svg")} alt="Postman" />
                Postman
              </div>
              <div className={styles.chip}>
                <img src={devicon("vscode/vscode-original.svg")} alt="VS Code" />
                VS Code
              </div>
              <div className={styles.chip}>
                <img src={devicon("react/react-original.svg")} alt="React Native" />
                React Native
              </div>
            </div>
          </Reveal>

          {/* CORE CONCEPTS */}
          <Reveal className={styles.stackBlock} delay={800}>
            <div className={styles.stackCatLbl}>Core Concepts</div>
            <div className={styles.stackRow}>
              <div className={styles.chip}>REST APIs</div>
              <div className={styles.chip}>API Design</div>
              <div className={styles.chip}>Authentication</div>
              <div className={styles.chip}>Authorization</div>
              <div className={styles.chip}>JWT</div>
              <div className={styles.chip}>OAuth 2.0</div>
              <div className={styles.chip}>RBAC</div>
              <div className={styles.chip}>NextAuth</div>
              <div className={styles.chip}>Secure Sessions</div>
              <div className={styles.chip}>Database Design</div>
              <div className={styles.chip}>Redis Caching</div>
              <div className={styles.chip}>Background Jobs</div>
              <div className={styles.chip}>WebSockets</div>
              <div className={styles.chip}>AI Integration</div>
              <div className={styles.chip}>Responsive Design</div>
              <div className={styles.chip}>UI/UX</div>
            </div>
          </Reveal>
        </section>


        {/* EDUCATION */}
        <section id="education" className={styles.section}>
          <Reveal as="p" className={styles.secLabel}>
            03 — Education
          </Reveal>

          <Reveal as="h2" className={styles.secTitle} delay={100}>
            Academic
            <br />
            Background
          </Reveal>

          <div className={styles.eduGrid}>
            <Reveal className={styles.eduCard} delay={100}>
              <div className={styles.eduDeg}>MSc Computer Science</div>
              <div className={styles.eduSchool}>Gauhati University</div>
              <div className={styles.eduPeriod}>
                2024 – 2026 (Expected) · Assam, India
              </div>
              <span className={styles.eduBadge}>Pursuing</span>
            </Reveal>

            <Reveal className={styles.eduCard} delay={200}>
              <div className={styles.eduDeg}>BSc Computer Science</div>
              <div className={styles.eduSchool}>Pub Kamrup College</div>
              <div className={styles.eduPeriod}>
                2021 – 2024 · Assam, India
              </div>
              <span className={styles.eduBadge}>76%</span>
            </Reveal>

            <Reveal className={styles.eduCard} delay={300}>
              <div className={styles.eduDeg}>Higher Secondary (12th)</div>
              <div className={styles.eduSchool}>Science Stream</div>
              <div className={styles.eduPeriod}>
                2019 – 2021 · Assam Higher Secondary Education Council
              </div>
              <span className={styles.eduBadge}>84%</span>
            </Reveal>

            <Reveal className={styles.eduCard} delay={400}>
              <div className={styles.eduDeg}>Secondary (HSLC)</div>
              <div className={styles.eduSchool}>Assam Board</div>
              <div className={styles.eduPeriod}>
                2019 · Board of Secondary Education, Assam
              </div>
              <span className={styles.eduBadge}>83.7%</span>
            </Reveal>
          </div>
        </section>



        {/* EXPERIENCE */}
        <section id="experience" className={styles.section}>
          <Reveal as="p" className={styles.secLabel}>
            04 — Experience
          </Reveal>

          <Reveal as="h2" className={styles.secTitle} delay={100}>
            Professional
            <br />
            Experience
          </Reveal>

          <div className={styles.eduGrid}>
            <Reveal className={styles.eduCard} delay={100}>
              <div className={styles.eduDeg}>AI Model Evaluator</div>

              <div className={styles.eduSchool}>
                Outlier • Part-time • Remote
              </div>

              <div className={styles.eduPeriod}>
                April 2026 – May 2026
              </div>

              <p
                style={{
                  marginTop: "18px",
                  color: "var(--dim2)",
                  lineHeight: 1.8,
                  fontSize: "14px",
                }}
              >
                • Evaluated AI-generated code and technical responses for correctness,
                accuracy, and adherence to project guidelines.
                <br />
                • Reviewed solutions across multiple programming languages and
                frameworks, strengthening debugging, analytical thinking, and code
                review skills.
              </p>

              <span className={styles.eduBadge}>Professional Experience</span>
            </Reveal>
          </div>
        </section>


        {/* PROJECTS */}
        <section id="projects" className={styles.section}>
          <Reveal as="p" className={styles.secLabel}>
            05 — Work
          </Reveal>

          <Reveal as="h2" className={styles.secTitle} delay={100}>
            Projects

          </Reveal>
          <div className={styles.projList}>
            <Reveal className={styles.projItem}>
              <div className={styles.projNum}>_01.</div>
              <div className={styles.projThumb}>
                <div className={`${styles.projThumbInner} ${styles.ptRed}`}>🔒</div>
              </div>
              <div>
                <div className={styles.projName}>DocLocker</div>
                <div className={styles.projDesc}>
                  AI-powered cloud document management platform featuring secure authentication,
                  cloud storage, intelligent PDF summarization with Gemini AI, asynchronous
                  processing using Redis & BullMQ, and real-time job status updates.
                </div>
                <div className={styles.projTags}>
                  <span className={styles.tag}>Next.js 15</span>
                  <span className={styles.tag}>MongoDB</span>
                  <span className={styles.tag}>Redis</span>
                  <span className={styles.tag}>BullMQ</span>
                  <span className={styles.tag}>Gemini AI</span>
                  <span className={styles.tag}>Cloudinary</span>
                  <span className={styles.tag}>Websocket</span>
                </div>
              </div>
              <div className={styles.projActions}>
                <a
                  href="https://doclocker.kaushikrajbongshi.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projBtn} ${styles.projBtnCase}`}
                >
                  🚀 Live Demo
                </a>

                <Link href="/projects/doclocker" className={`${styles.projBtn} ${styles.projBtnCase}`}>
                  📖 Case Study
                </Link>
                <a
                  href="https://github.com/kaushikrajbongshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projBtn} ${styles.projBtnGh}`}
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>

            <Reveal className={styles.projItem}>
              <div className={styles.projNum}>_02.</div>
              <div className={styles.projThumb}>
                <div className={`${styles.projThumbInner} ${styles.ptBlue}`}>🗂️</div>
              </div>
              <div>
                <div className={styles.projName}>Academic Module Tracker</div>
                <div className={styles.projDesc}>
                  Enterprise-style academic management platform with role-based access,
                  secure authentication, real-time syllabus tracking, and a NestJS REST API
                  powering a Prisma/MySQL backend.
                </div>
                <div className={styles.projTags}>
                  <span className={styles.tag}>Next.js</span>
                  <span className={styles.tag}>NestJS</span>
                  <span className={styles.tag}>Prisma</span>
                  <span className={styles.tag}>MySQL</span>
                  <span className={styles.tag}>JWT</span>
                  <span className={styles.tag}>RBAC</span>
                  <span className={styles.tag}>Tailwind CSS</span>
                </div>
              </div>
              <div className={styles.projActions}>
                <Link href="/projects/academic-tracker" className={`${styles.projBtn} ${styles.projBtnCase}`}>
                  📖 Case Study
                </Link>
                <a
                  href="https://github.com/kaushikrajbongshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projBtn} ${styles.projBtnGh}`}
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>


            <Reveal className={styles.projItem}>
              <div className={styles.projNum}>_03.</div>
              <div className={styles.projThumb}>
                <div className={`${styles.projThumbInner} ${styles.ptAmber}`}>🎯</div>
              </div>
              <div>
                <div className={styles.projName}>ATS Keyword Match Checker</div>
                <div className={styles.projDesc}>
                  Paste a job description and a resume to get an instant keyword-match score — with
                  PDF / DOCX resume parsing and a missing-keyword breakdown, running entirely
                  client-side with zero backend.
                </div>
                <div className={styles.projTags}>
                  <span className={styles.tag}>Next.js</span>
                  <span className={styles.tag}>TypeScript</span>
                  <span className={styles.tag}>Tailwind</span>
                  <span className={styles.tag}>pdf.js</span>
                  <span className={styles.tag}>Mammoth.js</span>
                  <span className={styles.tag}>Vercel</span>
                </div>
              </div>
              <div className={styles.projActions}>
                <a
                  href="https://ats-keyword-checker.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projBtn} ${styles.projBtnCase}`}
                >
                  🚀 Live Demo
                </a>
                <a
                  href="https://github.com/kaushikrajbongshi/ats-keyword-checker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projBtn} ${styles.projBtnGh}`}
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>

            <Reveal className={styles.projItem}>
              <div className={styles.projNum}>_04.</div>
              <div className={styles.projThumb}>
                <div className={`${styles.projThumbInner} ${styles.ptGreen}`}>🚛</div>
              </div>

              <div>
                <div className={styles.projName}>
                  Ward-Level Waste Segregation & Pickup Optimizer
                </div>

                <div className={styles.projDesc}>
                  National Hackathon project that streamlines municipal waste collection through
                  citizen pickup requests, smart route optimization using the Nearest-Neighbor
                  algorithm, and a collector dashboard for efficient waste management.
                </div>

                <div className={styles.projTags}>
                  <span className={styles.tag}>JavaScript</span>
                  <span className={styles.tag}>Node.js</span>
                  <span className={styles.tag}>MongoDB</span>
                  <span className={styles.tag}>REST API</span>
                  <span className={styles.tag}>Nearest-Neighbor</span>
                  <span className={styles.tag}>Hackathon</span>
                </div>
              </div>

              <div className={styles.projActions}>
                <a
                  href="https://github.com/kaushikrajbongshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projBtn} ${styles.projBtnGh}`}
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>

            <Reveal className={styles.projItem}>
              <div className={styles.projNum}>_05.</div>
              <div className={styles.projThumb}>
                <div className={`${styles.projThumbInner} ${styles.ptGreen}`}>📚</div>
              </div>
              <div>
                <div className={styles.projName}>Library Management System</div>
                <div className={styles.projDesc}>
                  CRUD web application for books, members, and borrowing records with PHP
                  server-side logic and a relational MySQL backend.
                </div>
                <div className={styles.projTags}>
                  <span className={styles.tag}>PHP</span>
                  <span className={styles.tag}>MySQL</span>
                  <span className={styles.tag}>HTML/CSS</span>
                </div>
              </div>
              <div className={styles.projActions}>
                <a
                  href="https://github.com/kaushikrajbongshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projBtn} ${styles.projBtnGh}`}
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CERTIFICATIONS & ACHIEVEMENTS */}
        <section id="certifications" className={styles.section}>
          <Reveal as="p" className={styles.secLabel}>
            06 — Certifications
          </Reveal>

          <Reveal as="h2" className={styles.secTitle} delay={100}>
            Certifications
            <br />
            & Achievements
          </Reveal>

          <div className={styles.eduGrid}>
            <Reveal className={styles.eduCard} delay={100}>
              <div className={styles.eduDeg}>Python Programming</div>
              <div className={styles.eduSchool}>ITC Certified Program</div>
              <div className={styles.eduPeriod}>Professional Certification</div>
              <span className={styles.eduBadge}>Certified ✓</span>
            </Reveal>

            <Reveal className={styles.eduCard} delay={200}>
              <div className={styles.eduDeg}>Full-Stack Development 101</div>
              <div className={styles.eduSchool}>Simplilearn SkillUp</div>
              <div className={styles.eduPeriod}>Certificate #9471669</div>
              <span className={styles.eduBadge}>Certified ✓</span>
            </Reveal>

            <Reveal className={styles.eduCard} delay={300}>
              <div className={styles.eduDeg}>National AI/ML Hackathon</div>
              <div className={styles.eduSchool}>YUVAAN 2026 · IIT Hyderabad</div>
              <div className={styles.eduPeriod}>Participant</div>
              <span className={styles.eduBadge}>Achievement</span>
            </Reveal>

            <Reveal className={styles.eduCard} delay={400}>
              <div className={styles.eduDeg}>GUenARK SIH 1.0</div>
              <div className={styles.eduSchool}>
                Innovation & Incubation Cell, Gauhati University
              </div>
              <div className={styles.eduPeriod}>Hackathon Participant</div>
              <span className={styles.eduBadge}>Achievement</span>
            </Reveal>
          </div>
        </section>

        {/* LOOKING FOR */}
        <section id="looking" className={`${styles.section} ${styles.looking}`}>
          <Reveal as="p" className={styles.secLabel}>
            07 — Availability
          </Reveal>
          <Reveal as="h2" className={styles.secTitle} delay={100}>
            What I&apos;m
            <br />
            Looking For
          </Reveal>
          <Reveal className={styles.lfCard} delay={200}>
            <div className={styles.lfTag}>Open to Work</div>
            <div className={styles.lfHeadline}>
              Seeking Internship &amp;
              <br />
              Junior Developer Roles
            </div>
            <p className={styles.lfBody}>
              I am actively seeking opportunities where I can contribute to{" "}
              <strong>backend systems, API development, and full-stack applications</strong>.
              I&apos;m eager to join a team where I can write meaningful code, learn from
              experienced engineers, and grow into a well-rounded developer. Remote, hybrid, or
              on-site — open to all.
            </p>
            <div className={styles.lfChips}>
              <div className={styles.lfChip}>Backend Development</div>
              <div className={styles.lfChip}>REST API Design</div>
              <div className={styles.lfChip}>Full Stack (MERN / Next.js)</div>
              <div className={styles.lfChip}>Authentication Systems</div>
              <div className={styles.lfChip}>Database Design</div>
              <div className={styles.lfChip}>Open Source Contribution</div>
            </div>
            <a href="mailto:kaushikraj0241@gmail.com" className={`${styles.btn} ${styles.btnFill}`}>
              Let&apos;s Talk ↗
            </a>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <Reveal as="p" className={styles.secLabel} style={{ textAlign: "center" }}>
            08 — Contact
          </Reveal>
          <Reveal className={styles.contactBig} delay={100}>
            <span className={styles.contactBigLine1}>LET&apos;S BUILD</span>
            <span className={styles.contactBigLine2}>SOMETHING</span>
          </Reveal>
          <Reveal className={styles.contactEmailWrap} delay={200}>
            <a href="mailto:kaushikraj0241@gmail.com" className={styles.contactEmail}>
              kaushikraj0241@gmail.com
            </a>
          </Reveal>
          <Reveal className={styles.contactSocials} delay={300}>
            <a href="https://github.com/kaushikrajbongshi" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kaushik-rajbongshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:kaushikraj0241@gmail.com">Email</a>
          </Reveal>
        </section>

        <footer className={styles.footer}>
          <span>Kaushik Rajbongshi © 2026</span>
          <span>Mangaldoi, Assam, India</span>
        </footer>
      </main>
    </>
  );
}
