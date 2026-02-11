import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Collapsible content panels. Use `.accordion` as the container and `.accordion-item`, `.accordion-header`, `.accordion-button`, `.accordion-collapse`, `.accordion-body`. Requires Bootstrap’s collapse JavaScript. [Bootstrap Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            This is the first item&apos;s accordion body. It is shown by default.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Content for the second accordion item.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Content for the third accordion item.
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Flush: Story = {
  render: () => (
    <div className="accordion accordion-flush" id="accordionFlush">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flushOne" aria-expanded="false" aria-controls="flushOne">
            Flush item #1
          </button>
        </h2>
        <div id="flushOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlush">
          <div className="accordion-body">Flush accordion has no outer border or background.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flushTwo" aria-expanded="false" aria-controls="flushTwo">
            Flush item #2
          </button>
        </h2>
        <div id="flushTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlush">
          <div className="accordion-body">Content for the second flush item.</div>
        </div>
      </div>
    </div>
  ),
};
