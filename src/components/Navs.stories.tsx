import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Navs & Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Navigation components: base nav (`.nav`), tabs (`.nav-tabs`), pills (`.nav-pills`). Use with the Tab JavaScript plugin for toggling content. [Bootstrap Navs](https://getbootstrap.com/docs/5.3/components/navs-tabs/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const BaseNav: Story = {
  render: () => (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </nav>
  ),
};

export const Tabs: Story = {
  render: () => (
    <div>
      <ul className="nav nav-tabs" id="navTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">Home</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab">Profile</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab">Contact</button>
        </li>
      </ul>
      <div className="tab-content p-3 border border-top-0 rounded-bottom" id="navTabsContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel">Home tab content.</div>
        <div className="tab-pane fade" id="profile" role="tabpanel">Profile tab content.</div>
        <div className="tab-pane fade" id="contact" role="tabpanel">Contact tab content.</div>
      </div>
    </div>
  ),
};

export const Pills: Story = {
  render: () => (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  ),
};

export const VerticalPills: Story = {
  render: () => (
    <div className="d-flex align-items-start">
      <ul className="nav flex-column nav-pills me-3">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <div className="p-3 border rounded">Content for the selected pill.</div>
    </div>
  ),
};
