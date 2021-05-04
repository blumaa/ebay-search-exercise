import React from 'react'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import SearchResultsList from './components/SearchResultslist'

const Gallery = () => {
  const [ isLoading, setIsLoading ] = React.useState(true)
  const [ search, setSearch ] = React.useState(null)
  const [ searchResults, setSearchResults ] = React.useState(false)
  const [ errors, setErrors ] = React.useState(null)

  const url = `https://cors-anywhere.herokuapp.com/https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&keywords=${search}&RESPONSE-DATA-FORMAT=JSON`

  async function fetchData() {
    setIsLoading(true)
    const res = await fetch(url);
    res
      .json()
      .then(res => {
        console.log('response', res.findItemsByKeywordsResponse[0])
        setSearchResults(res.findItemsByKeywordsResponse[0].searchResult[0].item)
        if (res.findItemsByKeywordsResponse[0].searchResult[0].item.length > 0) {
          setIsLoading(false)
        } else {
          setErrors("couldn't find anything")
        }
      })
      .catch(err => setErrors(err));
  }

  React.useEffect(()=>{
    console.log('serching', search)
     fetchData() 
  },[search])

  return (
    <div className="Gallery">
      <div className="Gallery__title">Ebay Search Exercise</div>
      <SearchBar setSearch={setSearch} />
      {!isLoading ?  <SearchResultsList searchResults={searchResults} isLoading={isLoading} /> : "loading"}
    </div>
  );
}

export default Gallery;
