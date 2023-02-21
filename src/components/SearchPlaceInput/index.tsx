import React, { useState } from "react";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";

import { Button } from "components/UI";
import s from "./searchPlaceInput.module.scss";

interface Props {}

//сюди в прожакшені поьрібно додати useDenounce

export const SearchPlaceInput: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    // Mock API call to get suggestions
    setSuggestions([
      `${event.target.value} suggestion 1`,
      `${event.target.value} suggestion 2`,
      `${event.target.value} suggestion 3`,
    ]);

    if (showSuggestions) {
      setShowSuggestions(false);
    }
  };

  const handleButtonClick = () => {
    setShowSuggestions(!showSuggestions);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={s.searchInput}>
      <LocationIcon className={s.searchInputIcon} />
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Find the place to help"
        className={s.input}
      />

      <Button
        className={s.searchInputBtn}
        laout="primary"
        onClick={handleButtonClick}
      >
        {!isLoading ? "Search" : "Loading.."}
      </Button>

      {showSuggestions && !isLoading && suggestions.length > 0 && (
        <ul className={s.suggestions}>
          {suggestions.map((suggestion, index) => (
            <li
              onClick={() => setShowSuggestions(false)}
              key={index}
              className={s.suggestion}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
