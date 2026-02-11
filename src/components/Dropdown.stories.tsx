import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Toggleable dropdown menus. Use `.dropdown`, `.dropdown-menu`, `.dropdown-item`. Requires Bootstrap’s dropdown JavaScript (and Popper). [Bootstrap Dropdown](https://getbootstrap.com/docs/5.3/components/dropdowns/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const SingleButton: Story = {
  render: () => (
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Primary</button>
        <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Action</a></li></ul>
      </div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Secondary</button>
        <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Action</a></li></ul>
      </div>
      <div className="dropdown">
        <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown">Success</button>
        <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Action</a></li></ul>
      </div>
      <div className="dropdown">
        <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown">Danger</button>
        <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Action</a></li></ul>
      </div>
    </div>
  ),
};

export const SplitButton: Story = {
  render: () => (
    <div className="btn-group">
      <button type="button" className="btn btn-danger">Action</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
      </ul>
    </div>
  ),
};
