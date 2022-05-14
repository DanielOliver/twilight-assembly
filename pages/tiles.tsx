import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Layout} from "../components/Layout";
import {getGameDataDictionary} from "../utils/twilight_assembly";
import {Card, CardGroup, Col, Container, ListGroup, Row} from "react-bootstrap";
import Image from "next/image";
import {Faction} from "../bindings/Faction";
import {Planet} from "../bindings/Planet";

const gameData = getGameDataDictionary();
const systems = Object.values(gameData.system_tiles);
const planetsBySystemId: { [key: number]: Planet[] } = {};
for (const planet_id in gameData.planets) {
    const planet: Planet = gameData.planets[planet_id];
    if (planet === undefined) continue;
    const system_id = planet.system_id;
    if (system_id in planetsBySystemId) {
        planetsBySystemId[system_id].push(planet)
    } else {
        planetsBySystemId[system_id] = [planet]
    }
}

const Tiles: NextPage = () => {
    return (<Layout>
            <Container fluid>
                <Row xs={1} sm={1} md={2} lg={3} xl={4} xxl={5}>
                    {systems.map(x => {
                            const planets = planetsBySystemId[x.system_id]
                            return <Col key={x.system_id}>
                                <Card>
                                    <Card.Img width={364} height="auto" variant="top"
                                              style={{"objectFit": "contain"}}
                                              src={`/tiles/ST_${x.system_id}.png`}/>
                                    <Card.Body>
                                        {x.name && <Card.Title>{x.name}</Card.Title>}
                                        <Card.Text>
                                        </Card.Text>
                                        {planets &&
                                            <ListGroup variant="flush">
                                                {planets.map(x => <ListGroup.Item
                                                    key={x.planet_id}>{x.name}</ListGroup.Item>)}
                                            </ListGroup>
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        }
                    )}
                </Row>
            </Container>
        </Layout>
    )
}

export default Tiles
