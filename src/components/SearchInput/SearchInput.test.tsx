import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  test('should render the Search input ', () => {
    render(<SearchInput />);
    const searchInputContainer = screen.getByTestId('search-input');
    const searchField = searchInputContainer.querySelector('input');
    expect(searchInputContainer).toBeInTheDocument();
    expect(searchField?.name).toBe('searchKey');
  });
  test('should render the Search button ', () => {
    render(<SearchInput />);
    const searchInputContainer = screen.getByTestId('search-input');
    const searchButton = searchInputContainer.querySelector('button');
    expect(searchButton).toBeInTheDocument();
    expect(searchButton?.type).toBe('button');
  });
  test('should render the Search button ', () => {
    render(<SearchInput />);
    const searchInputContainer = screen.getByTestId('search-input');
    const searchButton = searchInputContainer.querySelector('button');
    expect(searchButton).toBeInTheDocument();
    expect(searchButton?.type).toBe('button');
  });
  test('should disable the Search button if the value is search', () => {
    render(<SearchInput />);
    const searchInputContainer = screen.getByTestId('search-input');
    const searchButton = searchInputContainer.querySelector('button');
    expect(searchButton).toBeInTheDocument();
    expect(searchButton?.disabled).toBe(true);
  });
  test('should disable the Search button if the value of the input is empty', () => {
    render(<SearchInput />);
    const searchInputContainer = screen.getByTestId('search-input');
    const searchButton = searchInputContainer.querySelector('button');
    expect(searchButton).toBeInTheDocument();
    expect(searchButton?.disabled).toBe(true);
  });
  test('should enable the Search button if user write search key', () => {
    render(<SearchInput value="random text" />);
    const searchInputContainer = screen.getByTestId('search-input');
    const searchButton = searchInputContainer.querySelector('button');
    expect(searchButton?.disabled).toBe(false);
  });
  test('should fire on Search if the search button clicked', () => {
    render(
      <SearchInput
        onSearch={(searchedKey) => expect(searchedKey).toBe('random text')}
      />
    );
    const searchInputContainer = screen.getByTestId('search-input');
    const searchField = searchInputContainer.querySelector('input');
    const searchButton = searchInputContainer.querySelector('button');
    fireEvent.change(searchField as Element, {
      target: { value: 'random text' },
    });
    fireEvent.click(searchButton as Element);
  });
});
