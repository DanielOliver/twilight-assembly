import type { NextPage } from 'next'
import MapViewer from '../components/mapviewer'
import Layout from '../components/layout'

const Map: NextPage = () => {
    return (
        <div className='fill-height-container'>
            <Layout></Layout>
            <MapViewer/>
        </div>
    )
}

export default Map
