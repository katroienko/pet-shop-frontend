import { useMemo, useCallback } from "react";

import styles from "./Pagination.module.css";

const Pagination = ({ render, perPage, currentPage, setCurrentPage, total }) => {
  const totalPages = useMemo(
    () => Math.ceil(total / perPage),
    [total, perPage]
  );

  const onPrevPage = useCallback(() => {
    setCurrentPage((prevPage) => {
      if (prevPage !== 1) return prevPage - 1;
      return prevPage;
    });
  }, [setCurrentPage]);

  const onNextPage = useCallback(() => {
    setCurrentPage((prevPage) => {
      if (totalPages !== prevPage) {
        return prevPage + 1;
      }
      return prevPage;
    });
  }, [setCurrentPage, totalPages]);

  if(render) {
    return render({totalPages, onNextPage, onPrevPage});
  }

  const paginationElements = Array(totalPages)
    .fill()
    .map((_, index) => {
      const pageNumber = index + 1;
      const className =
        pageNumber === currentPage
          ? `${styles.item} ${styles.active}`
          : styles.item;
      return (
        <li onClick={() => setCurrentPage(pageNumber)} className={className}>
          {pageNumber}
        </li>
      );
    });

  return (
    <div className={styles.wrapper}>
      <span onClick={onPrevPage} className={styles.action}>
        Prev
      </span>
      <ul className={styles.list}>{paginationElements}</ul>
      <span className={styles.action} onClick={onNextPage}>
        Next
      </span>
    </div>
  );
};

export default Pagination;
