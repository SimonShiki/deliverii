import classNames from 'classnames'
import styles from './input.module.scss'

type InputProps = {
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  [propName: string]: any;
}

const Input = (props: InputProps) => {
    return (
        <input
            className={classNames(
                styles.input,
                props.className
            )}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            onChange={props.onChange}
            type={props.type}
        />
    )
}

export default Input
