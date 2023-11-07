import './pagination.css'

const Pagination = ({twelveCards, allCards, onPageChange}) => {
    const pageNumb = [];

    for (let i = 1; i <= Math.ceil(allCards / twelveCards); i++) {
        pageNumb.push(i)
    }

    return(
        <nav className='navPag'>
            <ul className="pagination">
                {pageNumb?.map((page) => 
                <li className='paginationItem' key={page}>
                    <button onClick={() => onPageChange(page)} className="buttonPagination">{page}</button>
                </li>)}
            </ul>
        </nav>
    )
}

export default Pagination;