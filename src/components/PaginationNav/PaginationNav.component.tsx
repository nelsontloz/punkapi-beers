import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

type PaginationNavProps = {
  onNextPage: () => void;
  onPreviousPage: () => void;
  currentPage: number;
};

function PaginationNav(props: PaginationNavProps) {
  return (
    <nav
      className="pagination is-left"
      role="navigation"
      aria-label="pagination"
    >
      <div className="pagination-list">
        <div>
          Page: {props.currentPage}
        </div>
      </div>
      <button
        className="button pagination-previous"
        onClick={props.onPreviousPage}
      >
        <span className="icon">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </span>
        <span>Previous page</span>
      </button>
      <button className="button pagination-next" onClick={props.onNextPage}>
        <span>Next page</span>
        <span className="icon">
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </span>
      </button>
    </nav>
  );
}

export default PaginationNav;
