import React from "react";
import Header from "../../components/Header";
import FaqForms from "./components/FaqForm";
import './style.css'

const Faq = () => {
    return (
        <>
            <Header content='F.A.Q' />
            <FaqForms />
        </>
    )
}

export default Faq