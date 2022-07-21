import { NextPage } from "next"
import { useState } from "react";
import { GameCreation } from "ti4-core/flow";
import { GameCreationState } from "ti4-core/types";
import Layout from "../components/layout"
import Step1 from "../components/gameCreation/step1"

const Game: NextPage = () => {
    const [gameCreation, _] = useState(new GameCreation());
    const [state, setState] = useState(GameCreationState.NameTheGame);

    const refreshState = () => {
        setState(gameCreation.state)
    }
    const finishStep1 = (name: string, description: string, playerCount: number) => {
        gameCreation.step1(name, description, playerCount)
        refreshState()
    }

    switch (state) {
        case GameCreationState.NameTheGame:
            return (<><Layout />
                <Step1
                    name={gameCreation.name} description={gameCreation.description} playerCount={gameCreation.playerCount}
                    onFinish={finishStep1} />
            </>)
        case GameCreationState.TellParticipants:
            return (<><Layout />
                <h1>Let's pick participants!</h1>
            </>)
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
