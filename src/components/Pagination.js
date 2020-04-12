import React from  'react'

const Pagination = ({ totalPages, handleClick, handlePreviousClick, handleNextClick, page }) => {
  // console.log(totalPages)
  console.log(page)

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <a onClick={handlePreviousClick} className="pagination-previous">Previous</a>
      <a onClick={handleNextClick} className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li><a onClick={handleClick} className="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><span className="pagination-ellipsis">&hellip;</span></li>

        <li><a onClick={handleClick} className="pagination-link" aria-label="Goto page 45">100</a></li>

        <li><a onClick={handleClick} className="pagination-link" aria-label="Page 46" aria-current="page">200</a></li>

        <li><a onClick={handleClick} className="pagination-link" aria-label="Goto page 47">300</a></li>

        <li><span className="pagination-ellipsis">&hellip;</span></li>

        <li><a onClick={handleClick} className="pagination-link" aria-label="Goto page 86">{totalPages}</a></li>
      </ul>
    </nav>
  )
}

export default Pagination