import { useState } from 'react';
import './SearchInput.scss';

interface IProps {
  name?: string;
  placeholder?: string;
  searchText?: string;
  onSearch?: (searchedKey: string) => void;
  onValueChange?: (searchedKey: string) => void;
}

const SearchInput: React.FC<IProps> = ({
  name = 'search',
  placeholder = 'Search...',
  searchText = 'Search',
  onValueChange,
  onSearch,
}) => {
  const [searchKey, setSearchKey] = useState('');
  return (
    <div className="search-input" data-testid="search-input">
      <input
        type="search"
        placeholder={placeholder}
        className="search-input__field"
        name={name}
        id={name}
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
          onValueChange && onValueChange(e.target.value);
        }}
      />
      <button
        className="search-input__cta"
        type="button"
        onClick={(e) => {
          if (searchKey.trim().length > 0 && onSearch) {
            onSearch(searchKey);
          }
        }}
        disabled={searchKey.trim().length === 0}
      >
        {searchText}
      </button>
    </div>
  );
};
export default SearchInput;
