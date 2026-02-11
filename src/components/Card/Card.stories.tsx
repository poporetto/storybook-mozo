import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardLink,
} from './Card'
import { Button } from '../Button'

const meta = {
  title: 'Mozo/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Supporting subtitle</CardSubtitle>
        <CardText>
          Some quick example text for the card. Mozo helps you make your money count for more.
        </CardText>
        <Button variant="primary">Go somewhere</Button>
      </CardBody>
    </Card>
  ),
}

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card style={{ width: '18rem' }}>
      <CardHeader>Featured</CardHeader>
      <CardBody>
        <CardTitle>Special title</CardTitle>
        <CardText>Content for the card body.</CardText>
        <CardLink href="#">Card link</CardLink>
        <CardLink href="#">Another link</CardLink>
      </CardBody>
      <CardFooter className="text-body-secondary">Last updated 2 mins ago</CardFooter>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card style={{ width: '18rem' }}>
      <CardImg
        src="https://placehold.co/400x200/11322c/ffffff?text=Mozo"
        alt="Card cap"
      />
      <CardBody>
        <CardTitle>Card with image</CardTitle>
        <CardText>Image above and content below, using Mozo primary as placeholder.</CardText>
        <Button variant="primary" size="sm">Action</Button>
      </CardBody>
    </Card>
  ),
}
