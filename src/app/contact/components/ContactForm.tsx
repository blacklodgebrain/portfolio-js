"use client";
import { useState } from "react";
import styles from "../../page.module.css"
import { Alert, Box, Button, TextField, TextareaAutosize, styled } from "@mui/material";

const ContactForm = () => {
    const defaultSubmission = {
        status: null,
        message: null,
    }

    const [submission, setSubmission] = useState(defaultSubmission);

    const handleSubmit = async (formData: any) => {
        
        let object: any = {};
        formData.forEach((value: string, key: string) => object[key] = value);
        await fetch('/contact/send', {
            method: 'POST',
            body: JSON.stringify(object),
        })
            .then((res) => res.json())
            .then((res) => {
                setSubmission(res);
            })
    }

    return (
        <div>
            {submission?.status ? (
                <Alert variant="filled" severity={submission.status}>
                    {submission.message}
                </Alert>
            ) : null}

            <form className={styles.contactForm} action={handleSubmit}>
            <Box sx={{pb: {xs: 1, md: 1}}}>
                    <StyledTextField name="name" id="name-basic" label="Name" variant="outlined" type="text" />
                </Box>
                <Box sx={{pb: {xs: 1, md: 1}}}>
                    <StyledTextField name="email" id="email-basic" label="Email" variant="outlined" type="email" />
                </Box>
                <Box sx={{pb: {xs: 1, md: 1}}}>
                    <StyledTextArea name="message" id="message" placeholder="Enter message here!" minRows={3} />
                </Box>
                <StyledButton type="submit" variant="contained" color="secondary">Submit contact</StyledButton>
            </form>
        </div>
    )
}

export default ContactForm;

const StyledTextField = styled(TextField)`
    fieldset {
        flex-direction: column;
        align-items: center;
        margin: 20px;
        padding: 20px;
        border-color: aliceblue;
        border-radius: 8px;
        width: 200px;
        color: aliceblue;
    }
`

const StyledTextArea = styled (TextareaAutosize)`
    padding: 20px;
    margin: 20px;
    border-color: aliceblue;
    border-radius: 8px;
    color: aliceblue;
    padding: 10px;
`

const StyledButton = styled(Button) `
    align-items: center;
    background-color: #3b384f;
    width: 200px;
    margin: 20px;
`