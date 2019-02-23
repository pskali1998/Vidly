import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'; // popular js lib
const Pagination = (props) => {
    // array of page number
    const { itemsCount, pageSize , onPageChange , currentPage} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount+1);

    return ( 
        <nav>
            <ul className="pagination">
            {pages.map(page => (
                <li key={page}className={page === currentPage ? 'page-item active':'page-item'}><a href="#" onClick={()=>onPageChange(page)} className="page-link">{page}</a></li>
            ))}
            </ul>
        </nav>
     );
};
Pagination.propTypes ={ 
    itemsCount: PropTypes.number.isRequired ,
     pageSize : PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired

 };
export default Pagination ;