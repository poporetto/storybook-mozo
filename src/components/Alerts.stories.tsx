import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Alerts',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Contextual feedback messages. Use `.alert` with variant classes (e.g. `.alert-primary`). Optional dismiss with the alert JavaScript plugin. [Bootstrap Alerts](https://getbootstrap.com/docs/5.3/components/alerts/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Variants: Story = {
  render: () => (
    <div className="d-flex flex-column gap-2">
      <div className="alert alert-primary" role="alert">A simple primary alert.</div>
      <div className="alert alert-secondary" role="alert">A simple secondary alert.</div>
      <div className="alert alert-success" role="alert">A simple success alert.</div>
      <div className="alert alert-danger" role="alert">A simple danger alert.</div>
      <div className="alert alert-warning" role="alert">A simple warning alert.</div>
      <div className="alert alert-info" role="alert">A simple info alert.</div>
      <div className="alert alert-light" role="alert">A simple light alert.</div>
      <div className="alert alert-dark" role="alert">A simple dark alert.</div>
    </div>
  ),
};

export const WithLink: Story = {
  render: () => (
    <div className="alert alert-primary" role="alert">
      A simple primary alert with{' '}
      <a href="#" className="alert-link">an example link</a>.
    </div>
  ),
};

export const WithHeading: Story = {
  render: () => (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message.</p>
      <hr />
      <p className="mb-0">Whenever you need to, use margin utilities for spacing.</p>
    </div>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Dismissible!</strong> Click the button to close (requires Bootstrap JS).
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  ),
};
