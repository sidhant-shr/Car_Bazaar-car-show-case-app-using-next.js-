"use client";
import {SearchManufacturer} from "./";
import { useState } from "react";
const SearchBar = () => {
    const handleSearch = () => {}
    const [Manufacturer, setManufacturer] = useState('');
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searhcbar__item">
            <SearchManufacturer
                Manufacturer={Manufacturer}
                setManufacturer={ setManufacturer }
            />

        </div>


    </form>
  )
}

export default SearchBar
