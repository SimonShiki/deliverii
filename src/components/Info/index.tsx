import classNames from 'classnames'
import styles from './info.module.scss'
import Input from '@/components/Input'
import Timeline from '@/components/Timeline'
import illustrationImage from '@/assets/deliverii2.svg'

export type InfoProps = {
  className: string;
  isOpen: boolean;
  info: object;
  onClose: () => {};
}

const Info = (props: InfoProps) => {
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
                    props.onClose();
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
                            />
                            <p className={styles.status}>{props.info.id}</p>
                        </div>
                    </div>
                    <Timeline events={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} className={styles.timeline} />
                </div>
            )}
        </div>
    )
}

export default Info
