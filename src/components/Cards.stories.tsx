import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Cards',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Flexible content containers with optional header, footer, and body. Use `.card`, `.card-body`, `.card-header`, `.card-footer`, and `.card-img-*`. [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <div className="card" style={{ maxWidth: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <div className="card" style={{ maxWidth: '18rem' }}>
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer text-body-secondary">2 days ago</div>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="card" style={{ maxWidth: '18rem' }}>
      <img src="https://placehold.co/400x200/6c757d/fff?text=Card+image" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      <div className="card text-bg-primary mb-0" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <p className="card-text">Primary card with custom background.</p>
        </div>
      </div>
      <div className="card text-bg-success mb-0" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <p className="card-text">Success card.</p>
        </div>
      </div>
      <div className="card text-bg-danger mb-0" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <p className="card-text">Danger card.</p>
        </div>
      </div>
    </div>
  ),
};

export const CardGroups: Story = {
  render: () => (
    <div className="card-group">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card one</h5>
          <p className="card-text">Content for the first card.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card two</h5>
          <p className="card-text">Content for the second card.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card three</h5>
          <p className="card-text">Content for the third card.</p>
        </div>
      </div>
    </div>
  ),
};
