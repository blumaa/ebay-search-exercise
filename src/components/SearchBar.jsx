import React from 'react'

const SearchBar = ({ setSearch }) => {
    const [ searchTerm, setSearchTerm ] = React.useState('')

    const handleSubmit = () =>{
        setSearch(searchTerm)
    }

    return (
        <div className="SearchBar">
            <input type="text" name="search" onChange={e=>setSearchTerm(e.target.value)} />
            <input type="submit" value="Search Ebay" onClick={()=>handleSubmit()} />
        </div>
    )
}

export default SearchBar