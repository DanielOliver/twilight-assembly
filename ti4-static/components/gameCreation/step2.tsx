import { FormEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"

const Step2 = ({
    name,
    description,
    playerCount,
    onFinish,
    onBack }: {
        name: string,
        description: string,
        playerCount: number
        onFinish: (participants: string[]) => void
        onBack: () => void
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
        onFinish([])
    };

    return (
        <Container>
            <h1 className="display-4">{name}</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formMatchDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Queensbury rules indeed"
                        maxLength={400}
                        defaultValue={description} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Continue
                </Button>
            </Form>
            <Button variant="secondary" type="button" onSubmit={onBack}>
                Back
            </Button>
        </Container>
    )
}

export default Step2
