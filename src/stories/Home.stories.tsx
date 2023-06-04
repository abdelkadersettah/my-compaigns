import { Meta, StoryObj } from '@storybook/react';
import { Home } from '../pages';
import '../styles/index.scss';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
