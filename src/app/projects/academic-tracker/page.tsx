import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import Reveal from "@/components/Reveal";
import CaseStudyNav from "@/components/CaseStudyNav";
import styles from "@/components/case-study.module.css";

export const metadata = {
  title: "Academic Module Tracker — Case Study · Kaushik Rajbongshi",
};

export default function AcademicTrackerPage() {
  return (
    <div className={`${styles.wrap} ${styles.themeLime}`}>
      <CustomCursor accent="#c8ff00" ringColor="rgba(200,255,0,0.3)" />
      <CaseStudyNav />

      <div className={styles.csHero}>
        <div className={styles.csProjectTag}>Case Study · 01</div>
        <h1 className={styles.csTitle}>
          Academic
          <br />
          <span className={styles.csTitleOutline}>Module Tracker</span>
        </h1>
        <p className={styles.csSubtitle}>
          A role-based faculty management system built for universities — empowering HODs and
          teachers to track syllabus coverage, visualize academic progress, and export
          institutional reports.
        </p>
        <div className={styles.csMetaRow}>
          <div>
            <div className={styles.csMetaLabel}>Type</div>
            <div className={styles.csMetaValue}>Full Stack Web App</div>
          </div>
          <div>
            <div className={styles.csMetaLabel}>Role</div>
            <div className={styles.csMetaValue}>Solo Developer</div>
          </div>
          <div>
            <div className={styles.csMetaLabel}>Status</div>
            <div className={styles.csMetaValue}>In Active Development</div>
          </div>
          <div>
            <div className={styles.csMetaLabel}>Stack</div>
            <div className={styles.csTags}>
              <span className={styles.csTag}>Next.js 16</span>
              <span className={styles.csTag}>JavaScript</span>
              <span className={styles.csTag}>Prisma</span>
              <span className={styles.csTag}>MySQL</span>
              <span className={styles.csTag}>JWT</span>
              <span className={styles.csTag}>jsPDF</span>
              <span className={styles.csTag}>Tailwind</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.csBody}>
        {/* PROBLEM */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>01 — Problem</div>
          <h2 className={styles.csSectionTitle}>
            What Problem
            <br />
            Does This Solve?
          </h2>
          <p className={styles.csText}>
            In most universities, tracking whether teachers have actually covered the syllabus is
            a <strong>manual, spreadsheet-driven nightmare</strong>. HODs have no real-time
            visibility. Teachers lack a structured way to log their coverage. At the end of term,
            generating reports is time-consuming and error-prone.
          </p>
          <p className={styles.csText}>
            Academic Module Tracker replaces this entire workflow with a{" "}
            <em>role-based digital system</em> where everyone has the right access, the right
            views, and the right data — always up to date.
          </p>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.ico}>😵</div>
              <div className={styles.head}>No Real-Time Visibility</div>
              <div className={styles.body}>
                HODs couldn&apos;t see teacher progress until the end of term — by then it was too
                late to intervene.
              </div>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.ico}>📊</div>
              <div className={styles.head}>Manual Reports</div>
              <div className={styles.body}>
                Generating Excel reports meant manually compiling data from multiple teachers —
                hours of work.
              </div>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.ico}>🔓</div>
              <div className={styles.head}>No Access Control</div>
              <div className={styles.body}>
                Any teacher could theoretically see or modify any other teacher&apos;s data. No
                RBAC, no audit trail.
              </div>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.ico}>📉</div>
              <div className={styles.head}>Coverage Gaps</div>
              <div className={styles.body}>
                Topics left uncovered were only discovered at the end of semester — too late to
                fix.
              </div>
            </div>
          </div>
        </Reveal>

        {/* ARCHITECTURE */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>02 — System Architecture</div>
          <h2 className={styles.csSectionTitle}>
            How It&apos;s
            <br />
            Built
          </h2>
          <p className={styles.csText}>
            The system is a <strong>monolithic Next.js application</strong> with server-side API
            routes, JWT-based authentication, and a Prisma ORM layer connecting to MySQL. All
            pages are server-rendered for performance and SEO.
          </p>
          <div className={styles.archDiagram}>
            <br />
            <br />
            <div className={styles.archLayers}>
              <div className={styles.archRow3}>
                <div className={`${styles.archBox} ${styles.archBoxFrontend}`}>
                  <div className={styles.boxLabel}>HOD Dashboard</div>
                  <div className={styles.boxTech}>Next.js + React</div>
                </div>
                <div className={`${styles.archBox} ${styles.archBoxFrontend}`}>
                  <div className={styles.boxLabel}>Teacher Portal</div>
                  <div className={styles.boxTech}>Next.js + React</div>
                </div>
                <div className={`${styles.archBox} ${styles.archBoxAuth}`}>
                  <div className={styles.boxLabel}>Auth Guard</div>
                  <div className={styles.boxTech}>JWT Middleware</div>
                </div>
              </div>
              <div className={styles.archArrow}>↓</div>
              <div className={styles.archRow}>
                <div className={`${styles.archBox} ${styles.archBoxBackend}`}>
                  <div className={styles.boxLabel}>API Routes</div>
                  <div className={styles.boxTech}>Next.js /api + Zod Validation</div>
                </div>
                <div className={`${styles.archBox} ${styles.archBoxBackend}`}>
                  <div className={styles.boxLabel}>Report Engine</div>
                  <div className={styles.boxTech}>jsPDF + XLSX Export</div>
                </div>
              </div>
              <div className={styles.archArrow}>↓</div>
              <div className={styles.archRow1}>
                <div className={`${styles.archBox} ${styles.archBoxDb}`}>
                  <div className={styles.boxLabel}>MySQL Database</div>
                  <div className={styles.boxTech}>Prisma ORM · MariaDB Adapter</div>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.csText}>
            RBAC is enforced at the middleware level — every API route checks the decoded JWT
            token and validates the user&apos;s role before allowing any operation.
          </p>
        </Reveal>

        {/* DATABASE DESIGN */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>03 — Database Design</div>
          <h2 className={styles.csSectionTitle}>
            Schema &amp;
            <br />
            Data Model
          </h2>
          <p className={styles.csText}>
            The schema is designed around a hierarchical academic structure:{" "}
            <strong>Admin → Faculty (HOD/Teacher) → Department → Course → Topic → SubTopic</strong>.
            Coverage is event-based — each teaching session creates a new <em>TopicCoverage</em> or{" "}
            <em>SubTopicCoverage</em> record with a real date, enabling a full audit trail rather
            than just a boolean flag.
          </p>
          <p className={styles.csText}>
            The system also tracks <strong>Students, AcademicYears, and Semesters</strong> —
            supporting batch-wise history, backlog/repeat status, and multi-year academic records.
            SubTopics support a <strong>self-referencing hierarchy</strong> (<code>parentId</code>)
            for nested content structures.
          </p>

          <div className={styles.relationPanel}>
            <div className={styles.relationLabel}>Entity Relationship Overview</div>
            <div className={styles.relationRow}>
              <span className={styles.relationAccent}>Admin</span>
              <span className={styles.relationDim}>manages</span>
              <span className={styles.relationAccent}>Faculty</span>
              <span className={styles.relationDim}>→ role:</span>
              <span className={styles.relationPill}>HOD | TEACHER</span>
              <span className={styles.relationDim}>→ belongs to</span>
              <span className={styles.relationAccent}>Department</span>
              <span className={styles.relationDim}>→ has</span>
              <span className={styles.relationAccent}>Course</span>
              <span className={styles.relationDim}>→ has</span>
              <span className={styles.relationAccent}>Topic</span>
              <span className={styles.relationDim}>→ has</span>
              <span className={styles.relationAccent}>SubTopic</span>
              <span className={styles.relationDim}>(self-ref)</span>
            </div>
            <div className={styles.relationRow} style={{ marginTop: 8 }}>
              <span className={styles.relationAccent}>AcademicYear</span>
              <span className={styles.relationDim}>ties together</span>
              <span className={styles.relationAccent}>FacultyCourse</span>
              <span className={styles.relationDim}>+</span>
              <span className={styles.relationAccent}>TopicCoverage</span>
              <span className={styles.relationDim}>+</span>
              <span className={styles.relationAccent}>Student</span>
              <span className={styles.relationDim}>→ history via</span>
              <span className={styles.relationAccent}>StudentAcademicYear</span>
            </div>
          </div>

          <div className={styles.dbGrid}>
            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>Faculty</div>
              <div className={styles.dbField}><span>id</span><span className={styles.fkey}>PK</span></div>
              <div className={styles.dbField}><span>faculty_id</span><span className={styles.ftype}>String @unique</span></div>
              <div className={styles.dbField}><span>email</span><span className={styles.ftype}>String @unique</span></div>
              <div className={styles.dbField}><span>username / name</span><span className={styles.ftype}>String</span></div>
              <div className={styles.dbField}><span>role</span><span className={styles.fkey}>FK → Faculty_Role</span></div>
              <div className={styles.dbField}><span>dept_id</span><span className={styles.fkey}>FK → Department</span></div>
              <div className={styles.dbField}><span>status</span><span className={styles.ftype}>A | D</span></div>
              <div className={styles.dbField}><span>password</span><span className={styles.ftype}>String (hashed)</span></div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>Department</div>
              <div className={styles.dbField}><span>dept_id</span><span className={styles.fkey}>PK</span></div>
              <div className={styles.dbField}><span>dept_name</span><span className={styles.ftype}>String</span></div>
              <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>→ courses[]</span><span /></div>
              <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>→ faculties[]</span><span /></div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>Course</div>
              <div className={styles.dbField}><span>course_id</span><span className={styles.fkey}>PK</span></div>
              <div className={styles.dbField}><span>course_name</span><span className={styles.ftype}>String</span></div>
              <div className={styles.dbField}><span>semester_id</span><span className={styles.fkey}>FK → Semester</span></div>
              <div className={styles.dbField}><span>dept_id</span><span className={styles.fkey}>FK → Department</span></div>
              <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>→ topics[], facultyCourses[]</span><span /></div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>AcademicYear</div>
              <div className={styles.dbField}><span>id</span><span className={styles.fkey}>PK</span></div>
              <div className={styles.dbField}><span>label</span><span className={styles.ftype}>&quot;2023-2024&quot; @unique</span></div>
              <div className={styles.dbField}><span>isActive</span><span className={styles.ftype}>Boolean</span></div>
              <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>→ facultyCourses[], students[]</span><span /></div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>
                FacultyCourse <span style={{ fontSize: 9, opacity: 0.6 }}>(mapping)</span>
              </div>
              <div className={styles.dbField}><span>facultyId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>courseId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>academicYearId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}>
                <span style={{ fontSize: 10, color: "var(--dim)" }}>@@unique[faculty, course, year]</span>
                <span />
              </div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>Topic</div>
              <div className={styles.dbField}><span>topic_id</span><span className={styles.fkey}>PK</span></div>
              <div className={styles.dbField}><span>topic_name</span><span className={styles.ftype}>String</span></div>
              <div className={styles.dbField}><span>topic_description</span><span className={styles.ftype}>Text?</span></div>
              <div className={styles.dbField}><span>courseId</span><span className={styles.fkey}>FK → Course</span></div>
              <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>→ subtopics[]</span><span /></div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>
                SubTopic <span style={{ fontSize: 9, opacity: 0.6 }}>(self-ref)</span>
              </div>
              <div className={styles.dbField}><span>subtopic_id</span><span className={styles.fkey}>PK</span></div>
              <div className={styles.dbField}><span>subtopic_name</span><span className={styles.ftype}>String</span></div>
              <div className={styles.dbField}><span>topicId</span><span className={styles.fkey}>FK → Topic</span></div>
              <div className={styles.dbField}><span>parentId</span><span className={styles.fkey}>FK → SubTopic</span></div>
              <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>→ children[] (nested)</span><span /></div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>TopicCoverage</div>
              <div className={styles.dbField}><span>topicId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>facultyId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>courseId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>semesterId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>academicYearId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>taughtOn</span><span className={styles.ftype}>Date (actual)</span></div>
              <div className={styles.dbField}><span>remark</span><span className={styles.ftype}>String?</span></div>
              <div className={styles.dbField}>
                <span style={{ fontSize: 10, color: "var(--dim)" }}>@@unique[topic+faculty+course+sem+year]</span>
                <span />
              </div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>SubTopicCoverage</div>
              <div className={styles.dbField}><span>subtopicId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>facultyId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>courseId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>semesterId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>academicYearId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>taughtOn</span><span className={styles.ftype}>Date</span></div>
              <div className={styles.dbField}>
                <span style={{ fontSize: 10, color: "var(--dim)" }}>@@unique[subtopic+faculty+course+sem+year]</span>
                <span />
              </div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>Student</div>
              <div className={styles.dbField}><span>studentID</span><span className={styles.ftype}>cuid() @unique</span></div>
              <div className={styles.dbField}><span>email</span><span className={styles.ftype}>String @unique</span></div>
              <div className={styles.dbField}><span>currentSem</span><span className={styles.fkey}>FK → Semester</span></div>
              <div className={styles.dbField}><span>academicYearId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>status</span><span className={styles.ftype}>A | D</span></div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>StudentAcademicYear</div>
              <div className={styles.dbField}><span>studentId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>academicYearId</span><span className={styles.fkey}>FK</span></div>
              <div className={styles.dbField}><span>status</span><span className={styles.ftype}>REGULAR | BACKLOG</span></div>
              <div className={styles.dbField}><span /><span className={styles.ftype}>| REPEAT | PASSED</span></div>
              <div className={styles.dbField}>
                <span style={{ fontSize: 10, color: "var(--dim)" }}>@@unique[student+year]</span>
                <span />
              </div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>Admin</div>
              <div className={styles.dbField}><span>id</span><span className={styles.fkey}>PK</span></div>
              <div className={styles.dbField}><span>username</span><span className={styles.ftype}>String @unique</span></div>
              <div className={styles.dbField}><span>email</span><span className={styles.ftype}>String @unique</span></div>
              <div className={styles.dbField}><span>status</span><span className={styles.ftype}>A | D</span></div>
            </div>
          </div>

          <div className={styles.calloutPanel}>
            <div className={styles.calloutTitle}>Key Design Decisions</div>
            <div className={styles.calloutList}>
              <div>
                → <strong style={{ color: "var(--text)" }}>Event-based coverage</strong> (not
                boolean) — each <code>taughtOn</code> date creates a new record, enabling full
                teaching history and timeline views.
              </div>
              <div>
                → <strong style={{ color: "var(--text)" }}>5-column composite unique</strong> on
                coverage tables prevents duplicate entries across faculty, course, semester, and
                academic year simultaneously.
              </div>
              <div>
                → <strong style={{ color: "var(--text)" }}>Self-referencing SubTopic</strong> (
                <code>parentId → subtopic_id</code>) allows infinitely nested topic trees without a
                fixed depth limit.
              </div>
              <div>
                → <strong style={{ color: "var(--text)" }}>StudentAcademicYear</strong> bridge
                table tracks REGULAR / BACKLOG / REPEAT / PASSED status per year — full academic
                history preserved.
              </div>
            </div>
          </div>
        </Reveal>

        {/* FEATURES */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>04 — Features</div>
          <h2 className={styles.csSectionTitle}>
            What It
            <br />
            Does
          </h2>
          <div className={styles.featList}>
            <div className={styles.featItem}>
              <div className={styles.featIco}>🔐</div>
              <div>
                <div className={styles.featHead}>Role-Based Access Control</div>
                <div className={styles.featDesc}>
                  HODs see department-wide dashboards and can manage faculty. Teachers only see
                  their own assigned courses. JWT tokens carry role claims validated on every API
                  call.
                </div>
              </div>
            </div>
            <div className={styles.featItem}>
              <div className={styles.featIco}>📈</div>
              <div>
                <div className={styles.featHead}>Real-Time Coverage Tracking</div>
                <div className={styles.featDesc}>
                  Teachers mark topics and sub-topics as covered with timestamps. Progress bars
                  update immediately, giving HODs live visibility into syllabus completion.
                </div>
              </div>
            </div>
            <div className={styles.featItem}>
              <div className={styles.featIco}>📄</div>
              <div>
                <div className={styles.featHead}>PDF &amp; Excel Report Export</div>
                <div className={styles.featDesc}>
                  Generate polished institutional reports in navy/gold branding with jsPDF and the
                  XLSX library. HODs can export per-teacher, per-course, or department-wide
                  summaries.
                </div>
              </div>
            </div>
            <div className={styles.featItem}>
              <div className={styles.featIco}>📋</div>
              <div>
                <div className={styles.featHead}>DataTables Integration</div>
                <div className={styles.featDesc}>
                  Large datasets of faculty, courses, and coverage entries are rendered in
                  interactive DataTables with search, sort, and pagination — all reconciled with
                  React&apos;s DOM carefully to avoid conflicts.
                </div>
              </div>
            </div>
            <div className={styles.featItem}>
              <div className={styles.featIco}>🏗️</div>
              <div>
                <div className={styles.featHead}>HOD Management Panel</div>
                <div className={styles.featDesc}>
                  HODs can assign teachers to courses, manage semesters and academic years, and add
                  new departments — all through a dedicated admin interface.
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SCREENSHOTS */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>05 — Screenshots</div>
          <h2 className={styles.csSectionTitle}>UI Walkthrough</h2>
          <div className={styles.screenshots}>
            <div className={styles.screenshot}>
              <div className={styles.screenshotBar}>
                <div className={`${styles.dot} ${styles.dotR}`} />
                <div className={`${styles.dot} ${styles.dotY}`} />
                <div className={`${styles.dot} ${styles.dotG}`} />
                <div className={styles.screenshotUrl}>localhost:3000/dashboard/faculty/hod/overview</div>
              </div>
              <div className={styles.screenshotBody}>
                <img src="/screenshots/amt/HOD_overview.webp" alt="HOD Dashboard overview" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div className={styles.screenshotCap}>HOD&apos;s Department overview with coverage progress</div>
            </div>
            <div className={styles.screenshot}>
              <div className={styles.screenshotBar}>
                <div className={`${styles.dot} ${styles.dotR}`} />
                <div className={`${styles.dot} ${styles.dotY}`} />
                <div className={`${styles.dot} ${styles.dotG}`} />
                <div className={styles.screenshotUrl}>localhost:3000/dashboard/faculty/course-coverage</div>
              </div>
              <div className={styles.screenshotBody}>
                <img src="/screenshots/amt/course_progress.webp" alt="Course coverage" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div className={styles.screenshotCap}>Topic coverage checklist per assigned course</div>
            </div>
            <div className={styles.screenshot}>
              <div className={styles.screenshotBar}>
                <div className={`${styles.dot} ${styles.dotR}`} />
                <div className={`${styles.dot} ${styles.dotY}`} />
                <div className={`${styles.dot} ${styles.dotG}`} />
                <div className={styles.screenshotUrl}>localhost:3000/dashboard/faculty/report</div>
              </div>
              <div className={styles.screenshotBody}>
                <img src="/screenshots/amt/report.webp" alt="Report export" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div className={styles.screenshotCap}>Export to PDF or Excel with one click</div>
            </div>
            <div className={styles.screenshot}>
              <div className={styles.screenshotBar}>
                <div className={`${styles.dot} ${styles.dotR}`} />
                <div className={`${styles.dot} ${styles.dotY}`} />
                <div className={`${styles.dot} ${styles.dotG}`} />
                <div className={styles.screenshotUrl}>localhost:3000/dashboard/admin</div>
              </div>
              <div className={styles.screenshotBody}>
                <img src="/screenshots/amt/admin_dashboard.webp" alt="Admin dashboard" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div className={styles.screenshotCap}>Admin dashboard for manages the whole system</div>
            </div>
          </div>
        </Reveal>

        {/* CHALLENGES */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>06 — Challenges</div>
          <h2 className={styles.csSectionTitle}>
            Hard Problems
            <br />
            I Solved
          </h2>
          <div className={styles.chalList}>
            <div className={styles.chalItem}>
              <div className={styles.chalTitle}>DataTables + React DOM Reconciliation Conflict</div>
              <div className={styles.chalBody}>
                DataTables.net manipulates the DOM directly after initialization. React&apos;s
                virtual DOM doesn&apos;t know about these changes, causing{" "}
                <strong>reconciliation errors and duplicate rendering</strong> when state updates
                triggered re-renders. I resolved this by using refs to detect DataTables
                initialization state and conditionally destroying/reinitializing the table on data
                changes — preventing React and DataTables from fighting over the same DOM nodes.
              </div>
            </div>
            <div className={styles.chalItem}>
              <div className={styles.chalTitle}>Hierarchical Coverage Percentage Calculation</div>
              <div className={styles.chalBody}>
                Calculating &quot;how much has a teacher covered&quot; requires rolling up
                SubTopic coverage → Topic → Course → Department. A naive approach would hit the DB
                dozens of times. I solved this with <strong>Prisma&apos;s nested include queries</strong>{" "}
                combined with server-side aggregation, computing all percentages in a single
                database round-trip.
              </div>
            </div>
            <div className={styles.chalItem}>
              <div className={styles.chalTitle}>Role-Based Middleware Without NextAuth</div>
              <div className={styles.chalBody}>
                I chose <strong>custom JWT middleware</strong> over NextAuth for fine-grained
                control. The challenge was protecting nested API routes consistently. I built a
                reusable <code>withRoleGuard()</code> higher-order function that wraps any API
                handler, decodes the token from cookies, validates the role, and returns 403 if
                unauthorized.
              </div>
            </div>
            <div className={styles.chalItem}>
              <div className={styles.chalTitle}>Styled PDF Export Matching Institutional Branding</div>
              <div className={styles.chalBody}>
                jsPDF&apos;s raw API is verbose and error-prone for complex layouts. I built a{" "}
                <strong>custom PDF builder abstraction</strong> that handles headers, footers,
                dynamic tables, and page breaks automatically — all styled with the
                university&apos;s navy and gold color palette using jsPDF-autotable.
              </div>
            </div>
          </div>
        </Reveal>

        {/* LEARNINGS */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>07 — What I Learned</div>
          <h2 className={styles.csSectionTitle}>
            Key
            <br />
            Takeaways
          </h2>
          <div className={styles.learnGrid}>
            <div className={styles.learnCard}>
              <div className={styles.learnIco}>🏗️</div>
              <div className={styles.learnHead}>Schema-First Design</div>
              <div className={styles.learnBody}>
                Getting the Prisma schema right upfront saved weeks of refactoring. The
                hierarchical model was designed on paper before writing a single line of code.
              </div>
            </div>
            <div className={styles.learnCard}>
              <div className={styles.learnIco}>🔒</div>
              <div className={styles.learnHead}>Auth Without Libraries</div>
              <div className={styles.learnBody}>
                Building JWT auth from scratch deepened my understanding of token lifecycle,
                refresh strategies, and cookie security flags.
              </div>
            </div>
            <div className={styles.learnCard}>
              <div className={styles.learnIco}>⚛️</div>
              <div className={styles.learnHead}>3rd Party DOM Libraries in React</div>
              <div className={styles.learnBody}>
                DataTables taught me the hard way to always isolate imperative DOM libraries behind
                refs and effect cleanup.
              </div>
            </div>
            <div className={styles.learnCard}>
              <div className={styles.learnIco}>📐</div>
              <div className={styles.learnHead}>Abstraction Pays Off</div>
              <div className={styles.learnBody}>
                Building a reusable PDF builder and role-guard HOF made adding new reports and
                protected routes trivial — no repetition.
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className={styles.csBackFooter}>
        <p className={styles.csBackFooterLabel}>Other Projects</p>
        <div className={styles.backLinks}>
          <Link href="/projects/doclocker" className={styles.btnBack}>DocLocker Case Study →</Link>
          <Link href="/projects/echopost" className={styles.btnBack}>EchoPost Case Study →</Link>
          <Link href="/" className={styles.btnBack}>← Back to Portfolio</Link>
        </div>
      </Reveal>
    </div>
  );
}
