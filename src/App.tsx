import { Button, Card, CardBody, CardTitle, CardText } from './components'

export default function App() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Mozo Design System</h1>
      <Card style={{ maxWidth: 360 }}>
        <CardBody>
          <CardTitle>Welcome</CardTitle>
          <CardText>
            Run <code>npm run storybook</code> to explore all components.
          </CardText>
          <Button variant="primary">Get started</Button>
        </CardBody>
      </Card>
    </div>
  )
}
