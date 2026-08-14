import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Header } from './Header';

const meta = {
  component: Header,
  tags: ['ai-generated'], // vitest passed
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {},
};

export const LoggedIn: Story = {
  args: { user: { name: 'Jane Doe' } },
  play: async ({ canvas }) => {
    // Verifies args.user.name appears as text and the logout button renders
    await expect(canvas.getByText(/jane doe/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: /log out/i })).toBeVisible();
  },
};
