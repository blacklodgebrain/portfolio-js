"use client";
import { useState } from "react";
import styles from "../../page.module.css"
import { Alert, Box, Button, TextField, TextareaAutosize } from "@mui/material";

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
                    <TextField name="name" id="name-basic" label="Name" variant="outlined" type="text" />
                </Box>
                <Box sx={{pb: {xs: 1, md: 1}}}>
                    <TextField name="email" id="email-basic" label="Email" variant="outlined" type="email" />
                </Box>
                <Box sx={{pb: {xs: 1, md: 1}}}>
                    <TextareaAutosize name="message" id="message" placeholder="Enter message here!" minRows={3} />
                </Box>
                <Button type="submit" variant="contained" color="secondary">Submit contact</Button>
            </form>
        </div>
    )
}

export default ContactForm;