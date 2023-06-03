import { CampaignsContextProvider } from './CompaingsContext';
import { FilterContextProvider } from './FilterContext';

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TableProvider = ({ children }: ProviderProps) => {
  return (
    <FilterContextProvider>
      <CampaignsContextProvider>{children}</CampaignsContextProvider>
    </FilterContextProvider>
  );
};
