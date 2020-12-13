import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import cn from 'classnames';

type Props = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    changePage: (page: number) => void
    portionSize?: number
}

const Paginator: React.FC<Props> = ({
                                        totalItemsCount,
                                        pageSize,
                                        currentPage,
                                        changePage,
                                        portionSize = 5
                                    }) => {
    const pageCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPositionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

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