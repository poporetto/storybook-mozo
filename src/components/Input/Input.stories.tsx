import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Mozo/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'lg'] },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'name@example.com',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Password',
    type: 'password',
    hint: 'We\'ll never share your details with anyone else.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Username',
    error: 'Please choose a username.',
    defaultValue: 'short',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Input label="Small" size="sm" placeholder="Small" />
      <Input label="Default" placeholder="Default" />
      <Input label="Large" size="lg" placeholder="Large" />
    </div>
  ),
}
