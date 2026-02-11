import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Indicate current page location within a navigational hierarchy. Use `.breadcrumb` and `.breadcrumb-item`. [Bootstrap Breadcrumb](https://getbootstrap.com/docs/5.3/components/breadcrumb/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  ),
};
