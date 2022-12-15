import classNames from 'classnames'
import styles from './timeline.module.scss'
import Unit from './unit';
import emptyImage from '@/assets/empty.svg'

type LineVariant = 'top' | 'bottom' | 'both' | 'standalone'

type TimelineProps = {
  className: string;
  events: object[];
}

const Timeline = (props: TimelineProps) => {
    if (!Array.isArray(props.events) || props.events.length < 1) {
        return (
            <div className={styles.empty}>
                <img src={emptyImage} className={styles.illustration} alt="emptyIllustration" />
                <p className={styles.tips}>暂时查不到这个快递的信息呢...</p>
            </div>
        )
    }
    return (
        <div className={classNames(styles.container, props.className)}>
            {props.events.map((item: any, index) => {
                let variant: LineVariant = 'standalone'
                if (index < props.events.length - 1 && index > 0) variant = 'both'
                else if (props.events.length === 1) variant = 'standalone'
                else if (index === 0) variant = 'bottom'
                else if (index === props.events.length - 1) variant = 'top'
                return <Unit key={index} variant={variant} data={item} />
            })}
        </div>
    )
}

export default Timeline
