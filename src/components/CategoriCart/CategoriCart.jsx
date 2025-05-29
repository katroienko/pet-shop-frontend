import { backendInstance } from '../../shared/api/backendInstance';
import styles from './CategoriCart.module.css'


function CategoriCart({ id, title, image }) {
    const imageUrl = image.startsWith("http")
        ? image
        : `${backendInstance.defaults.baseURL}${image}`;

    return (
        <div className={styles.categoryWrapper}>
            <div className={styles.imageWrapper}>
                <img
                    src={imageUrl}
                    title={title}
                    alt={title}
                />
            </div>
            <p>{title}</p>
        </div>


    )
}

export default CategoriCart