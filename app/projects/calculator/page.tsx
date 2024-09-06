'use client';

import styles from '../../styles/page.module.css';
import { useState } from 'react';
import Image from 'next/image';
import ArrowBack from '../../../public/icons/arrow-back.svg';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState('');
  // const [operation, setOperation] = useState('');

  const evaluate = (value: string) => {
    // there has to be a better way to do this
    // for the sake of time, this is an issue for later
    if (input.includes('+')) {
      const array = input.split('+');
      const solution = (parseFloat(array[0]) + parseFloat(array[1])).toString();
      setInput(solution);
    } else if (input.includes('-')) {
      const array = input.split('-');
      const solution = (parseFloat(array[0]) - parseFloat(array[1])).toString();
      setInput(solution);
    } else if (input.includes('*')) {
      const array = input.split('*');
      const solution = (parseFloat(array[0]) * parseFloat(array[1])).toString();
      setInput(solution);
    } else if (input.includes('/')) {
      const array = input.split('/');
      const solution = (parseFloat(array[0]) / parseFloat(array[1])).toString();
      setInput(solution);
    } else if (input.includes('%')) {
      const array = input.split('%');
      const solution = (parseFloat(array[0]) % parseFloat(array[1])).toString();
      setInput(solution);
    } else {
      // setInput(input);
      setInput('ERR');
    }
  };

  const onClick = (value: string) => {
    // decided to use switch statement instead of if else statements
    switch (value) {
      case 'AC':
        setInput(' ');
        break;
      case '=':
        evaluate(input);
        break;
      case '?':
        alert(
          "Congrats! You've found your first clue. Check the console for further instructions :)"
        );
        console.log("Here's your clue!");
        console.log('L');
        break;
      default:
        setInput(input + value);
    }
  };

  return (
    <>
      <Navbar
        repoLink={
          'https://github.com/ValentinaValverde/soffice_studios/blob/main/app/projects/calculator/page.tsx'
        }
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          // height: '100vh',
        }}
      >
        <div className={styles.calculator}>
          <div className={styles.window}>
            <p>{input}</p>
            {/* <p style={{ fontSize: 10 }}>{display}</p> */}
          </div>
          <div>
            <button
              className={styles.operationButton}
              onClick={() => onClick('AC')}
            >
              AC
            </button>
            <button
              className={styles.operationButton}
              onClick={() => onClick('?')}
            >
              ?
            </button>
            <button
              className={styles.operationButton}
              onClick={() => onClick('%')}
            >
              %
            </button>
            <button
              className={styles.operationButton}
              onClick={() => onClick('/')}
            >
              /
            </button>
          </div>
          <div>
            <button className={styles.calcButton} onClick={() => onClick('7')}>
              7
            </button>
            <button className={styles.calcButton} onClick={() => onClick('8')}>
              8
            </button>
            <button className={styles.calcButton} onClick={() => onClick('9')}>
              9
            </button>
            <button
              className={styles.operationButton}
              onClick={() => onClick('*')}
            >
              *
            </button>
          </div>
          <div>
            <button className={styles.calcButton} onClick={() => onClick('4')}>
              4
            </button>
            <button className={styles.calcButton} onClick={() => onClick('5')}>
              5
            </button>
            <button className={styles.calcButton} onClick={() => onClick('6')}>
              6
            </button>
            <button
              className={styles.operationButton}
              onClick={() => onClick('-')}
            >
              -
            </button>
          </div>
          <div>
            <button className={styles.calcButton} onClick={() => onClick('1')}>
              1
            </button>
            <button className={styles.calcButton} onClick={() => onClick('2')}>
              2
            </button>
            <button className={styles.calcButton} onClick={() => onClick('3')}>
              3
            </button>
            <button
              className={styles.operationButton}
              onClick={() => onClick('+')}
            >
              +
            </button>
          </div>
          <div>
            <button className={styles.longButton} onClick={() => onClick('0')}>
              0
            </button>
            <button
              className={styles.operationButton}
              onClick={() => onClick('.')}
            >
              .
            </button>
            <button
              className={styles.operationButton}
              onClick={() => onClick('=')}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
