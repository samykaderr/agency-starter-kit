import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Sections/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    headline: 'Transform Your Mindset. Elevate Your Life.',
    subheadline: 'Unlock your full potential with our proven neuro-linguistic programming coaching techniques tailored for high achievers.',
    primaryActionLabel: 'Book Your Free Consultation',
    onPrimaryActionClick: () => alert('Primary Action!'),
    secondaryActionLabel: 'Explore Our Services',
    onSecondaryActionClick: () => alert('Secondary Action!'),
  },
};

export const WithBackground: Story = {
  args: {
    ...Default.args,
    backgroundImageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000',
  },
};
