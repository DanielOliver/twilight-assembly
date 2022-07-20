import type { NextPage } from 'next'
import { Container } from 'react-bootstrap'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout></Layout>
      <Container>
        <p>I strongly hope and expect there will be something here someday.</p>
      </Container>
    </>
  )
}

export default Home
