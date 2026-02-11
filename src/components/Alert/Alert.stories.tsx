import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertHeading, AlertLink } from './Alert'

const meta = {
  title: 'Mozo/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'This is a primary alert with Mozo brand color — check it out!',
  },
}

export const WithHeading: Story = {
  render: () => (
    <Alert variant="primary">
      <AlertHeading>Well done!</AlertHeading>
      <p>You successfully read this important alert message from the Mozo design system.</p>
    </Alert>
  ),
}

export const WithLink: Story = {
  render: () => (
    <Alert variant="primary">
      This is a primary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click.
    </Alert>
  ),
}

export const Dismissible: Story = {
  render: function DismissibleAlert() {
    return (
      <Alert variant="warning" dismissible onDismiss={() => window.alert('Dismissed')}>
        You can close this alert by clicking the close button.
      </Alert>
    )
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="d-flex flex-column gap-2" style={{ width: 400 }}>
      <Alert variant="primary">Primary (Mozo brand)</Alert>
      <Alert variant="secondary">Secondary</Alert>
      <Alert variant="success">Success</Alert>
      <Alert variant="danger">Danger</Alert>
      <Alert variant="warning">Warning</Alert>
      <Alert variant="info">Info</Alert>
    </div>
  ),
}
