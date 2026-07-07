import Link from "next/link";
import styles from "./case-study.module.css";

export default function CaseStudyNav() {
  return (
    <nav className={styles.csNav}>
      <Link href="/" className={styles.csNavBack}>
        ← Back to Portfolio
      </Link>
      <span className={styles.csNavName}>Kaushik Rajbongshi</span>
    </nav>
  );
}
