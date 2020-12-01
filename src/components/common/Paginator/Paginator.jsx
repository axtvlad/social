import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, changePage, portionSize = 5}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPositionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const prevPages = () => {
        setPortionNumber(portionNumber - 1);
    }

    const nextPages = () => {
        setPortionNumber(portionNumber + 1);
    }


    return (
        <div className={classes.paginator}>
            {portionNumber > 1 &&
            <button onClick={prevPages}>
                Prev
            </button>}
            {pages
                .filter(page => page >= leftPositionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <span
                            className={cn({[classes.selectedPage]: currentPage === page}, classes.pageNumber)}
                            onClick={() => changePage(page)}
                            key={page}
                        >
                            {page}
                    </span>
                    )
                })}
            {portionCount > portionNumber &&
            <button onClick={nextPages}>
                Prev
            </button>}
        </div>
    )
}

export default Paginator;