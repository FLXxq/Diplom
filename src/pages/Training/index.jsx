import React from "react";
import Header from "../../components/Header";
import TrainingForm from "./components/TrainingForm";
import './style.css'

const Training = () => {
    return (
        <>
            <Header content='Список тренировок'/>
            <TrainingForm/>
        </>
    )
}

export default Training