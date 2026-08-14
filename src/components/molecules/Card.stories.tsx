import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Cognitive Behavioral Coaching',
    description: 'Reprogram your mindset to overcome limiting beliefs and achieve your full potential.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Neuro-Linguistic Programming',
    description: 'Master the language of your mind to create the life you desire. Transform your internal dialogue.',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Person meditating outdoors',
  },
};

export const WithAction: Story = {
  args: {
    ...WithImage.args,
    actionLabel: 'Learn More',
    onActionClick: () => alert('Action clicked!'),
  },
};
