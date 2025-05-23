import styles from './BtnBlue.module.css'

export const BtnBlue = ({
    text,
    className = '',
    type = 'submit',
    onClick,
}) => {
    return (
        <button
            type={type}
            className={`${styles.btnBlue} ${className}`}
            onClick={onClick}
        >
            <div className={styles.addToCart}>
                {text}
            </div>
        </button>
    );
};