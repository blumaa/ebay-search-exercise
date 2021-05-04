import React from 'react'


const ListEntry = item => {
    console.log('list entry', item)
    return(
        <div>{item.title}</div>
    )
}

const SearchResultsList = ({results, isLoading}) => {

    console.log('search results', isLoading, results)

    return (
        <div>
            {results.map(item=><ListEntry />) }
        </div>
    )
}

export default SearchResultsList