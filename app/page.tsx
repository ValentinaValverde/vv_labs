'use client';

import styles from './styles/page.module.css';
import Card, { ComingSoonCard } from './components/Card';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <main>
      <div className={styles.landing}>
        <div />
        <div>
          <h1>V V Labs</h1>
          <p>
            By{' '}
            <a
              href="https://www.linkedin.com/in/valentina-valverde-1a179227a/"
              target="_blank"
            >
              Val
            </a>
          </p>
        </div>

        <Link
          to="main-content"
          smooth={true}
          duration={900}
          style={{ cursor: 'pointer' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#FFFFFF"
          >
            <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
          </svg>
        </Link>
      </div>

      <div className={styles.cardContainer} id="main-content">
        <Card title={'Calculator'} link="/projects/calculator" />
        <Card title={'To-Do'} link="/projects/to-do" />
        <Card
          title={'Rock-Paper-Scissors'}
          link="/projects/rock-paper-scissors"
        />
        {/* <ComingSoonCard /> */}
      </div>
    </main>
  );
}
