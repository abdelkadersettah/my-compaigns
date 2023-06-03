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
    <article className="date-filter">
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
          onChange={(SelectedDate) => {
            if (SelectedDate) {
              onChange('startDate', SelectedDate.toLocaleDateString('FR'));
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
          minDate={startDate ? convertStringToDate(startDate) : null}
          isClearable={true}
          onChange={(SelectedDate) => {
            if (SelectedDate) {
              onChange('endDate', SelectedDate?.toLocaleDateString('FR'));
            } else {
              onChange('endDate', '');
            }
          }}
        />
        {endDate && (
          <AiFillCloseCircle
            className="date-filter__clear"
            onClick={(e) => onChange('endDate', '')}
          />
        )}
      </article>
    </article>
  );
};

export default DateFilter;
