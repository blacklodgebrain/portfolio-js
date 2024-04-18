import { TextareaAutosize } from "@mui/material"

export default function Home( {
        return (
            <main className={styles.main}>
                <text
            </main>
        )
})

export default function Home() {
    const handleSubmit =  (formData: any) => {
        
    }
}

const ContactForm = () => {
    const handleSubmit =  (formData: any) => {
        e.preventDefault();
        await fetch ('/contact/send', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
    }

        .then ((res) => res.json())
        .then ((res) => {
         alert("Thank you! Your message has been sent.");
         
         const form = document.getElementById('contact-form') as HTMLFormElement | null;
         if (form) {
            form.reset();
         }
     })

    const onContactFormSubmit = async (formData: any) =>

    var object = {};
    formData.forEasch((value: string,) => object[key] = value);
    await fecth ('/contact/send', {
        method: 'POST'
        body: JSON.stringify(object),
    })

    return (
        <form className={StyleSheet.contactForm} action={handlesSubmit}>
            <Box sx={{pb: {xs: 5, md: 2}}}>
                <TextField id="name-basic" color="primary" label="Name" variant="outlined" type="name" /></Box>
            <Box sx={{pb: {xs: 5, md: 2}}}>
                <TextField id="email-basic" label="Email" variant="outlined" type="email" /></Box>
            <Box sx={{pb: {xs: 5, md: 2}}}>
                <TextareaAutosize id="message-basic" placeholder="Message" minrows={3} /></Box>
            <Button type="submit" variant="contained" color="secondary">Submit contact</Button>
        </form>
    )
}

const nodemailer = require ("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST || "smtp.google.com",
    port: process.env.NODEMAILER_HOST || 465,
    secure: process.env.NODEMAILER_HOST || true,
    auth: {
        user: process.env.NODEMAILER_USERNAME || "isabellapelot.design@gmail.com"
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

type ResponseData = {
    status?: string;
    message?: string;
}

export async function POST (request: Request) {
    const response: ResponseData = {};
    const body = await request.json();
    console.log(body);
    return NextResponse.json(response);

    const info = await transporter.sendMail({
        to: "isabellapelot.design@gmail.com", 
        subject: `MyVercel Contact: ${body.name}`,
        text: body.message,
        html: `<b>${body.message}</b>`
    });
}
