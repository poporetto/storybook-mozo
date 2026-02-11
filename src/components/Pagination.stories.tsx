import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Pagination for navigating across pages. Use `.pagination` with `.page-item` and `.page-link`. [Bootstrap Pagination](https://getbootstrap.com/docs/5.3/components/pagination/)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active" aria-current="page"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="d-flex flex-column gap-2">
      <nav>
        <ul className="pagination pagination-lg">
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
        </ul>
      </nav>
      <nav>
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
        </ul>
      </nav>
      <nav>
        <ul className="pagination pagination-sm">
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
        </ul>
      </nav>
    </div>
  ),
};
