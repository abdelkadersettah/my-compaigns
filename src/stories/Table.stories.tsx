import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';

import { Table } from '../components';
import { campaignsDto } from '../model/campaignsDto';

const tableData: campaignsDto[] = [
  {
    id: 1,
    name: 'Divavu',
    startDate: '9/19/2017',
    endDate: '3/9/2018',
    budget: 88377,
  },
  {
    id: 2,
    name: 'Jaxspan',
    startDate: '11/21/2017',
    endDate: '2/21/2018',
    budget: 608715,
  },
  {
    id: 3,
    name: 'Miboo',
    startDate: '11/1/2017',
    endDate: '6/20/2017',
    budget: 239507,
  },
  {
    id: 4,
    name: 'Trilith',
    startDate: '8/25/2017',
    endDate: '11/30/2017',
    budget: 179838,
  },
  {
    id: 5,
    name: 'Layo',
    startDate: '11/28/2017',
    endDate: '3/10/2018',
    budget: 837850,
  },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      table: {
        id: { control: 'text' },
        name: { control: 'text' },
        startDate: { control: 'text' },
        endDate: { control: 'text' },
        budget: { control: 'number' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTable: Story = {
  args: {
    data: tableData,
  },
};
