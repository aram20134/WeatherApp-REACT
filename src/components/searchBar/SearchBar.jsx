import React, { useEffect, useState } from 'react'
import cls from './SearchBar.module.css';
import searchPNG from './search.png';
import SelectSearch from '../selectSearch/SelectSearch';

export default function SearchBar({cities, setCity, CurrentCity, setWeatherLoaded}) {
  const [sortedSearch, setSortedSearch] = useState([])
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.length > 0) {
      setSortedSearch (cities.filter((city) => city.city.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
    } else {
      setSortedSearch([])
    }
  }, [search])

  useEffect(() => {
    if (sortedSearch.length > 4) {
      setSortedSearch(sortedSearch.splice(0, (sortedSearch.length - (sortedSearch.length - 4))))
    }
  }, [sortedSearch])
  
  
  return (
    <div className={cls.divSearchBar}>
        <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Найти место' type='text' className={cls.SearchBar}  />
        <img src={searchPNG} className={cls.pngSearchBar} />
        <div className={cls.selectSearchBar}>
        { sortedSearch !== 0 ? sortedSearch.map((city) => <SelectSearch setWeatherLoaded={setWeatherLoaded} setSearch={setSearch} setCity={setCity} key={city.city} city={city} />) : ''}
        </div>
    </div>
  )
}
