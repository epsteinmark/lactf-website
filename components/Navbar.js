import React from "react";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <button
            onClick={() =>
              (window.location.href = "https://discord.gg/qD6vmsgECn")
            }
            className={styles.discord}
          >
            <a href="https://discord.gg/qD6vmsgECn">Join Us</a>
          </button>
        </li>
        <li>
          <Link href="#sponsors">Sponsors</Link>
        </li>
        <li>
          <Link href="#speakers">Speakers</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
