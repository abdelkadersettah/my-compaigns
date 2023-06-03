import { createContext, useContext, useState } from 'react';

import { FilterDto } from '../model/filterDto';

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}
export interface FilterContextProps {
  filterOption: FilterDto;
  onValueChange: (filterName: keyof FilterDto, value: string) => void;
}
const FilterContext = createContext({} as FilterContextProps);
export const FilterContextProvider = ({ children }: ProviderProps) => {
  const [filterOption, setFilterOption] = useState<FilterDto>({
    searchKey: '',
    startDate: undefined,
    endDate: undefined,
  });
  const onValueChange = (filterName: keyof FilterDto, value: string) => {
    setFilterOption({
      ...filterOption,
      [filterName]: value,
    });
  };

  return (
    <FilterContext.Provider value={{ filterOption, onValueChange }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterOption = () => {
  return useContext(FilterContext);
};
