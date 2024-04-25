"use client";
import { useState } from "react";
import styles from "../contact.module.css"
import { Alert, Box, Button, TextField, TextareaAutosize, styled } from "@mui/material";
import Image from "next/image"
import GithubLogo from "@/app/assets/github-142-svgrepo-com.svg"
import LinkedInLogo from "@/app/assets/linkedin-161-svgrepo-com.svg"
import InstagramLogo from "@/app/assets/instagram-glyph-1-logo-svgrepo-com.svg"

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
        <>
            {submission?.status ? (
                <Alert variant="filled" severity={submission.status}>
                    {submission.message}
                </Alert>
            ) : null}

            <form className={styles.contactForm} action={handleSubmit}>
                <StyledFormControl sx={{pb: {xs: 1, md: 1} }} >
                    <StyledTextField name="name" id="name-basic" label="Name" variant="outlined" type="text" />
                </StyledFormControl>
                <StyledFormControl sx={{pb: {xs: 1, md: 1}}}>
                    <StyledTextField name="email" id="email-basic" label="Email" variant="outlined" type="email" />
                </StyledFormControl>
                <StyledFormControl sx={{pb: {xs: 1, md: 1}}}>
                    <StyledTextArea name="message" id="message" placeholder="Enter message here!" minRows={3} />
                </StyledFormControl>
                <StyledFormControl sx={{pb: {xs: 1, md: 1}}}>
                    <StyledButton type="submit" variant="contained" color="secondary">Submit contact</StyledButton>
                </StyledFormControl>
            </form>

            <div className={styles.socialRow}>
            <a href="https://github.com/blacklodgebrain" target="_blank" rel="noopener noreferrer">
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={GithubLogo} alt="Github logo." fill style={{objectFit: "contain"}} />
                    </div>
            </a>
            <a href="https://www.linkedin.com/in/isabella-pelot-a85207292" target="_blank" rel="noopener noreferrer">
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={LinkedInLogo} alt="LinkedIn logo." fill style={{objectFit: "contain"}} />
                    </div>
            </a>
            <a href="https://www.instagram.com/isabella.pelot/" target="_blank" rel="noopener noreferrer">
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={InstagramLogo} alt="Instagram logo." fill style={{objectFit: "contain"}} />
                    </div>
            </a>
        </div>
        <p>Email me, or check out my LinkedIn profile at Isabella Pelot, my Instagram at isabella.pelot and my Github at blacklodgebrain.</p>
        </>
    )
}

export default ContactForm;

const StyledFormControl = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledTextField = styled(TextField)`
    width: 100%;
    fieldset {
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-color: aliceblue;
        border-radius: 8px;
        color: aliceblue;
        width: 100%;
    }
`

const StyledTextArea = styled (TextareaAutosize)`
    border-color: aliceblue;
    border-radius: 8px;
    color: aliceblue;
    padding: 10px;
    width: 100%;
`

const StyledButton = styled(Button) `
    align-items: center;
    background-color: #3b384f;
    width: 100%;
`