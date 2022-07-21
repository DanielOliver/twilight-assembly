import { FormEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"

const Step1 = ({
    name,
    description,
    playerCount,
    onFinish }: {
        name: string,
        description: string,
        playerCount: number
        onFinish: (name: string, description: string, playerCount: number) => void
    }) => {
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
        onFinish(event.target.elements.formMatchName.value, event.target.elements.formMatchDescription.value, event.target.elements.formMatchPlayerCount.value)
    };

    return (
        <Container>
            <h1 className="display-4">New Match</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formMatchName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        maxLength={80}
                        defaultValue={name}
                        placeholder="Enter a short name for the match" />
                    <Form.Text className="text-muted">
                        Bonus points for style (bonus points do not count toward a win)
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
                        defaultValue={description} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMatchPlayerCount">
                    <Form.Label>Players</Form.Label>
                    <Form.Control
                        type="number"
                        min={3}
                        step={1}
                        pattern="[3-8]"
                        max={8}
                        defaultValue={playerCount} />
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

export default Step1
