import illustrationImage from '@/assets/deliverii.svg'
import styles from './App.module.scss'
import Input from './components/Input'
import ExpressList from './components/ExpressList'
import { useState, useEffect } from 'react';
import { StorageData } from './utils/storage';

type AppProps = {
  storage: StorageData;
}

const App = (props: AppProps) => {
    const [filter, setFilter] = useState('')
    const [list, setList] = useState(Object.values(props.storage));
  return (
    <div className={styles.container}>
      <div>
        <img src={illustrationImage} className={styles.illustration} alt="Illustration" />
      </div>
      <div className={styles.header}>
        <p className={styles.title}>Deliverii</p>
        <p className={styles.slogan}>简洁的快递查询</p>
      </div>
      <div className={styles.adder}>
        <Input
            className={styles.input}
            placeholder='点此输入快递单号~'
            onChange={(e) => {
                setFilter(e.target.value.trim());
            }}
        />
      </div>
      <div className={styles.content}>
        <ExpressList
            filter={filter}
            storage={props.storage}
            expresses={list}
            setList={setList}
        />
      </div>
    </div>
  )
}

export default App
