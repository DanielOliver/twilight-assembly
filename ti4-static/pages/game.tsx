import { NextPage } from "next"
import { FormEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { GameCreation } from "ti4-core/flow";
import { GameCreationState } from "ti4-core/types";
import Layout from "../components/layout"

const Step1SubmitName = ({ gameCreation, onFinish }: { gameCreation: GameCreation, onFinish: () => void }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            //Do what?
        }
        setValidated(true);
        //@ts-ignore
        gameCreation.setName(event.target.elements.formMatchName.value, event.target.elements.formMatchDescription.value)
        onFinish()
    };

    return (
        <Container>
            <h1>New Match</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formMatchName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        maxLength={80}
                        defaultValue={gameCreation.name}
                        placeholder="Enter a short name for the match" />
                    <Form.Text className="text-muted">
                        Bonus points for style (bonus points don't count toward a win)
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please choose a name for the match.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMatchDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Queensbury rules indeed"
                        maxLength={400}
                        defaultValue={gameCreation.description} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMatchPlayerCount">
                    <Form.Label>Players</Form.Label>
                    <Form.Control
                        type="number"
                        min={3}
                        step={1}
                        pattern="[3-8]"
                        max={8}
                        defaultValue={gameCreation.playerCount} />
                    <Form.Text className="text-muted">
                        Choose a player count between 3 and 8 inclusive
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Continue
                </Button>
            </Form>
        </Container>
    )
}

const Game: NextPage = () => {
    const [gameCreation, _] = useState(new GameCreation());
    const [state, setState] = useState(GameCreationState.NameTheGame);

    const refreshState = () => {
        setState(gameCreation.state)
    }

    switch (state) {
        case GameCreationState.NameTheGame:
            return (<><Layout />
                <Step1SubmitName gameCreation={gameCreation} onFinish={refreshState} />
            </>)
            break;
        case GameCreationState.TellParticipants:
            return (<><Layout />
                <h1>Let's pick participants!</h1>
            </>)
            break;
        default:
            break;
    }

    return (
        <>
            <Layout />
            <p>How did it come to this?</p>
        </>
    )
}

export default Game
