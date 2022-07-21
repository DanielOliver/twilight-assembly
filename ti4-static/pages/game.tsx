import { NextPage } from "next"
import { useEffect, useState } from "react";
import { GameCreation } from "ti4-core/flow";
import { GameCreationState } from "ti4-core/types";
import Layout from "../components/layout"
import Step1 from "../components/gameCreation/step1"
import Step2 from "../components/gameCreation/step2";
import { useRouter } from "next/router";

const Game: NextPage = () => {
    const router = useRouter()
    const [gameCreation, _] = useState(new GameCreation());
    const [state, setState] = useState(GameCreationState.NameTheGame);

    useEffect(() => {
        router.push({ href: router.pathname, query: { step: state } });
    }, [state])
    useEffect(() => {
        if (router.query.step && Number.isInteger(Number(router.query.step))) {
            setState(Number(router.query.step))
        } else {
            gameCreation.reset()
            refreshState()
        }
    }, [router.query])

    const refreshState = () => {
        setState(gameCreation.state)
    }
    const finishStep1 = (name: string, description: string, playerCount: number) => {
        gameCreation.step1(name, description, playerCount)
        refreshState()
    }
    const finishStep2 = (participants: string[]) => {
        gameCreation.step2(participants)
        refreshState()
    }
    const back = () => {
        gameCreation.back()
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
                <Step2
                    name={gameCreation.name} description={gameCreation.description} playerCount={gameCreation.playerCount}
                    onFinish={finishStep2} onBack={back} />
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
