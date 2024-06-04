import { useState } from "react";
import type { PaginationProps } from "../../types";
import Button from "../Button/Button";
import styles from "./Pagination.module.css";

const Pagination: React.FC<PaginationProps> = ({
  nPages,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const [activePage, setActivePage] = useState(1);
  const goToNextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
      setActivePage(currentPage + 1);
    }
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActivePage(currentPage - 1);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <Button text="Previous" onClick={goToPrevPage} />

      {pageNumbers.map((pageNum) => (
        <Button
          text={`${pageNum}`}
          onClick={() => {
            setCurrentPage(pageNum);
            setActivePage(pageNum);
          }}
          className={pageNum === activePage ? styles.activePage : ""}
        />
      ))}

      <Button text="Next" onClick={goToNextPage} />
    </div>
  );
};

export default Pagination;
