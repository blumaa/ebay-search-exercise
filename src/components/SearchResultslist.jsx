import React from "react";

const ListEntry = (item) => {
  return (
    <div key={item.entry.itemId[0]} className="SearchResultslist__entry">
      <div>{item.entry.title[0]}</div>
      <div></div>
    </div>
  );
};

const SearchResultsList = ({ searchResults, isLoading }) => {

  return (
    <div className="SearchResultslist">
      <div className="SearchResultslist__header">
        <div>Item Name</div>
        <div>Item Price</div>
      </div>
      <div className="SearchResultslist__list">
        {!isLoading &&
          searchResults.map((entry) => <ListEntry entry={entry} />)}
      </div>
    </div>
  );
};

export default SearchResultsList;
