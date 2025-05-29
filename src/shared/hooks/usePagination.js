import { useMemo, useCallback } from "react";

const usePagination = ({ perPage, currentPage, setCurrentPage, total }) => {
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

      
      return {totalPages, onPrevPage, onNextPage}
}

export default usePagination;