import React from 'react'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import SearchResultsList from './components/SearchResultslist'

const Gallery = () => {
  const [ isLoading, setIsLoading ] = React.useState(false)
  const [ search, setSearch ] = React.useState(null)
  const [ searchResults, setSearchResults ] = React.useState(false)
  const [ errors, setErrors ] = React.useState(null)

  const url = `https://cors-anywhere.herokuapp.com/https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&keywords=harry%20potter&RESPONSE-DATA-FORMAT=JSON`

  async function fetchData() {
    setIsLoading(true)
    const res = await fetch(url);
    res
      .json()
      .then(res => {
        setSearchResults(res.findItemsByKeywordsResponse[0].searchResult[0].item)
        setIsLoading(false)
      })
      .catch(err => setErrors(err));
  }

  React.useEffect(()=>{
    console.log('serching', search)
     fetchData() 
  },[search])


  console.log('sesarch results', searchResults)
  console.log('errors', errors)

  return (
    <div className="gallery">
      Ebay Search Exercise
      <SearchBar setSearch={setSearch} />
      <Filter />
      {!isLoading && <SearchResultsList results={searchResults} isLoading={isLoading} />}
    </div>
  );
}

export default Gallery;
