import React from 'react';

function Search({handleInput,searchResult}){
    return(
        <section className="searchbox-wrap">
            <input type="text" 
            placeholder="Search for Movie.." 
            className="searchbox" 
            onChange={handleInput}
            onKeyPress={searchResult}
            />
            </section>
    );

}
export default Search