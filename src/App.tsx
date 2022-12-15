import illustrationImage from '@/assets/deliverii.svg'
import styles from './App.module.scss'
import Input from '@/components/Input'
import ExpressList from '@/components/ExpressList'
import { useState } from 'react';

const App = () => {
    const [filter, setFilter] = useState(null);
  return (
    <div className={styles.container}>
      <div>
        <img src={illustrationImage} className={styles.illustration} alt="Illustration" />
      </div>
      <div clsssName={styles.header}>
        <p className={styles.title}>Deliverii</p>
        <p className={styles.slogan}>简洁的快递查询</p>
      </div>
      <div className={styles.adder}>
        <Input
            className={styles.input}
            type='number'
            placeholder='点此输入快递单号~'
            onChange={(e) => {
                setFilter(e.target.value.trim());
            }}
        />
      </div>
      <div className={styles.content}>
        <ExpressList
            filter={filter}
            expresses={[{
                name: '别针帆布袋',
                id: '381481491491'
            }, {
                name: '别针鼠标垫',
                id: '381481491491'
            }, {
                name: '别针鼠标垫',
                id: '381481491491'
            }, {
                name: '别针鼠标垫',
                id: '381481491491'
            }, {
                name: '别针鼠标垫',
                id: '381481491491'
            }]}
        />
      </div>
    </div>
  )
}

export default App
