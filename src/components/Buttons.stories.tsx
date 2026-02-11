import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Bootstrap’s custom button styles. Use the base class `.btn` and modifier classes (e.g. `.btn-primary`) for variants. Supports multiple sizes and states. [Bootstrap Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Variants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
      <button type="button" className="btn btn-outline-primary">Primary</button>
      <button type="button" className="btn btn-outline-secondary">Secondary</button>
      <button type="button" className="btn btn-outline-success">Success</button>
      <button type="button" className="btn btn-outline-danger">Danger</button>
      <button type="button" className="btn btn-outline-warning">Warning</button>
      <button type="button" className="btn btn-outline-info">Info</button>
      <button type="button" className="btn btn-outline-light">Light</button>
      <button type="button" className="btn btn-outline-dark">Dark</button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="d-flex flex-wrap align-items-center gap-2">
      <button type="button" className="btn btn-primary btn-lg">Large</button>
      <button type="button" className="btn btn-primary">Default</button>
      <button type="button" className="btn btn-primary btn-sm">Small</button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
      <button type="button" className="btn btn-primary" disabled>Primary disabled</button>
      <button type="button" className="btn btn-outline-secondary" disabled>Outline disabled</button>
      <a className="btn btn-primary disabled" href="#" aria-disabled="true">Link disabled</a>
    </div>
  ),
};

export const BlockButton: Story = {
  render: () => (
    <div className="d-grid gap-2">
      <button type="button" className="btn btn-primary">Block level button</button>
      <button type="button" className="btn btn-secondary">Block level button</button>
    </div>
  ),
};
