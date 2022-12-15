import classNames from 'classnames'
import styles from './info.module.scss'
import Input from '@/components/Input'
import Timeline from '@/components/Timeline'
import illustrationImage from '@/assets/deliverii2.svg'
import axios from 'axios'
import { useState, useEffect } from 'react'

export type InfoProps = {
  className: string;
  isOpen: boolean;
  info: object;
  onClose: () => {};
}

const Info = (props: InfoProps) => {
    const currentInfo = props.info
    const [timelineData, setTimelineData] = useState([])
    useEffect(() => {
        if (!props.info) return;
        const fetchData = async () => {
            // todo
        }
        fetchData();
    }, [props.info])
    return (
        <div
            style={{display: props.isOpen ? 'flex' : 'none'}}
            className={classNames(styles.top)}
        >
            <div
                style={{display: props.isOpen ? 'flex' : 'none'}}
                className={classNames({
                    [styles.mask]: props.isOpen
                })}
                onClick={() => {
                    props.onClose(currentInfo);
                }}
            />
            {props.isOpen && (
                <div className={styles.fullscreen}>
                    <div className={styles.header}>
                        <img src={illustrationImage} className={styles.illustration} alt="illustration" />
                        <div className={styles.description}>
                            <Input
                                className={styles.name}
                                defaultValue={props.info.name}
                                placeholder='快递名'
                                onChange={(e) => {
                                    currentInfo.name = e.target.value.trim()
                                }}
                            />
                            <p className={styles.status}>{props.info.id}</p>
                        </div>
                    </div>
                    <Timeline events={timelineData} className={styles.timeline} />
                </div>
            )}
        </div>
    )
}

export default Info
