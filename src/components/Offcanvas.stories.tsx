import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Offcanvas',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Sidebar panel that slides in. Use `.offcanvas`, `.offcanvas-header`, `.offcanvas-body`. Placement: start, end, top, bottom. Requires Bootstrap’s offcanvas JavaScript. [Bootstrap Offcanvas](https://getbootstrap.com/docs/5.3/components/offcanvas/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <p>Content for the offcanvas. Use a button with <code>data-bs-toggle="offcanvas"</code> to open.</p>
      </div>
    </div>
  ),
};

export const Placement: Story = {
  render: () => (
    <>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasStart">
        <div className="offcanvas-header"><h5 className="offcanvas-title">Start</h5><button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button></div>
        <div className="offcanvas-body">Slides in from the start (left).</div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasEnd">
        <div className="offcanvas-header"><h5 className="offcanvas-title">End</h5><button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button></div>
        <div className="offcanvas-body">Slides in from the end (right).</div>
      </div>
      <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop">
        <div className="offcanvas-header"><h5 className="offcanvas-title">Top</h5><button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button></div>
        <div className="offcanvas-body">Slides in from the top.</div>
      </div>
      <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom">
        <div className="offcanvas-header"><h5 className="offcanvas-title">Bottom</h5><button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button></div>
        <div className="offcanvas-body">Slides in from the bottom.</div>
      </div>
    </>
  ),
};
