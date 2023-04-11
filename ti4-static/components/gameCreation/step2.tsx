import { FormEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AvailableDraftType } from "ti4-core/flow";
import { GameCreationDraftType } from "ti4-core/types";

const Step2 = ({
  name,
  availableDraftTypes,
  onFinish,
  onBack,
}: {
  name: string;
  availableDraftTypes: AvailableDraftType[];
  onFinish: (draftType: GameCreationDraftType) => void;
  onBack: () => void;
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
    onFinish([]);
  };

  return (
    <Container>
      <h1 className="display-5">Draft Mode</h1>
      {/* <Button variant="secondary" type="button" onSubmit={onBack}>
                Back
            </Button> */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          {availableDraftTypes.map((x) => (
            <>
              <hr />
              <Form.Check
                type="radio"
                id={`check-api-${x.draftType}`}
                name="draft-type"
                value={x.draftType}
                label={x.name}
              />
              <Form.Text className="m-3 text-muted">{x.description}</Form.Text>
            </>
          ))}
        </Form.Group>
        <hr />
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default Step2;
