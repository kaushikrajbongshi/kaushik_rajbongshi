import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import Reveal from "@/components/Reveal";
import CaseStudyNav from "@/components/CaseStudyNav";
import styles from "@/components/case-study.module.css";

export const metadata = {
  title: "EchoPost — Case Study · Kaushik Rajbongshi",
};

export default function EchoPostPage() {
  return (
    <div className={`${styles.wrap} ${styles.themePurple}`}>
      <CustomCursor accent="#a78bfa" ringColor="rgba(167,139,250,0.3)" />
      <CaseStudyNav />

      <div className={styles.csHero}>
        <div className={styles.csProjectTag}>Case Study · 03</div>
        <h1 className={styles.csTitle}>
          Echo<span className={styles.csTitleOutline}>POST</span>
        </h1>
        <p className={styles.csSubtitle}>
          A secure, full-featured social post-sharing platform built security-first — featuring
          OAuth authentication, Zod schema validation, and role-based access control.
        </p>
        <div className={styles.csMetaRow}>
          <div>
            <div className={styles.csMetaLabel}>Type</div>
            <div className={styles.csMetaValue}>Full Stack Social Platform</div>
          </div>
          <div>
            <div className={styles.csMetaLabel}>Role</div>
            <div className={styles.csMetaValue}>Solo Developer</div>
          </div>
          <div>
            <div className={styles.csMetaLabel}>Status</div>
            <div className={styles.csMetaValue}>Completed</div>
          </div>
          <div>
            <div className={styles.csMetaLabel}>Stack</div>
            <div className={styles.csTags}>
              <span className={styles.csTag}>Next.js 15</span>
              <span className={styles.csTag}>MongoDB</span>
              <span className={styles.csTag}>NextAuth v4</span>
              <span className={styles.csTag}>Mongoose</span>
              <span className={styles.csTag}>Zod</span>
              <span className={styles.csTag}>bcrypt</span>
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
            Why Build a
            <br />
            Post-Sharing App?
          </h2>
          <p className={styles.csText}>
            Most social platforms are either <strong>completely open or completely private</strong>{" "}
            — there&apos;s no middle ground. EchoPost was built to explore building a platform
            where <em>security and access control are designed in from day one</em>, not
            retrofitted.
          </p>
          <p className={styles.csText}>
            Beyond the product goal, this project was a vehicle for learning{" "}
            <strong>NextAuth deeply</strong>, understanding OAuth flow end-to-end, and building
            production-quality input validation with Zod across a real application.
          </p>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.ico}>🔓</div>
              <div className={styles.head}>Auth Complexity</div>
              <div className={styles.body}>
                Most tutorial projects treat auth as an afterthought. EchoPost treats it as the
                foundation — OAuth + credentials combined.
              </div>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.ico}>💉</div>
              <div className={styles.head}>Input Injection</div>
              <div className={styles.body}>
                Social platforms are prime targets for XSS and injection attacks. Every input
                needed validation before touching the DB.
              </div>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.ico}>👥</div>
              <div className={styles.head}>Role Enforcement</div>
              <div className={styles.body}>
                Public posts, private posts, admin moderation — different users need different
                access without a messy conditional mess.
              </div>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.ico}>🔄</div>
              <div className={styles.head}>Session Management</div>
              <div className={styles.body}>
                OAuth sessions need to interop with credential sessions, custom JWT callbacks, and
                database adapter syncing.
              </div>
            </div>
          </div>
        </Reveal>

        {/* AUTH FLOW */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>02 — System Architecture</div>
          <h2 className={styles.csSectionTitle}>
            Authentication
            <br />
            Flow
          </h2>
          <p className={styles.csText}>
            EchoPost supports two authentication paths — <strong>OAuth (Google / GitHub)</strong>{" "}
            and <strong>credentials (email + password)</strong> — unified under NextAuth v4 with a
            custom MongoDB adapter via Mongoose.
          </p>
          <div className={styles.flowSteps}>
            <div className={styles.flowStep}>
              <div className={styles.flowNum}>01</div>
              <div>
                <div className={styles.flowHead}>User Arrives at Login</div>
                <div className={styles.flowBody}>
                  User chooses OAuth provider or email/password. OAuth users are redirected to the
                  provider; credentials users submit through a <strong>Zod-validated form</strong>.
                </div>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowNum}>02</div>
              <div>
                <div className={styles.flowHead}>NextAuth Handles the Provider</div>
                <div className={styles.flowBody}>
                  NextAuth&apos;s <code>authorize()</code> callback validates credentials against
                  the MongoDB user record. bcrypt compares the hashed password. OAuth tokens are
                  exchanged server-side.
                </div>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowNum}>03</div>
              <div>
                <div className={styles.flowHead}>Custom JWT Callback Enriches Token</div>
                <div className={styles.flowBody}>
                  The <code>jwt()</code> callback queries the DB for the user&apos;s role and
                  appends it to the JWT payload. This makes role available in every session without
                  additional DB calls.
                </div>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowNum}>04</div>
              <div>
                <div className={styles.flowHead}>Session Callback Exposes Role</div>
                <div className={styles.flowBody}>
                  The <code>session()</code> callback maps the JWT role onto the session object,
                  making <strong><code>session.user.role</code></strong> available in all client
                  and server components.
                </div>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowNum}>05</div>
              <div>
                <div className={styles.flowHead}>Middleware Route Protection</div>
                <div className={styles.flowBody}>
                  Next.js middleware intercepts all protected routes, calls <code>getToken()</code>,
                  and redirects unauthenticated or unauthorized users before the page ever renders.
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* DB DESIGN */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>03 — Database Design</div>
          <h2 className={styles.csSectionTitle}>
            MongoDB
            <br />
            Schema
          </h2>
          <p className={styles.csText}>
            MongoDB with Mongoose handles the two core collections — <strong>User</strong> and{" "}
            <strong>Post</strong>. The schema is intentionally lean: no unnecessary fields, every
            constraint is deliberate, and the <code>provider</code> enum on User is what enables
            the <em>OAuth + credentials merge strategy</em> to work cleanly.
          </p>

          <div className={styles.relationPanel}>
            <div className={styles.relationLabel}>Collection Relationship</div>
            <div className={styles.relationRow}>
              <span style={{ padding: "10px 18px", border: "1px solid rgba(var(--accent-rgb),0.35)", color: "var(--accent)" }}>User</span>
              <span style={{ color: "var(--dim)", fontSize: 11, fontWeight: 400 }}>1 — many<br />author ref</span>
              <span style={{ padding: "10px 18px", border: "1px solid rgba(var(--accent-rgb),0.2)", color: "var(--dim2)" }}>Post</span>
              <span style={{ color: "var(--dim)", fontSize: 20 }}>→</span>
              <span style={{ padding: "8px 14px", border: "1px solid var(--border)", color: "var(--dim)", fontSize: 11, fontWeight: 400 }}>
                author: ObjectId<br />ref: &quot;User&quot;
              </span>
            </div>
          </div>

          <div className={styles.dbGrid}>
            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>User <span style={{ fontSize: 9, opacity: 0.5, fontWeight: 400 }}>mongoose.Schema</span></div>
              <div className={styles.dbField}><span>_id</span><span className={styles.fkey}>ObjectId (auto)</span></div>
              <div className={styles.dbField}><span>name</span><span className={styles.ftype}>String · required</span></div>
              <div className={styles.dbField}>
                <span>handle</span>
                <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                  <span className={styles.ftype}>String?</span>
                  <span style={{ fontSize: 9, padding: "1px 5px", border: "1px solid rgba(var(--accent-rgb),0.2)", color: "var(--accent)" }}>unique · sparse</span>
                </span>
              </div>
              <div className={styles.dbField}>
                <span>email</span>
                <span style={{ display: "flex", gap: 4 }}>
                  <span className={styles.ftype}>String</span>
                  <span style={{ fontSize: 9, padding: "1px 5px", border: "1px solid rgba(var(--accent-rgb),0.2)", color: "var(--accent)" }}>unique · required</span>
                </span>
              </div>
              <div className={styles.dbField}><span>password</span><span className={styles.ftype}>String? (nullable)</span></div>
              <div className={styles.dbField}><span>provider</span><span className={styles.ftype}>credentials | github | google</span></div>
              <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>timestamps: true</span><span>(createdAt, updatedAt)</span></div>
            </div>

            <div className={styles.dbTable}>
              <div className={styles.dbTableHead}>Post <span style={{ fontSize: 9, opacity: 0.5, fontWeight: 400 }}>mongoose.Schema</span></div>
              <div className={styles.dbField}><span>_id</span><span className={styles.fkey}>ObjectId (auto)</span></div>
              <div className={styles.dbField}><span>title</span><span className={styles.ftype}>String · required</span></div>
              <div className={styles.dbField}><span>description</span><span className={styles.ftype}>String (optional)</span></div>
              <div className={styles.dbField}>
                <span>author</span>
                <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                  <span className={styles.fkey}>ObjectId</span>
                  <span style={{ fontSize: 9, color: "var(--dim)" }}>ref: &quot;User&quot;</span>
                </span>
              </div>
              <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>timestamps: true</span><span>(createdAt, updatedAt)</span></div>
            </div>
          </div>

          <div className={styles.calloutPanel}>
            <div className={styles.calloutTitle}>Key Design Decisions</div>
            <div className={styles.calloutList}>
              <div>
                → <strong style={{ color: "var(--text)" }}>handle is <code>unique + sparse</code></strong>{" "}
                — <code>sparse: true</code> means MongoDB skips the unique index for{" "}
                <code>null</code> values, so OAuth users who haven&apos;t set a handle don&apos;t
                conflict with each other.
              </div>
              <div>
                → <strong style={{ color: "var(--text)" }}>password is nullable</strong> — OAuth
                users have no password. Making it optional with <code>required: false</code>{" "}
                cleanly supports both auth paths in one schema without a separate collection.
              </div>
              <div>
                → <strong style={{ color: "var(--text)" }}>provider enum</strong> —{" "}
                <code>[&quot;credentials&quot;, &quot;github&quot;, &quot;google&quot;]</code> stored
                on the User model is the key that enables the merge logic: if the same email
                already exists with a different provider, the system can detect and handle the
                conflict explicitly instead of silently creating duplicates.
              </div>
              <div>
                → <strong style={{ color: "var(--text)" }}>author as ObjectId ref</strong> —
                Mongoose&apos;s <code>populate()</code> on <code>ref: &quot;User&quot;</code> allows
                fetching full author details in a single query when loading the post feed.
              </div>
              <div>
                → <strong style={{ color: "var(--text)" }}>mongoose.models.X || model(&quot;X&quot;, schema)</strong>{" "}
                — The guard pattern prevents &quot;Cannot overwrite model once compiled&quot; errors
                in Next.js hot reload, where modules re-execute on every save.
              </div>
            </div>
          </div>
        </Reveal>

        {/* FEATURES */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>04 — Features</div>
          <h2 className={styles.csSectionTitle}>
            What EchoPost
            <br />
            Does
          </h2>
          <div className={styles.featList}>
            <div className={styles.featItem}>
              <div className={styles.featIco}>🔑</div>
              <div>
                <div className={styles.featHead}>OAuth + Credentials Auth</div>
                <div className={styles.featDesc}>
                  Login with Google, GitHub, or email/password — all unified under NextAuth. OAuth
                  users auto-create accounts; credentials users go through bcrypt verification with
                  Zod-validated inputs.
                </div>
              </div>
            </div>
            <div className={styles.featItem}>
              <div className={styles.featIco}>✅</div>
              <div>
                <div className={styles.featHead}>Zod Schema Validation</div>
                <div className={styles.featDesc}>
                  Every form submission — register, login, create post, comment — is validated
                  against a Zod schema before any DB operation. Structured, client-friendly errors
                  are returned on failure.
                </div>
              </div>
            </div>
            <div className={styles.featItem}>
              <div className={styles.featIco}>🛡️</div>
              <div>
                <div className={styles.featHead}>Role-Based Access Control</div>
                <div className={styles.featDesc}>
                  ADMIN users can delete any post or ban users. Regular users can only modify their
                  own content. Roles are checked at both middleware and API handler levels — two
                  layers of defence.
                </div>
              </div>
            </div>
            <div className={styles.featItem}>
              <div className={styles.featIco}>🔒</div>
              <div>
                <div className={styles.featHead}>Post Visibility Control</div>
                <div className={styles.featDesc}>
                  Authors mark posts as PUBLIC or PRIVATE. Private posts are only returned by the
                  API for the authenticated author — not for other users, not for admins, not in
                  search results.
                </div>
              </div>
            </div>
            <div className={styles.featItem}>
              <div className={styles.featIco}>🔔</div>
              <div>
                <div className={styles.featHead}>Toast Notifications</div>
                <div className={styles.featDesc}>
                  Toastify-js provides lightweight, non-blocking notifications for auth events, post
                  creation, errors, and admin actions — keeping the UI clean without blocking
                  modals.
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CHALLENGES */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>05 — Challenges</div>
          <h2 className={styles.csSectionTitle}>
            Hard Problems
            <br />
            I Solved
          </h2>
          <div className={styles.chalList}>
            <div className={styles.chalItem}>
              <div className={styles.chalTitle}>Custom JWT Callbacks With NextAuth</div>
              <div className={styles.chalBody}>
                NextAuth&apos;s default JWT contains only basic session info. To include the
                user&apos;s role, I had to extend both the{" "}
                <strong><code>jwt()</code> and <code>session()</code> callbacks</strong> — fetching
                from MongoDB on first sign-in and persisting the role in the token on every
                subsequent refresh. Getting the trigger conditions (
                <code>trigger === &quot;signIn&quot;</code>) right took careful reading of the
                NextAuth source code.
              </div>
            </div>
            <div className={styles.chalItem}>
              <div className={styles.chalTitle}>Merging OAuth and Credentials Users</div>
              <div className={styles.chalBody}>
                A user who first signs up with Google and later tries credentials with the same
                email shouldn&apos;t get two accounts. I built a{" "}
                <strong>pre-save hook in the Mongoose User schema</strong> that checks if an email
                already exists with a different provider and either merges the provider or returns
                an error prompting the user to use their original login method.
              </div>
            </div>
            <div className={styles.chalItem}>
              <div className={styles.chalTitle}>Zod Validation Across Client and Server</div>
              <div className={styles.chalBody}>
                Zod schemas are defined once in <code>/lib/validators</code> and imported by both
                client-side forms (for instant feedback) and API route handlers (for enforcement).
                The challenge was <strong>transforming Zod&apos;s error output</strong> into a shape
                that React form state could consume cleanly — I built a small helper that flattens
                Zod&apos;s nested errors into a <code>{"{ field: message }"}</code> map.
              </div>
            </div>
            <div className={styles.chalItem}>
              <div className={styles.chalTitle}>Private Post Leakage Prevention</div>
              <div className={styles.chalBody}>
                MongoDB queries for the feed always include a <strong>visibility filter</strong>{" "}
                that appends{" "}
                <code>{"{ $or: [{ visibility: 'PUBLIC' }, { authorId: session.user.id }] }"}</code>.
                This is applied at the Mongoose query level, not in application logic — meaning
                there&apos;s no way for a forgotten <code>if</code> statement to accidentally leak a
                private post.
              </div>
            </div>
          </div>
        </Reveal>

        {/* LEARNINGS */}
        <Reveal className={styles.csSection}>
          <div className={styles.csSectionNum}>06 — What I Learned</div>
          <h2 className={styles.csSectionTitle}>
            Key
            <br />
            Takeaways
          </h2>
          <div className={styles.learnGrid}>
            <div className={styles.learnCard}>
              <div className={styles.learnIco}>🔑</div>
              <div className={styles.learnHead}>NextAuth Deeply</div>
              <div className={styles.learnBody}>
                Callbacks, adapters, custom providers, JWT enrichment — this project forced me to
                understand NextAuth beyond basic setup.
              </div>
            </div>
            <div className={styles.learnCard}>
              <div className={styles.learnIco}>✅</div>
              <div className={styles.learnHead}>Validation as Architecture</div>
              <div className={styles.learnBody}>
                Zod schemas in a shared /lib folder, used by both client and server, make validation
                a first-class architectural concern.
              </div>
            </div>
            <div className={styles.learnCard}>
              <div className={styles.learnIco}>🛡️</div>
              <div className={styles.learnHead}>Defence in Depth</div>
              <div className={styles.learnBody}>
                Checking roles at middleware AND API handler levels means a bug in one layer
                doesn&apos;t expose everything. Two checks, zero single points of failure.
              </div>
            </div>
            <div className={styles.learnCard}>
              <div className={styles.learnIco}>🧩</div>
              <div className={styles.learnHead}>OAuth Provider Edge Cases</div>
              <div className={styles.learnBody}>
                Merging OAuth and credentials accounts for the same email is a real-world problem
                most tutorials skip. Now I know exactly how to handle it.
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className={styles.csBackFooter}>
        <p className={styles.csBackFooterLabel}>Other Projects</p>
        <div className={styles.backLinks}>
          <Link href="/projects/academic-tracker" className={styles.btnBack}>Academic Tracker →</Link>
          <Link href="/projects/doclocker" className={styles.btnBack}>DocLocker →</Link>
          <Link href="/" className={styles.btnBack}>← Back to Portfolio</Link>
        </div>
      </Reveal>
    </div>
  );
}
