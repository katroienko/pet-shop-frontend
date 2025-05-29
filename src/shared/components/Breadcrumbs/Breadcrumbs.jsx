import { Link } from 'react-router-dom';

import styles from './Breadcrumbs.module.css';

export function Breadcrumbs({ items }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className={styles.breadcrumbWrapper}>
          {index > 0 && <span className={styles.separator}>—</span>}

          <div className={styles.breadcrumbItem}>
            {item.to ? (
              <Link to={item.to} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
          </div>
        </div>
      ))}
    </nav>
  );
}
