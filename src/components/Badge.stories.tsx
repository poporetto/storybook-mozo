import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Small count and label components. Use `.badge` with background utilities (e.g. `.bg-primary`). Can be used in headings and buttons. [Bootstrap Badge](https://getbootstrap.com/docs/5.3/components/badge/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Variants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-1">
      <span className="badge text-bg-primary">Primary</span>
      <span className="badge text-bg-secondary">Secondary</span>
      <span className="badge text-bg-success">Success</span>
      <span className="badge text-bg-danger">Danger</span>
      <span className="badge text-bg-warning text-dark">Warning</span>
      <span className="badge text-bg-info text-dark">Info</span>
      <span className="badge text-bg-light text-dark">Light</span>
      <span className="badge text-bg-dark">Dark</span>
    </div>
  ),
};

export const RoundedPill: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-1">
      <span className="badge rounded-pill text-bg-primary">Primary</span>
      <span className="badge rounded-pill text-bg-secondary">Secondary</span>
      <span className="badge rounded-pill text-bg-success">Success</span>
    </div>
  ),
};

export const InHeadings: Story = {
  render: () => (
    <div>
      <h1>Example heading <span className="badge text-bg-secondary">New</span></h1>
      <h2>Example heading <span className="badge text-bg-secondary">New</span></h2>
      <h3>Example heading <span className="badge text-bg-secondary">New</span></h3>
    </div>
  ),
};

export const InButtons: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
      <button type="button" className="btn btn-primary">
        Notifications <span className="badge text-bg-light text-dark ms-1">4</span>
      </button>
      <button type="button" className="btn btn-outline-primary position-relative">
        Profile
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+</span>
      </button>
    </div>
  ),
};
