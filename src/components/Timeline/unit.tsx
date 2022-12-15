import classNames from 'classnames'
import styles from './timeline.module.scss'

export type UnitProps = {
  className: string;
  variant: 'top' | 'bottom' | 'both' | 'standalone';
}

const TimelineUnit = (props: UnitProps) => {
    return (
        <div className={classNames(styles.unit, props.className)}>
            <div className={styles.line}>
            <div className={classNames(styles.connect, {
                    [styles.hidden]: props.variant !== 'top' && props.variant !== 'both'
                })} />
                <div className={styles.standalone} />
                <div className={classNames(styles.connect, {
                    [styles.hidden]: props.variant !== 'bottom' && props.variant !== 'both'
                })} />
            </div>
            <p className={styles.content}>快件已到达【济南中转部】，正在由快递员【Simon】配送</p>
        </div>
    )
}

export default TimelineUnit
