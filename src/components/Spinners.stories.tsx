import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Spinners',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Loading indicators. Use `.spinner-border` or `.spinner-grow` with optional color and size utilities. [Bootstrap Spinners](https://getbootstrap.com/docs/5.3/components/spinners/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Border: Story = {
  render: () => (
    <div className="d-flex gap-3 align-items-center flex-wrap">
      <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border text-success" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border text-warning" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border text-info" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border text-light" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border text-dark" role="status"><span className="visually-hidden">Loading...</span></div>
    </div>
  ),
};

export const Grow: Story = {
  render: () => (
    <div className="d-flex gap-3 align-items-center flex-wrap">
      <div className="spinner-grow" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-grow text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-grow text-success" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-grow text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="d-flex gap-3 align-items-center flex-wrap">
      <div className="spinner-border spinner-border-sm" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-grow spinner-grow-sm" role="status"><span className="visually-hidden">Loading...</span></div>
      <div className="spinner-grow" role="status"><span className="visually-hidden">Loading...</span></div>
    </div>
  ),
};
