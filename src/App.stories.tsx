import type { Meta, StoryObj } from '@storybook/react';

import App from './App';

const meta: Meta<typeof App> = {
  component: App,
  parameters: {
    percy: { skip: false }, // Ensures Percy takes snapshots for this story
  },
};

export default meta;
type Story = StoryObj<typeof App>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};