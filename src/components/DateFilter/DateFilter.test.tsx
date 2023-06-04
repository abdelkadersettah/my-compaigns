import { render, screen } from '@testing-library/react';
import DateFilter from './DateFilter';

describe('DateFilter', () => {
  const testProps = {
    startDate: '',
    endDate: '',
    onChange: jest.fn(),
  };
  test('should render the DateFilter ', () => {
    render(<DateFilter {...testProps} />);
    const dateFilterContainer = screen.getByTestId('DateFilter');
    expect(dateFilterContainer).toBeInTheDocument();
  });
  test('should render the startDate and endDate input ', () => {
    render(<DateFilter {...testProps} />);
    const startDateInput = screen.getByPlaceholderText('Start date');
    const endDateInput = screen.getByPlaceholderText('End date');
    expect(startDateInput).toBeInTheDocument();
    expect(endDateInput).toBeInTheDocument();
  });
  test('should render the startDate and endDate with empty value ', () => {
    render(<DateFilter {...testProps} />);
    const dateFilterContainer = screen.getByTestId('DateFilter');

    const startDateInput = dateFilterContainer.querySelector(
      'input[name="startDate"]'
    ) as HTMLInputElement;
    const endDateInput = dateFilterContainer.querySelector(
      'input[name="endDate"]'
    ) as HTMLInputElement;
    expect(startDateInput?.value).toBe('');
    expect(endDateInput?.value).toBe('');
  });
  test('should render the startDate and endDate values ', () => {
    const testProps = {
      startDate: '01/06/2022',
      endDate: '01/06/2023',
      onChange: jest.fn(),
    };
    render(<DateFilter {...testProps} />);
    const dateFilterContainer = screen.getByTestId('DateFilter');

    const startDateInput = dateFilterContainer.querySelector(
      'input[name="startDate"]'
    ) as HTMLInputElement;
    const endDateInput = dateFilterContainer.querySelector(
      'input[name="endDate"]'
    ) as HTMLInputElement;

    expect(startDateInput?.value).toBe('01/06/2022');
    expect(endDateInput?.value).toBe('01/06/2023');
  });
});
