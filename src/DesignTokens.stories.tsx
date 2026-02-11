import type { Meta, StoryObj } from '@storybook/react'
import { tokens } from './design-tokens'

const meta = {
  title: 'Mozo/Design Tokens',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Colors: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3" style={{ width: 320 }}>
      <div>
        <div className="small text-body-secondary mb-1">Primary</div>
        <div
          className="rounded border"
          style={{
            width: '100%',
            height: 48,
            backgroundColor: tokens.color.primary,
          }}
        />
        <code className="small">{tokens.color.primary}</code>
      </div>
      <div>
        <div className="small text-body-secondary mb-1">Primary emphasis (darker)</div>
        <div
          className="rounded border"
          style={{
            width: '100%',
            height: 48,
            backgroundColor: tokens.color.primaryEmphasis,
          }}
        />
        <code className="small">{tokens.color.primaryEmphasis}</code>
      </div>
      <div>
        <div className="small text-body-secondary mb-1">Primary subtle background</div>
        <div
          className="rounded border"
          style={{
            width: '100%',
            height: 48,
            backgroundColor: tokens.color.primaryBgSubtle,
          }}
        />
        <code className="small">{tokens.color.primaryBgSubtle}</code>
      </div>
    </div>
  ),
}

export const Typography: Story = {
  render: () => (
    <div className="d-flex flex-column gap-2">
      <p style={{ fontFamily: tokens.typography.fontFamily }}>
        Body: The quick brown fox jumps over the lazy dog.
      </p>
      <p className="fw-medium" style={{ fontFamily: tokens.typography.fontFamily }}>
        Medium: The quick brown fox jumps over the lazy dog.
      </p>
      <p className="fw-bold" style={{ fontFamily: tokens.typography.fontFamily }}>
        Bold: The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  ),
}
