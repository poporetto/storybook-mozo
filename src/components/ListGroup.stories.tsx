import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/List Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Flexible list component. Use `.list-group` and `.list-group-item`. Supports active, disabled, and contextual variants. [Bootstrap List group](https://getbootstrap.com/docs/5.3/components/list-group/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <ul className="list-group" style={{ maxWidth: '20rem' }}>
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  ),
};

export const ActiveAndDisabled: Story = {
  render: () => (
    <ul className="list-group" style={{ maxWidth: '20rem' }}>
      <li className="list-group-item active" aria-current="true">Active item</li>
      <li className="list-group-item">Item</li>
      <li className="list-group-item disabled">Disabled item</li>
      <li className="list-group-item">Item</li>
    </ul>
  ),
};

export const Variants: Story = {
  render: () => (
    <ul className="list-group" style={{ maxWidth: '20rem' }}>
      <li className="list-group-item">Default</li>
      <li className="list-group-item list-group-item-primary">Primary</li>
      <li className="list-group-item list-group-item-secondary">Secondary</li>
      <li className="list-group-item list-group-item-success">Success</li>
      <li className="list-group-item list-group-item-danger">Danger</li>
      <li className="list-group-item list-group-item-warning">Warning</li>
      <li className="list-group-item list-group-item-info">Info</li>
      <li className="list-group-item list-group-item-light">Light</li>
      <li className="list-group-item list-group-item-dark">Dark</li>
    </ul>
  ),
};

export const WithLinks: Story = {
  render: () => (
    <div className="list-group" style={{ maxWidth: '20rem' }}>
      <a href="#" className="list-group-item list-group-item-action active">Active link</a>
      <a href="#" className="list-group-item list-group-item-action">Link</a>
      <a href="#" className="list-group-item list-group-item-action">Link</a>
      <a href="#" className="list-group-item list-group-item-action disabled">Disabled link</a>
    </div>
  ),
};
