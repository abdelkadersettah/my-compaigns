import { createContext, useContext, useEffect, useState } from 'react';

import { campaignsDto } from '../model/campaignsDto';

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}
export interface CampaignsContextProps {
  campaignsDto: [] | campaignsDto[];
}
const CampaignsContext = createContext<campaignsDto[] | []>([]);
export const CampaignsContextProvider = ({ children }: ProviderProps) => {
  const [campaignsData, setCampaignsData] = useState<campaignsDto[] | []>([]);
  async function fetchCampaigns() {
    const data: campaignsDto[] = await fetch('campaignsData.JSON', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((res) => res.json());
    const cleanedData = data.filter(
      (d) => new Date(d?.startDate).getTime() < new Date(d?.endDate).getTime()
    );
    setCampaignsData(cleanedData);
  }

  useEffect(() => {
    fetchCampaigns();
  }, []);
  return (
    <CampaignsContext.Provider value={campaignsData}>
      {children}
    </CampaignsContext.Provider>
  );
};
export function useCampaigns() {
  return useContext(CampaignsContext);
}
