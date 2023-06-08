import { useEffect, useState } from 'react';
import { useCampaigns } from '../../context/CompaingsContext';
import { useFilterOption } from '../../context/FilterContext';
import DateFilter from '../DateFilter/DateFilter';
import SearchInput from '../SearchInput/SearchInput';
import Table from '../Table/Table';
import './Campaign.scss';

type Props = {};

const Campaign = (props: Props) => {
  const { filterOption, onValueChange: onFilterChange } = useFilterOption();
  const campaignsData = useCampaigns();
  const [tableData, setTableData] = useState(campaignsData);
  const handleSearch = (searchKey: string) => {
    const searchResult = campaignsData.filter((c) =>
      c.name.toLowerCase().includes(searchKey.toLocaleLowerCase())
    );
    setTableData(searchResult);
  };
  const handleFilterByDate = (startDate: string, endDate: string) => {
    const searchResult = campaignsData.filter((c) => {
      const filterStartDate = new Date(startDate);
      const filterEndDate = new Date(endDate);
      const campaignStartDateTime = new Date(c.startDate);
      const campaignEndTime = new Date(c.endDate);
      const isAvailable =
        campaignStartDateTime >= filterStartDate &&
        campaignEndTime <= filterEndDate;
      return isAvailable;
    });
    setTableData(searchResult);
  };

  useEffect(() => {
    setTableData(campaignsData);
  }, [campaignsData]);
  useEffect(() => {
    if (!filterOption.searchKey) {
      setTableData(campaignsData);
    }
  }, [filterOption.searchKey]);
  useEffect(() => {
    if (filterOption.startDate && filterOption.endDate) {
      handleFilterByDate(filterOption.startDate, filterOption.endDate);
    }
    if (!filterOption.startDate || !filterOption.endDate) {
      setTableData(campaignsData);
    }
  }, [filterOption.startDate, filterOption.endDate]);
  return (
    <section className="campaign">
      <article className="campaign__filter">
        <DateFilter
          startDate={filterOption.startDate}
          endDate={filterOption.endDate}
          onChange={onFilterChange}
        />
        <SearchInput
          value={filterOption.searchKey}
          onValueChange={(key) => onFilterChange('searchKey', key)}
          onSearch={handleSearch}
        />
      </article>
      <Table data={tableData} />
    </section>
  );
};

export default Campaign;
