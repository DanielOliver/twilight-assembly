import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import Layout from '../components/layout'

const DynamicMap = dynamic(() => import('../components/mapviewer'), {
    ssr: false
})

const Map: NextPage = () => {
    const [ttsString, setTtsString] = useState('24 33 30 26 41 36 24 42 37 44 34 49 31 50 38 39 40 21 0 28 19 0 46 25 0 45 48 0 29 22 0 43 47 0 32 20');
    const [invalidTtsBox, setInvalidTtsBox] = useState(false)

    const setTtsStringValue = (value: string) => {
        if (value.split(' ').length === 36) {
            setTtsString(value)
            setInvalidTtsBox(false)
        }
        else if(value.trim().length === 0) {
            setInvalidTtsBox(false)
        } else {
            setInvalidTtsBox(true)
        }
    }

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
                            isInvalid={invalidTtsBox}
                            onChange={(ev) => {
                                console.log(ev.target.value)
                                setTtsStringValue(ev.target.value)
                            }}
                        />
                        <Form.Text id="ttsStringHelpBlock" muted>
                            The TTS map string can go here.
                        </Form.Text>
                    </Col>
                </div>
            </div>
            <DynamicMap ttsString={ttsString} />
        </div >
    )
}

export default Map
