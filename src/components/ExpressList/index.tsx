import classNames from 'classnames'
import styles from './express-list.module.scss'
import emptyImage from '@/assets/empty.svg'
import ExpressCard from '@/components/ExpressCard'
import Info from '@/components/Info'
import { useState } from 'react'

export type ListProps = {
  className: string;
  expresses: object[];
  storage: Proxy;
  filter: string;
}

const ExpressList = (props: ListProps) => {
    const [currentInfo, setCurrentInfo] = useState(null)
    const list = props.filter === '' ?
        props.expresses : props.expresses?.filter(item => item.id.startsWith(props.filter))
    if (props.filter !== '' && list.length < 1) {
        list.push({
            name: '创建新快递',
            id: props.filter
        });
    }
    
    return (
        <>
            <div className={classNames(styles.container, props.className)}>
                {list?.length > 0 ? (
                    <div className={styles.list}>
                        {list.map((item, index) => {
                            return (
                                <ExpressCard
                                    key={index}
                                    data={item}
                                    onClick={() => {
                                        setCurrentInfo(item);
                                    }}
                                />
                            )
                        })}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <img src={emptyImage} className={styles.illustration} alt="emptyIllustration" />
                        <p className={styles.tips}>没有正在追踪的快递呢...</p>
                    </div>
                )}
            </div>
            <Info
                info={currentInfo}
                isOpen={currentInfo !== null}
                onClose={(info) => {
                    props.storage[info.id] = info;
                    props.setList(Object.values(props.storage));
                    setCurrentInfo(null);
                }}
            />
        </>
    )
}

export default ExpressList
