import React from 'react';

const Pagination = (props) => {
  return (
    <div className="py-3 text-center">
      <button onClick={props.previousPage} type="button" className="btn btn-info mr-1">
      <i className="fas fa-arrow-left mr-1"></i>Página anterior
      </button>
      <button onClick={props.nextPage} type="button" className="btn btn-info mr-1">
        Página siguiente<i className="fas fa-arrow-right ml-1"></i>
      </button>
    </div>
  )
}

export default Pagination;