import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const { key } = useParams();

  useEffect(() => {
    const debouncedSearch = setTimeout(() => {
      if (searchQuery !== '') {
        handleSearchSubmit();
      }
    }, 1000);

    return () => clearTimeout(debouncedSearch);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery === '') {
      setSearchResults(null);
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async () => {
    try {

      if (!isNaN(searchQuery)) {
        const responseCompany = await axios.get(`http://localhost:4000/api/search/company/${searchQuery}`);
        setSearchResults(responseCompany.data);
      } else if (searchQuery.startsWith("headline:")) {
        const headline = searchQuery.substring(9);
        const responseHeadline = await axios.get(`http://localhost:4000/api/search/headline/${headline}`);
        setSearchResults(responseHeadline.data);
      } else {
        const responseCompaniesName = await axios.get(`http://localhost:4000/api/search/companies/${searchQuery}`);
        setSearchResults(responseCompaniesName.data);
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <label>
        <div className="search-container">
          <label htmlFor="search-input">Search</label>
          <input type="text" value={searchQuery} className='input-box' placeholder="Searching..." onChange={handleSearchInputChange} />
        </div>
      </label>
      {searchResults && (
        <div className='result'>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div >
                <h3>{result.companyId}</h3>
                <h3>{result.headline}</h3>
                <h3>{result.companies}</h3>

              </div>

            </div>
          ))}
        </div>
      )}
    </form>
  );
}

export default SearchBar;