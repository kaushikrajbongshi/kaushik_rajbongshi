import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import Reveal from "@/components/Reveal";
import CaseStudyNav from "@/components/CaseStudyNav";
import styles from "@/components/case-study.module.css";

export const metadata = {
  title: "DocLocker — Case Study · Kaushik Rajbongshi",
};

export default function DocLockerPage() {
  return (
    <>
      <div className={`${styles.wrap} ${styles.themeRed}`}>
        <CustomCursor accent="#ff6b6b" ringColor="rgba(255,107,107,0.3)" />
        <CaseStudyNav />

        <div className={styles.csHero}>
          <div className={styles.csProjectTag}>Case Study · 02</div>
          <h1 className={styles.csTitle}>
            Doc<span className={styles.csTitleOutline}>Locker</span>
          </h1>
          <p className={styles.csSubtitle}>
            A privacy-first cloud document vault — store, manage, and share files securely with
            multi-factor authentication, Cloudinary storage, and granular access control. Now being
            extended with an AI-powered document intelligence layer.
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
              <div className={styles.csMetaValue}>Live · AI Features In Progress</div>
            </div>
            <div>
              <div className={styles.csMetaLabel}>Stack</div>
              <div className={styles.csTags}>
                <span className={styles.csTag}>Next.js 15</span>
                <span className={styles.csTag}>MongoDB</span>
                <span className={styles.csTag}>Mongoose</span>
                <span className={styles.csTag}>Cloudinary</span>
                <span className={styles.csTag}>Brevo (OTP Email)</span>
                <span className={styles.csTag}>JWT</span>
                <span className={styles.csTag}>Tailwind</span>
                <span className={styles.csTag}>OpenAI / Claude SDK</span>
                <span className={styles.csTag}>PostgreSQL + pgvector</span>
                <span className={styles.csTag}>WebSocket</span>
                <span className={styles.csTag}>Docker</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>

            <a href="https://doclocker.kaushikrajbongshi.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnBack}
            >
              🚀 View Live Site →
            </a>
          </div>
        </div>

        <div className={styles.csBody}>
          {/* PROBLEM */}
          <Reveal className={styles.csSection}>
            <div className={styles.csSectionNum}>01 — Problem</div>
            <h2 className={styles.csSectionTitle}>
              Why Does This
              <br />
              Need to Exist?
            </h2>
            <p className={styles.csText}>
              People store sensitive documents — IDs, certificates, contracts — in random places:
              Gmail, WhatsApp, phone storage. These have{" "}
              <strong>no real access control, no encryption at upload, and no way to revoke access</strong>.
              When a device is lost or an account is compromised, everything is exposed. And even
              when documents are stored safely, actually finding an answer buried inside a long
              contract or report means manually re-reading the whole thing.
            </p>
            <p className={styles.csText}>
              DocLocker is built for people who need a <em>private, secure vault</em> for their
              important documents — with proper authentication, granular control over who sees
              what, and (in progress) the ability to ask a document a question instead of reading
              it end to end.
            </p>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.ico}>📤</div>
                <div className={styles.head}>Insecure Storage</div>
                <div className={styles.body}>
                  Most people store documents in chat apps or email — no encryption, no access
                  control.
                </div>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.ico}>🔑</div>
                <div className={styles.head}>Single Factor Only</div>
                <div className={styles.body}>
                  A compromised password = all documents exposed. No secondary verification layer.
                </div>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.ico}>👁️</div>
                <div className={styles.head}>No Visibility</div>
                <div className={styles.body}>
                  No audit log of who accessed what, and no way to revoke access once shared.
                </div>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.ico}>📄</div>
                <div className={styles.head}>Content Left Unread</div>
                <div className={styles.body}>
                  Long contracts and reports sit unread — no quick way to summarize or query what's
                  actually inside them.
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
              Architected
            </h2>
            <p className={styles.csText}>
              DocLocker's core is a <strong>Next.js 15 frontend and API layer</strong> with MongoDB
              as the primary database and Cloudinary for binary file storage. Account verification
              uses a custom <strong>OTP system with a MongoDB TTL index</strong> — codes expire
              automatically after 5 minutes. JWT tokens with HTTP-only cookies secure all sessions.
              An AI document-intelligence layer is being added directly into this same Next.js app —
              no separate microservice or second language — alongside an isolated PostgreSQL +
              pgvector store used purely for embeddings.
            </p>
            <div className={styles.archDiagram}>
              <br />
              <br />
              <div className={`${styles.archBox} ${styles.archBoxFrontend}`}>
                <div className={styles.boxLabel}>Next.js Frontend</div>
                <div className={styles.boxTech}>React 19 · Tailwind CSS · Heroicons</div>
              </div>
              <div className={styles.archArrow}>↓</div>
              <div className={styles.archRow}>
                <div className={`${styles.archBox} ${styles.archBoxAuth}`}>
                  <div className={styles.boxLabel}>Auth Layer</div>
                  <div className={styles.boxTech}>JWT · bcryptjs · HTTP-only Cookies</div>
                </div>
                <div className={`${styles.archBox} ${styles.archBoxAuth}`}>
                  <div className={styles.boxLabel}>OTP Verification</div>
                  <div className={styles.boxTech}>Custom OTP · MongoDB TTL Index · 5 min expiry</div>
                </div>
              </div>
              <div className={styles.archArrow}>↓</div>
              <div className={`${styles.archBox} ${styles.archBoxBackend}`}>
                <div className={styles.boxLabel}>Next.js API Routes</div>
                <div className={styles.boxTech}>Zod Validation · Mongoose ODM</div>
              </div>
              <div className={styles.archArrow}>↓</div>
              <div className={styles.archRow}>
                <div className={`${styles.archBox} ${styles.archBoxStorage}`}>
                  <div className={styles.boxLabel}>MongoDB</div>
                  <div className={styles.boxTech}>User data · Metadata · Permissions</div>
                </div>
                <div className={`${styles.archBox} ${styles.archBoxStorage}`}>
                  <div className={styles.boxLabel}>Cloudinary</div>
                  <div className={styles.boxTech}>Binary files · Secure URLs · Transforms</div>
                </div>
              </div>
              <div className={styles.archArrow}>↓</div>
              <div className={styles.archRow}>
                <div className={`${styles.archBox} ${styles.archBoxAi}`}>
                  <div className={styles.boxLabel}>
                    AI Layer <span className={styles.badgeCurrent}>In Progress</span>
                  </div>
                  <div className={styles.boxTech}>pdf-parse · OpenAI / Claude SDK · WebSocket push</div>
                </div>
                <div className={`${styles.archBox} ${styles.archBoxAi}`}>
                  <div className={styles.boxLabel}>
                    Vector Store <span className={styles.badgePlanned}>Planned</span>
                  </div>
                  <div className={styles.boxTech}>PostgreSQL + pgvector · isolated, embeddings-only</div>
                </div>
              </div>
            </div>
            <p className={styles.csText}>
              Files are never stored in MongoDB. Only <strong>metadata and Cloudinary secure URLs</strong>{" "}
              are persisted. Cloudinary signed URLs with expiry are used for file delivery — direct
              access without a valid session returns nothing. The Postgres/pgvector instance is
              intentionally kept separate from MongoDB — it exists solely for document embeddings and
              doesn't touch the existing data model.
            </p>
          </Reveal>

          {/* DB DESIGN */}
          <Reveal className={styles.csSection}>
            <div className={styles.csSectionNum}>03 — Database Design</div>
            <h2 className={styles.csSectionTitle}>
              Data
              <br />
              Schema
            </h2>
            <p className={styles.csText}>
              DocLocker uses <strong>7 MongoDB collections</strong>, each with a precise
              responsibility. The design handles nested folder hierarchies via a self-referencing{" "}
              <code>Folder</code> model, OTP-based verification with an{" "}
              <em>automatic TTL index</em> that expires codes after 5 minutes, and a{" "}
              <code>RecycleBin</code> that soft-deletes documents before permanent removal. The
              Document model now also carries a lightweight AI job-tracking field.
            </p>

            <div className={styles.relationPanel}>
              <div className={styles.relationLabel}>Collection Overview — 7 Models + Isolated Vector Store</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8 }}>
                {["User", "Document", "Folder (self-ref)", "ShareLink", "Otp TTL", "RecycleBin", "ActivityLog"].map(
                  (name, i) => (
                    <div
                      key={name}
                      style={{
                        padding: "8px 12px",
                        border: `1px solid rgba(var(--accent-rgb), ${i === 0 ? 0.35 : 0.2})`,
                        color: i === 0 ? "var(--accent)" : "var(--dim2)",
                        fontFamily: "var(--font-syne)",
                        fontSize: 11,
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      {name}
                    </div>
                  ),
                )}
                <div
                  style={{
                    padding: "8px 12px",
                    border: "1px dashed rgba(var(--accent-rgb), 0.35)",
                    color: "var(--dim2)",
                    fontFamily: "var(--font-syne)",
                    fontSize: 11,
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  embeddings <span style={{ opacity: 0.6 }}>(Postgres, planned)</span>
                </div>
              </div>
            </div>

            <div className={styles.dbGrid}>
              <div className={styles.dbTable}>
                <div className={styles.dbTableHead}>User</div>
                <div className={styles.dbField}><span>_id</span><span className={styles.fkey}>ObjectId</span></div>
                <div className={styles.dbField}><span>username</span><span className={styles.ftype}>String · required</span></div>
                <div className={styles.dbField}><span>email</span><span className={styles.ftype}>String · unique</span></div>
                <div className={styles.dbField}><span>passwordHash</span><span className={styles.ftype}>String · required</span></div>
                <div className={styles.dbField}><span>verified</span><span className={styles.ftype}>Boolean · false</span></div>
                <div className={styles.dbField}><span>createdAt / updatedAt</span><span className={styles.ftype}>Date</span></div>
              </div>

              <div className={styles.dbTable}>
                <div className={styles.dbTableHead}>
                  Document <span className={styles.badgeCurrent}>updated</span>
                </div>
                <div className={styles.dbField}><span>name</span><span className={styles.ftype}>String · required</span></div>
                <div className={styles.dbField}><span>fileUrl</span><span className={styles.ftype}>String · required</span></div>
                <div className={styles.dbField}><span>size</span><span className={styles.ftype}>Number</span></div>
                <div className={styles.dbField}><span>type</span><span className={styles.ftype}>pdf | image | docx…</span></div>
                <div className={styles.dbField}><span>folderId</span><span className={styles.fkey}>→ Folder (nullable)</span></div>
                <div className={styles.dbField}><span>userId</span><span className={styles.fkey}>→ User · required</span></div>
                <div className={styles.dbField}><span>status</span><span className={styles.ftype}>active | deleted</span></div>
                <div className={styles.dbField}><span>summaryStatus</span><span className={styles.ftype}>none|queued|processing|done|failed</span></div>
                <div className={styles.dbField}><span>summary</span><span className={styles.ftype}>String (cached)</span></div>
                <div className={styles.dbField}><span>summaryGeneratedAt</span><span className={styles.ftype}>Date?</span></div>
              </div>

              <div className={styles.dbTable}>
                <div className={styles.dbTableHead}>Folder <span style={{ fontSize: 9, opacity: 0.5 }}>(self-referencing)</span></div>
                <div className={styles.dbField}><span>name</span><span className={styles.ftype}>String · required</span></div>
                <div className={styles.dbField}><span>userId</span><span className={styles.fkey}>→ User · required</span></div>
                <div className={styles.dbField}><span>parentFolderId</span><span className={styles.fkey}>→ Folder · null=root</span></div>
                <div className={styles.dbField}><span>status</span><span className={styles.ftype}>active | deleted</span></div>
                <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>null parentId = root folder</span><span /></div>
              </div>

              <div className={styles.dbTable}>
                <div className={styles.dbTableHead}>
                  Otp <span style={{ fontSize: 9, padding: "1px 6px", background: "rgba(var(--accent-rgb),0.1)", border: "1px solid rgba(var(--accent-rgb),0.25)", color: "var(--accent)" }}>TTL 5 min</span>
                </div>
                <div className={styles.dbField}><span>userId</span><span className={styles.fkey}>→ User · required</span></div>
                <div className={styles.dbField}><span>code</span><span className={styles.ftype}>String · required</span></div>
                <div className={styles.dbField}><span>type</span><span className={styles.ftype}>register | login | reset</span></div>
                <div className={styles.dbField}><span>createdAt</span><span className={styles.ftype}>Date · default now</span></div>
                <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>index expireAfterSeconds: 300</span><span /></div>
              </div>

              <div className={styles.dbTable}>
                <div className={styles.dbTableHead}>ShareLink</div>
                <div className={styles.dbField}><span>docId</span><span className={styles.fkey}>→ Document · required</span></div>
                <div className={styles.dbField}><span>userId</span><span className={styles.fkey}>→ User · required</span></div>
                <div className={styles.dbField}><span>url</span><span className={styles.ftype}>String · required</span></div>
                <div className={styles.dbField}><span>expiresAt</span><span className={styles.ftype}>Date (optional)</span></div>
                <div className={styles.dbField}><span>oneTime</span><span className={styles.ftype}>Boolean · false</span></div>
                <div className={styles.dbField}><span>createdAt</span><span className={styles.ftype}>Date</span></div>
              </div>

              <div className={styles.dbTable}>
                <div className={styles.dbTableHead}>RecycleBin</div>
                <div className={styles.dbField}><span>docId</span><span className={styles.fkey}>→ Document · required</span></div>
                <div className={styles.dbField}><span>userId</span><span className={styles.fkey}>→ User · required</span></div>
                <div className={styles.dbField}><span>deletedAt</span><span className={styles.ftype}>Date · default now</span></div>
                <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>soft-delete before permanent removal</span><span /></div>
              </div>

              <div className={styles.dbTable}>
                <div className={styles.dbTableHead}>ActivityLog</div>
                <div className={styles.dbField}><span>userId</span><span className={styles.fkey}>→ User · required</span></div>
                <div className={styles.dbField}><span>activityType</span><span className={styles.ftype}>upload | delete | login</span></div>
                <div className={styles.dbField}><span /><span className={styles.ftype}>| share | download</span></div>
                <div className={styles.dbField}><span>targetId</span><span className={styles.ftype}>ObjectId (doc or folder)</span></div>
                <div className={styles.dbField}><span>createdAt</span><span className={styles.ftype}>Date</span></div>
              </div>

              <div className={styles.dbTable} style={{ borderStyle: "dashed" }}>
                <div className={styles.dbTableHead}>
                  embeddings <span className={styles.badgePlanned}>Postgres · planned</span>
                </div>
                <div className={styles.dbField}><span>id</span><span className={styles.fkey}>serial PK</span></div>
                <div className={styles.dbField}><span>document_id</span><span className={styles.ftype}>text (Mongo ObjectId ref)</span></div>
                <div className={styles.dbField}><span>chunk_text</span><span className={styles.ftype}>text</span></div>
                <div className={styles.dbField}><span>embedding</span><span className={styles.ftype}>vector(1536)</span></div>
                <div className={`${styles.dbField} ${styles.dbFieldNote}`}><span>queried via pg / Prisma for similarity search</span><span /></div>
              </div>
            </div>

            <div className={styles.calloutPanel}>
              <div className={styles.calloutTitle}>Key Design Decisions</div>
              <div className={styles.calloutList}>
                <div>
                  → <strong style={{ color: "var(--text)" }}>OTP TTL index</strong> —{" "}
                  <code>OtpSchema.index({"{"} createdAt: 1 {"}"}, {"{"} expireAfterSeconds: 300 {"}"})</code>{" "}
                  tells MongoDB to automatically delete OTP documents 5 minutes after creation. No
                  cron job, no manual cleanup — the database does it natively.
                </div>
                <div>
                  → <strong style={{ color: "var(--text)" }}>Self-referencing Folder</strong> —{" "}
                  <code>parentFolderId: null</code> marks a root folder. Any folder pointing to
                  another folder&apos;s <code>_id</code> becomes a subfolder, enabling infinite
                  nesting with a single model and no depth limit.
                </div>
                <div>
                  → <strong style={{ color: "var(--text)" }}>Soft delete with RecycleBin</strong> —
                  Documents are not instantly destroyed. Setting <code>status: &quot;deleted&quot;</code>{" "}
                  on the Document + creating a RecycleBin entry gives users a recovery window before
                  permanent deletion.
                </div>
                <div>
                  → <strong style={{ color: "var(--text)" }}>ActivityLog for audit trail</strong> —
                  Every upload, delete, share, login, and download is logged with the user and target
                  ID. This gives the system a full security audit trail — essential for a document
                  vault.
                </div>
                <div>
                  → <strong style={{ color: "var(--text)" }}>oneTime ShareLink</strong> — The{" "}
                  <code>oneTime: true</code> flag allows generating burn-after-read share links. Once
                  accessed, the link is invalidated — no re-use possible.
                </div>
                <div>
                  → <strong style={{ color: "var(--text)" }}>summaryStatus over a job queue</strong> —
                  A single enum field on the existing Document model (<code>none → queued →
                    processing → done | failed</code>) is the entire job-tracking mechanism for AI
                  summarization — no separate queue service needed at this scale.
                </div>
                <div>
                  → <strong style={{ color: "var(--text)" }}>pgvector kept isolated</strong> — Rather
                  than migrating away from MongoDB, a dedicated Postgres instance stores embeddings
                  only, referencing documents by their existing Mongo <code>_id</code>. This avoids
                  duplicating auth/storage systems (no Supabase) while adding real vector-search
                  experience.
                </div>
              </div>
            </div>
          </Reveal>

          {/* FEATURES */}
          <Reveal className={styles.csSection}>
            <div className={styles.csSectionNum}>04 — Features</div>
            <h2 className={styles.csSectionTitle}>
              What DocLocker
              <br />
              Does
            </h2>
            <div className={styles.featList}>
              <div className={styles.featItem}>
                <div className={styles.featIco}>🔐</div>
                <div>
                  <div className={styles.featHead}>OTP-Based Account Verification</div>
                  <div className={styles.featDesc}>
                    Every new account must verify via OTP before accessing the vault. OTP codes are
                    stored in MongoDB with a native TTL index — they auto-expire after 5 minutes with
                    zero application-level cleanup needed.
                  </div>
                </div>
              </div>
              <div className={styles.featItem}>
                <div className={styles.featIco}>☁️</div>
                <div>
                  <div className={styles.featHead}>Cloudinary Secure File Storage</div>
                  <div className={styles.featDesc}>
                    Files are uploaded directly to Cloudinary. Signed, expiring URLs are generated
                    per-request so no file is directly accessible without an active session.
                  </div>
                </div>
              </div>
              <div className={styles.featItem}>
                <div className={styles.featIco}>🔗</div>
                <div>
                  <div className={styles.featHead}>Controlled Sharing with Expiry</div>
                  <div className={styles.featDesc}>
                    Share a document via a tokenized link with optional email restriction, view count
                    limit, and auto-expiry. Revoke access at any time by invalidating the ShareLink
                    token.
                  </div>
                </div>
              </div>
              <div className={styles.featItem}>
                <div className={styles.featIco}>📁</div>
                <div>
                  <div className={styles.featHead}>Document Management Dashboard</div>
                  <div className={styles.featDesc}>
                    Upload, preview, rename, and delete documents from a clean dashboard. Documents
                    show upload date, file type, size, and current privacy status at a glance.
                  </div>
                </div>
              </div>
              <div className={styles.featItem}>
                <div className={styles.featIco}>✅</div>
                <div>
                  <div className={styles.featHead}>Zod Schema Validation</div>
                  <div className={styles.featDesc}>
                    Every API input is validated with Zod before hitting the database. Invalid
                    payloads return structured error messages — no raw database errors are ever
                    exposed to the client.
                  </div>
                </div>
              </div>
              <div className={styles.featItem}>
                <div className={styles.featIco}>🤖</div>
                <div>
                  <div className={styles.featHead}>
                    AI Document Summarization <span className={styles.badgeCurrent}>In Progress</span>
                  </div>
                  <div className={styles.featDesc}>
                    A "Summarize" button extracts a document's text and sends it to an LLM, returning
                    a short summary plus key bullet points — cached on the document so it never
                    regenerates unnecessarily.
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
                  <div className={styles.screenshotUrl}>doclocker.app/login</div>
                </div>
                <div className={styles.screenshotBody}>
                  <img src="/screenshots/doclocker/signin.webp" alt="Login" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.screenshotCap}>Login with MFA prompt after password</div>
              </div>
              <div className={styles.screenshot}>
                <div className={styles.screenshotBar}>
                  <div className={`${styles.dot} ${styles.dotR}`} />
                  <div className={`${styles.dot} ${styles.dotY}`} />
                  <div className={`${styles.dot} ${styles.dotG}`} />
                  <div className={styles.screenshotUrl}>doclocker.app/verify-otp</div>
                </div>
                <div className={styles.screenshotBody}>
                  <img src="/screenshots/doclocker/otpvarify.webp" alt="OTP verification" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.screenshotCap}>Verify OTP after vaild credential</div>
              </div>
              <div className={styles.screenshot}>
                <div className={styles.screenshotBar}>
                  <div className={`${styles.dot} ${styles.dotR}`} />
                  <div className={`${styles.dot} ${styles.dotY}`} />
                  <div className={`${styles.dot} ${styles.dotG}`} />
                  <div className={styles.screenshotUrl}>doclocker.app/dashboard</div>
                </div>
                <div className={styles.screenshotBody}>
                  <img src="/screenshots/doclocker/User_dashboard.webp" alt="Dashboard" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.screenshotCap}>Document grid view with file cards</div>
              </div>
              <div className={styles.screenshot}>
                <div className={styles.screenshotBar}>
                  <div className={`${styles.dot} ${styles.dotR}`} />
                  <div className={`${styles.dot} ${styles.dotY}`} />
                  <div className={`${styles.dot} ${styles.dotG}`} />
                  <div className={styles.screenshotUrl}>doclocker.app/uploaddoc</div>
                </div>
                <div className={styles.screenshotBody}>
                  <img src="/screenshots/doclocker/UploadDoc.webp" alt="Upload document" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.screenshotCap}>Upload document</div>
              </div>
              <div className={styles.screenshot}>
                <div className={styles.screenshotBar}>
                  <div className={`${styles.dot} ${styles.dotR}`} />
                  <div className={`${styles.dot} ${styles.dotY}`} />
                  <div className={`${styles.dot} ${styles.dotG}`} />
                  <div className={styles.screenshotUrl}>doclocker.app/recyclebin</div>
                </div>
                <div className={styles.screenshotBody}>
                  <img src="/screenshots/doclocker/trash.webp" alt="Recycle bin" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.screenshotCap}>RecycleBin for Recovery</div>
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
                <div className={styles.chalTitle}>Secure File Delivery Without Exposing Cloudinary URLs</div>
                <div className={styles.chalBody}>
                  Cloudinary public URLs are permanent by default. I implemented{" "}
                  <strong>signed URL generation server-side</strong> with a short expiry window (5
                  minutes) and tied to the user&apos;s session. File requests go through an API route
                  that validates the session, then returns a fresh signed URL — so raw Cloudinary
                  links are never stored client-side or exposed in responses.
                </div>
              </div>
              <div className={styles.chalItem}>
                <div className={styles.chalTitle}>OTP Verification Without a Third-Party Service</div>
                <div className={styles.chalBody}>
                  Instead of relying on Firebase or a paid SMS/email API for OTP, I built the entire
                  flow in-house using MongoDB&apos;s <strong>native TTL index</strong>. The challenge
                  was ensuring codes expire reliably and can&apos;t be reused. The solution:{" "}
                  <code>OtpSchema.index({"{"} createdAt: 1 {"}"}, {"{"} expireAfterSeconds: 300 {"}"})</code>{" "}
                  lets MongoDB&apos;s background thread delete expired OTPs automatically. The{" "}
                  <code>verified: false</code> flag on User means even if someone skips OTP, they
                  simply cannot access the vault.
                </div>
              </div>
              <div className={styles.chalItem}>
                <div className={styles.chalTitle}>ShareLink Token Security</div>
                <div className={styles.chalBody}>
                  Share links need to be <strong>unguessable, expirable, and revocable</strong>. I
                  generated tokens using <code>crypto.randomBytes(32).toString(&apos;hex&apos;)</code>,
                  stored the hash (not the raw token) in MongoDB, and added view-count enforcement and
                  email restrictions at the API level. Expired or revoked links return 410 Gone, not
                  404, to distinguish intentional revocation from invalid paths.
                </div>
              </div>
              <div className={styles.chalItem}>
                <div className={styles.chalTitle}>Running AI Work Without Blocking the Response</div>
                <div className={styles.chalBody}>
                  Summarization involves downloading a file, extracting text, and calling an LLM —
                  too slow to do inline. The API route flips the document to{" "}
                  <code>summaryStatus: &quot;processing&quot;</code> immediately and does the actual
                  work after responding. Deploying as a persistent Node server (Railway/Render) rather
                  than on Vercel's serverless functions means this background work isn't at risk of
                  being killed mid-request.
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
                <div className={styles.learnIco}>☁️</div>
                <div className={styles.learnHead}>Cloud Storage Patterns</div>
                <div className={styles.learnBody}>
                  Never trust the client with raw storage URLs. Always proxy through your own API
                  with auth checks.
                </div>
              </div>
              <div className={styles.learnCard}>
                <div className={styles.learnIco}>🔑</div>
                <div className={styles.learnHead}>Multi-Factor Flows</div>
                <div className={styles.learnBody}>
                  Chaining two auth systems requires careful state management — a pre-auth token
                  pattern keeps things safe without race conditions.
                </div>
              </div>
              <div className={styles.learnCard}>
                <div className={styles.learnIco}>🍪</div>
                <div className={styles.learnHead}>Cookie Security</div>
                <div className={styles.learnBody}>
                  HTTP-only, SameSite=Strict, Secure flags together make session cookies nearly
                  immune to common web attacks.
                </div>
              </div>
              <div className={styles.learnCard}>
                <div className={styles.learnIco}>🔗</div>
                <div className={styles.learnHead}>Token Design</div>
                <div className={styles.learnBody}>
                  Storing hash of share tokens (not raw value) means a DB breach doesn&apos;t expose
                  valid share links.
                </div>
              </div>
            </div>
          </Reveal>

          {/* ROADMAP */}
          <Reveal className={styles.csSection}>
            <div className={styles.csSectionNum}>08 — What&apos;s Next</div>
            <h2 className={styles.csSectionTitle}>
              AI-Augmented
              <br />
              Roadmap
            </h2>
            <p className={styles.csText}>
              DocLocker is actively being extended with document intelligence features — built
              directly into the existing Next.js app rather than as a separate service, keeping the
              whole stack in one language.
            </p>
            <div className={styles.chalList}>
              <div className={styles.chalItem}>
                <div className={styles.chalTitle}>
                  Document Summarization <span className={styles.badgeCurrent}>In Progress</span>
                </div>
                <div className={styles.chalBody}>
                  A proof-of-concept API route already accepts a file URL, extracts text with{" "}
                  <code>pdf-parse</code>, and calls the OpenAI API to return a summary plus key
                  points. Next step: wire it into the real Document model and a live "Summarize"
                  button in the dashboard.
                </div>
              </div>
              <div className={styles.chalItem}>
                <div className={styles.chalTitle}>
                  Real-Time Push via WebSocket <span className={styles.badgePlanned}>Planned</span>
                </div>
                <div className={styles.chalBody}>
                  Once a summary finishes generating, a <code>summary:ready</code> event will push
                  straight to the user&apos;s connected socket — instantly flipping the UI from
                  "generating" to the finished result, with no polling.
                </div>
              </div>
              <div className={styles.chalItem}>
                <div className={styles.chalTitle}>
                  RAG Question-Answering with pgvector <span className={styles.badgePlanned}>Planned</span>
                </div>
                <div className={styles.chalBody}>
                  Document text will be chunked and embedded, with vectors stored in an isolated
                  PostgreSQL + <code>pgvector</code> instance — kept separate from MongoDB — enabling
                  users to ask free-text questions grounded only in their own document&apos;s content.
                </div>
              </div>
              <div className={styles.chalItem}>
                <div className={styles.chalTitle}>
                  Docker, CI/CD &amp; Live Deployment <span className={styles.badgePlanned}>Planned</span>
                </div>
                <div className={styles.chalBody}>
                  The app and Postgres instance will be containerized with Docker Compose, tested via
                  GitHub Actions, and deployed as a persistent Node server on Railway or Render —
                  chosen over Vercel specifically because WebSocket needs a long-lived connection
                  serverless functions can&apos;t provide.
                </div>
              </div>
            </div>
          </Reveal>


          <Reveal className={styles.csBackFooter}>
            <p className={styles.csBackFooterLabel}>Other Projects</p>
            <div className={styles.backLinks}>
              <Link href="/projects/academic-tracker" className={styles.btnBack}>Academic Tracker →</Link>
              <Link href="/projects/echopost" className={styles.btnBack}>EchoPost →</Link>
              <Link href="/" className={styles.btnBack}>← Back to Portfolio</Link>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}