'use client';
import Navbar from '@/app/components/Navbar';
import { useState } from 'react';
import styles from '../../styles/page.module.css';

export default function ToDoTwo() {
  const [value, setValue] = useState('');
  const [itemList, setItemList] = useState<string[]>([]);
  const [showClearButton, setShowClearButton] = useState(false);

  const onSubmit = (e: any) => {
    e?.preventDefault();
    setValue('');

    const trimmed = value.trim();

    if (trimmed) {
      setItemList([value, ...itemList]);
      setShowClearButton(true);
    } else {
      alert('Please type something');
    }
  };

  const clearList = () => {
    setItemList([]);
    setShowClearButton(false);
  };

  return (
    <>
      <Navbar
        repoLink={
          'https://github.com/ValentinaValverde/soffice_studios/blob/main/app/projects/to-do/page.tsx'
        }
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>To-Do List</h1>
        <div style={{ height: 50 }} />

        <form onSubmit={onSubmit}>
          <input
            required
            type="text"
            placeholder="Type Item Here..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
            style={{
              borderRadius: 100,
              padding: '10px 20px 10px 20px',
              border: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              borderRadius: 100,
              padding: '10px 20px 10px 20px',
              border: 'none',
              marginLeft: 10,
            }}
          >
            submit
          </button>
        </form>

        <div
          style={{
            marginTop: 20,
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
          }}
        >
          {itemList.map((item, i) => {
            return (
              <>
                <div style={{ marginTop: 5 }}>
                  <input type="checkbox" key={i} />
                  <label className={styles.form_control}>{item}</label>
                </div>
              </>
            );
          })}
        </div>

        {showClearButton ? (
          <button
            style={{
              marginTop: 50,
              borderRadius: 100,
              padding: '10px 20px 10px 20px',
              border: 'none',
              marginLeft: 10,
            }}
            onClick={clearList}
          >
            Clear List
          </button>
        ) : null}
      </div>
    </>
  );
}
