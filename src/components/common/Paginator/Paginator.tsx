import React, {useState} from 'react';

type Props = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    changePage: (page: number) => void
    portionSize?: number
}

export const Paginator: React.FC<Props> = (props) => {
    const {totalItemsCount, pageSize, currentPage, changePage, portionSize = 5} = props

    const styles = {
        paginator: {
            margin: 10
        },
        pageNumber: {
            padding: 2,
            border: '1px solid grey'
        },
        selectedPage: {
            fontWeight: 'bold',
            borderColor: 'black'
        }
    }

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
        <div style={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={prevPages}>
                Prev
            </button>}
            {pages
                .filter(page => page >= leftPositionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <span
                            onClick={() => changePage(page)}
                            key={page}
                            style={styles.pageNumber}
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
