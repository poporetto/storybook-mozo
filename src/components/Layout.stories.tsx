import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/Grid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Bootstrap’s grid uses containers, rows (`.row`), and columns (`.col-*`, `.col-md-*`, etc.). [Bootstrap Grid](https://getbootstrap.com/docs/5.3/layout/grid/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BasicGrid: Story = {
  render: () => (
    <div className="container">
      <div className="row">
        <div className="col border p-3">col</div>
        <div className="col border p-3">col</div>
        <div className="col border p-3">col</div>
      </div>
      <div className="row mt-2">
        <div className="col border p-3">col</div>
        <div className="col-6 border p-3">col-6</div>
        <div className="col border p-3">col</div>
      </div>
    </div>
  ),
};

export const ResponsiveColumns: Story = {
  render: () => (
    <div className="container">
      <div className="row">
        <div className="col-md-4 border p-3">col-md-4</div>
        <div className="col-md-4 border p-3">col-md-4</div>
        <div className="col-md-4 border p-3">col-md-4</div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-lg-6 border p-3">col-12 col-lg-6</div>
        <div className="col-12 col-lg-6 border p-3">col-12 col-lg-6</div>
      </div>
    </div>
  ),
};

export const Containers: Story = {
  render: () => (
    <div>
      <div className="container border p-3 mb-2">.container (responsive max-width)</div>
      <div className="container-fluid border p-3">.container-fluid (full width)</div>
    </div>
  ),
};
