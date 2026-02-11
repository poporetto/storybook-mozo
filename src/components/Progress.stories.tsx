import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Progress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Progress bars for completion or loading. Use `.progress` and `.progress-bar`. Supports striped and animated variants. [Bootstrap Progress](https://getbootstrap.com/docs/5.3/components/progress/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="progress" style={{ height: '1.5rem' }}>
      <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="d-flex flex-column gap-2">
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }}>25%</div>
      </div>
      <div className="progress">
        <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }}>50%</div>
      </div>
      <div className="progress">
        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }}>75%</div>
      </div>
      <div className="progress">
        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }}>100%</div>
      </div>
    </div>
  ),
};

export const Striped: Story = {
  render: () => (
    <div className="progress">
      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '60%' }}>60%</div>
    </div>
  ),
};

export const Animated: Story = {
  render: () => (
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '75%' }}>75%</div>
    </div>
  ),
};

export const MultipleBars: Story = {
  render: () => (
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ width: '15%' }}>15%</div>
      <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }}>30%</div>
      <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }}>20%</div>
    </div>
  ),
};
