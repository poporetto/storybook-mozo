import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Forms',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Form controls, labels, validation, and layout. Use `.form-control`, `.form-select`, `.form-check`, `.form-label`, and layout utilities. [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const TextInputs: Story = {
  render: () => (
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" placeholder="name@example.com" />
      <label htmlFor="password" className="form-label mt-2">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Password" />
    </div>
  ),
};

export const Select: Story = {
  render: () => (
    <div className="mb-3">
      <label htmlFor="select" className="form-label">Select</label>
      <select className="form-select" id="select">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  ),
};

export const Textarea: Story = {
  render: () => (
    <div className="mb-3">
      <label htmlFor="textarea" className="form-label">Example textarea</label>
      <textarea className="form-control" id="textarea" rows={3} placeholder="Content here..." defaultValue="" />
    </div>
  ),
};

export const ChecksAndRadios: Story = {
  render: () => (
    <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="check1" />
        <label className="form-check-label" htmlFor="check1">Default checkbox</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="check2" defaultChecked />
        <label className="form-check-label" htmlFor="check2">Checked checkbox</label>
      </div>
      <div className="form-check mt-2">
        <input className="form-check-input" type="radio" name="radios" id="radio1" />
        <label className="form-check-label" htmlFor="radio1">Default radio</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="radios" id="radio2" defaultChecked />
        <label className="form-check-label" htmlFor="radio2">Checked radio</label>
      </div>
    </div>
  ),
};

export const InputGroups: Story = {
  render: () => (
    <div className="d-flex flex-column gap-2" style={{ maxWidth: '20rem' }}>
      <div className="input-group">
        <span className="input-group-text">@</span>
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Recipient" />
        <span className="input-group-text">@example.com</span>
      </div>
      <div className="input-group">
        <span className="input-group-text">$</span>
        <input type="text" className="form-control" />
        <span className="input-group-text">.00</span>
      </div>
    </div>
  ),
};

export const Validation: Story = {
  render: () => (
    <form className="needs-validation" noValidate>
      <div className="mb-3">
        <label htmlFor="validEmail" className="form-label">Email</label>
        <input type="email" className="form-control is-valid" id="validEmail" defaultValue="test@example.com" />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="mb-3">
        <label htmlFor="invalidEmail" className="form-label">Invalid email</label>
        <input type="email" className="form-control is-invalid" id="invalidEmail" defaultValue="invalid" />
        <div className="invalid-feedback">Please provide a valid email.</div>
      </div>
    </form>
  ),
};
