import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Col, Form } from 'react-bootstrap'
import Layout from '../components/layout'

const DynamicMap = dynamic(() => import('../components/mapviewer'), {
    ssr: false
})

const Map: NextPage = () => {
    return (
        <div className='container-fluid fill-height-container'>
            <Layout></Layout>
            <div className='container'>
                <div className='row'>
                    <Form.Label column sm="2" htmlFor="inputPassword5">TTS string</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            id="ttsString"
                            aria-describedby="ttsStringHelpBlock"
                            onChange={(ev) => {
                                console.log(ev.target.value)
                            }}
                        />
                        <Form.Text id="ttsStringHelpBlock" muted>
                            The TTS map string can go here.
                        </Form.Text>
                    </Col>
                </div>
            </div>
            <DynamicMap />
        </div >
    )
}

export default Map
