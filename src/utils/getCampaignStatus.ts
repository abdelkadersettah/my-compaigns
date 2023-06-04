import { campaignsDto } from '../model/campaignsDto';

export const getCampaignStatus = (rowData: campaignsDto) => {
  const startDate = rowData.startDate;
  const endDate = rowData.endDate;
  const starDateTime = new Date(startDate)?.getTime();
  const endDateTime = new Date(endDate)?.getTime();
  const todayTime = new Date().getTime();
  const isActive = todayTime > starDateTime && todayTime <= endDateTime;

  return isActive ? 'Active' : 'Inactive';
};
