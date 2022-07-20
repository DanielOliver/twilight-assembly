import type { NextPage } from 'next'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout></Layout>
      <Container>
        <p>I strongly hope and expect there will be something here someday.</p>
      </Container>

      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Home
