import React from 'react';

const Pagination = ({ totalPage, currentPage, onPageChange }) => {
  return (
    <div>
      {Array.from({ length: totalPage }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
