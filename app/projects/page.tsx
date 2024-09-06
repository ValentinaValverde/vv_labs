import styles from '../styles/page.module.css';
import Card, { ComingSoonCard } from '../components/Card';

export default function Projects() {
  return (
    <div className={styles.cardContainer}>
      <Card title={'Calculator'} link="/projects/calculator" />
      <Card title={'To-Do'} link="/projects/to-do" />
      <Card
        title={'Rock-Paper-Scissors'}
        link="/projects/rock-paper-scissors"
      />

      <ComingSoonCard />
    </div>
  );
}
