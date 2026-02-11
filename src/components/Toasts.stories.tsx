import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Toasts',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Lightweight notifications. Use `.toast`, `.toast-header`, `.toast-body`. Requires Bootstrap’s toast JavaScript. [Bootstrap Toasts](https://getbootstrap.com/docs/5.3/components/toasts/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <div className="toast" role="alert">
      <div className="toast-header">
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">Hello, world! This is a toast message.</div>
    </div>
  ),
};

export const Live: Story = {
  render: () => (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
      <div id="liveToast" className="toast" role="alert">
        <div className="toast-header">
          <strong className="me-auto">Notification</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">Toast body. Use JS to show this.</div>
      </div>
    </div>
  ),
};

export const Stacking: Story = {
  render: () => (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div className="toast" role="alert">
        <div className="toast-header">
          <strong className="me-auto">First toast</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div className="toast-body">First toast body.</div>
      </div>
      <div className="toast" role="alert">
        <div className="toast-header">
          <strong className="me-auto">Second toast</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div className="toast-body">Second toast body.</div>
      </div>
    </div>
  ),
};
