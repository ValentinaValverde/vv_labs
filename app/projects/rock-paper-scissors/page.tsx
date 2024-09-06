'use client';
import Navbar from '@/app/components/Navbar';
import styles from '../../styles/page.module.css';
import { useState } from 'react';

// BIG ISSUE
// You have to click submit TWICE to get it to work :(

export default function ToDoTwo() {
  const [userSelection, setUserSelection] = useState('');
  const [botSelection, setBotSelection] = useState('');

  const [clicked, setClicked] = useState(false);

  const onClick = (selection: string) => {
    setUserSelection(selection);
  };

  const winner = () => {
    if (userSelection === botSelection) {
      alert('Tie!');
    } else if (userSelection === 'Rock' && botSelection === 'Paper') {
      alert('Paper beats Rock, Bot wins!');
    } else if (userSelection === 'Rock' && botSelection === 'Scissors') {
      alert('Rock beats Scissors, you win!');
    } else if (userSelection === 'Paper' && botSelection === 'Rock') {
      alert('Paper beats rock, you win!');
    } else if (userSelection === 'Paper' && botSelection === 'Scissors') {
      alert('Scissors beat paper, Bot wins!');
    } else if (userSelection === 'Scissors' && botSelection === 'Rock') {
      alert('Rock beats scissors, Bot wins!');
    } else if (userSelection === 'Scissors' && botSelection === 'Paper') {
      alert('Scissors beats paper, you win!');
    }
  };

  const shoot = () => {
    const selectionArray = ['Rock', 'Paper', 'Scissors'];
    const random =
      selectionArray[Math.floor(Math.random() * selectionArray.length)];

    if (userSelection === '') {
      alert('please select');
    } else {
      setBotSelection(random);
      //   setClicked(true);
      winner();

      console.log('RANDOM: ', random);
      console.log('USER SELECTION: ', userSelection);
      console.log('BOT SELECTION: ', botSelection);
    }
  };

  const reset = () => {
    setUserSelection('');
    setBotSelection('');
    setClicked(false);
  };

  return (
    <>
      <Navbar
        repoLink={
          'https://github.com/ValentinaValverde/soffice_studios/blob/main/app/projects/rock-paper-scissors/page.tsx'
        }
      />
      <div style={{ padding: 20 }}>
        <h1 style={{ textAlign: 'center' }}>Rock Paper Scissors</h1>
        <div style={{ height: 100 }} />

        {/* main container */}
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* user */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 150,
                gap: 15,
              }}
            >
              <button
                className={styles.rockPaperButton}
                onClick={() => onClick('Rock')}
              >
                Rock
              </button>
              <button
                className={styles.rockPaperButton}
                onClick={() => onClick('Paper')}
              >
                Paper
              </button>
              <button
                className={styles.rockPaperButton}
                onClick={() => onClick('Scissors')}
              >
                Scissors
              </button>
            </div>

            <div style={{ marginLeft: 50 }}>
              <p>Your Selection</p>
              <p className={styles.selectionText}>{userSelection}</p>
            </div>
          </div>

          {/* robot */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: 50, textAlign: 'right' }}>
              <p>Bot Selection</p>
              <p className={styles.selectionText}>{botSelection}</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 150,
                gap: 15,
              }}
            >
              <button className={styles.botRockPaperButton}>Rock</button>
              <button className={styles.botRockPaperButton}>Paper</button>
              <button className={styles.botRockPaperButton}>Scissors</button>
            </div>
          </div>
        </div>

        {/* button container */}
        <div style={{ height: 100 }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {clicked ? (
            <button className={styles.rockPaperButton} onClick={reset}>
              Reset
            </button>
          ) : (
            <button className={styles.rockPaperButton} onClick={shoot}>
              Shoot!
            </button>
          )}
        </div>
      </div>
    </>
  );
}
