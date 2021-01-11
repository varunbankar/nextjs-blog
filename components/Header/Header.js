import styles from './Header.module.css'
import Link from "next/link";

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <Link href={"/"}>Next.js Blog</Link>
        </nav>
    )
}
