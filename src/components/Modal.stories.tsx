import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dialog for content and forms. Use `.modal`, `.modal-dialog`, `.modal-content`, `.modal-header`, `.modal-body`, `.modal-footer`. Requires Bootstrap’s modal JavaScript. [Bootstrap Modal](https://getbootstrap.com/docs/5.3/components/modal/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Modal body text goes here.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const StaticBackdrop: Story = {
  render: () => (
    <div className="modal fade" id="staticModal" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticModalLabel">Static backdrop</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Clicking outside will not close this modal.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const WithTrigger: Story = {
  render: () => (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#triggerModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="triggerModal" tabIndex={-1} aria-labelledby="triggerModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="triggerModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Click the button above to open this modal (Bootstrap JS required).</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <div className="modal fade" id="smallModal" tabIndex={-1}>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-body">Small modal.</div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="largeModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">Large modal.</div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="xlModal" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body">Extra large modal.</div>
          </div>
        </div>
      </div>
    </>
  ),
};
