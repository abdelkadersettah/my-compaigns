import { useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FilterDto } from '../../model/filterDto';
import { convertStringToDate } from '../../utils/convertStringToDate';
import './DateFilter.scss';

type Props = {
  startDate: string | undefined;
  endDate: string | undefined;
  onChange: (fieldName: keyof FilterDto, value: string) => void;
};

const DateFilter = ({ endDate, startDate, onChange }: Props) => {
  useEffect(() => {
    if (!startDate && endDate) {
      onChange('endDate', '');
    }
  }, [endDate, startDate]);
  return (
    <article className="date-filter" data-testid="DateFilter">
      <label className="date-filter__label" htmlFor="startDate">
        Filter By date
      </label>
      <article className="date-filter__fields">
        <ReactDatePicker
          placeholderText="Start date"
          name="startDate"
          id="startDate"
          value={startDate}
          autoComplete="off"
          withPortal
          showMonthDropdown
          showYearDropdown
          onChange={(SelectedDate) => {
            if (SelectedDate) {
              onChange(
                'startDate',
                SelectedDate.toLocaleDateString('en-us', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })
              );
            } else {
              onChange('startDate', '');
            }
          }}
        />
        {startDate && (
          <AiFillCloseCircle
            className="date-filter__clear"
            onClick={(e) => {
              onChange('startDate', '');
            }}
          />
        )}
      </article>
      <article className="date-filter__fields">
        <ReactDatePicker
          placeholderText="End date"
          name="endDate"
          id="endDate"
          autoComplete="off"
          value={startDate ? endDate : undefined}
          disabled={!startDate}
          withPortal
          showMonthDropdown
          showYearDropdown
          minDate={startDate ? convertStringToDate(startDate) : null}
          isClearable={true}
          onChange={(SelectedDate) => {
            if (SelectedDate) {
              onChange(
                'endDate',
                SelectedDate?.toLocaleDateString('en-us', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })
              );
            } else {
              onChange('endDate', '');
            }
          }}
        />
        {endDate && (
          <AiFillCloseCircle
            className="date-filter__clear"
            onClick={(e) => onChange('endDate', '')}
            data-testid="clearEndDate"
          />
        )}
      </article>
    </article>
  );
};

export default DateFilter;
