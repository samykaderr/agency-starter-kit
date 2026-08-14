import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Book a Session',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Learn More',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    label: 'View Services',
    variant: 'outline',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Get Started Today',
    variant: 'primary',
    size: 'large',
  },
};
