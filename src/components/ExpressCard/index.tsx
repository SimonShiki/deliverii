import classNames from 'classnames'
import styles from './express-card.module.scss'
import ztoIcon from './zto.png'
import yundaIcon from './yunda.svg'
import { DeliverInfo } from '../../type/deliver'

export type CardProps = {
  className?: string;
  onClick: () => void;
  data: DeliverInfo
}

const ExpressList = (props: CardProps) => {
    return (
        <div
            className={classNames(styles.card, props.className)}
            onClick={() => {
                props.onClick();
            }}
        >
            <img src={ztoIcon} className={styles.icon} alt="icon" />
            <div className={styles.info}>
                <p className={styles.name}>{props.data.name}</p>
                <p className={styles.status}>快件已到达【济南中转部】</p>
            </div>
        </div>
    )
}

export default ExpressList
