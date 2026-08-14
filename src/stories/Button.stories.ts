import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Button } from './Button';

const meta = {
  component: Button,
  tags: ['ai-generated'], // vitest passed
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { primary: true, label: 'Click me' },
};

export const Secondary: Story = {
  args: { label: 'Cancel' },
};

export const Large: Story = {
  args: { primary: true, size: 'large', label: 'Large' },
};

export const Small: Story = {
  args: { size: 'small', label: 'Small' },
};

// CssCheck: proves button.css loaded — storybook-button--primary sets background-color: #555ab9
export const CssCheck: Story = {
  args: { primary: true, label: 'Submit' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /submit/i });
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(85, 90, 185)');
  },
};
