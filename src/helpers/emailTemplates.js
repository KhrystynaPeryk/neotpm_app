export function leadGenerationEmailTemplate(clientName, clientEmail, clientPhone, selectedRole, selectedOption, to, bcc) {
    const body = {
        content: `
            <div style="margin-bottom: 20px;">Hi,<div>
            <div style="margin-bottom: 20px; margin-top: 20px;">
                <div>This is to notify that a new client submitted details through the website's pop up form.</div>

                <div style="margin-top: 20px;">Client's details:</div>

                <div style="margin-top: 20px;">Name: ${clientName}</div>
                <div>Email: ${clientEmail}</div>
                <div>Phone: ${clientPhone}</div>
                <div>Role: ${selectedRole}</div>
                <div style="margin-bottom: 20px;">Service of interest: ${selectedOption}</div>

                <div>A free Property Management guide has been sent to the client.</div>
                <div>Please contact the client to discuss the services.</div>
            </div>
            <div>
                <div>Best regards,<div>
                <div>Team of transparentpm.ae<div>
            <div>
        `,
        email: to,
        subject: 'New client request from website',
        bcc: bcc
    }

    return body
}

export function documentsRequestEmailTemplate(clientName, clientEmail, clientPhone, fileLink, service) {
    const body = {
        content: `
            <div style="margin-bottom: 20px;">Hi ${clientName},<div>
            <div style="margin-bottom: 20px; margin-top: 20px;">
            <div>Thank you for contacting us.</div>
            <div>One of our representatives will get in touch with you to discuss the services you need.</div>
            <div style="margin-bottom: 20px; margin-top: 20px;">
                Your details: <br/>
                <b>Phone: </b>${clientPhone} <br/>
                <b>Email: </b>${clientEmail} <br/>
                <b>Service: </b>${service}
            </div>
            <div>Feel free to upload any relevant documents following the link below:</div>
            <div>${fileLink}</div>
            </div>
            <div>
                <div>Best regards,<div>
                <div>Team of transparentpm.ae<div>
            <div>
        `,
        email: clientEmail,
        subject: 'Transparent Property Management & Maintenance Notification',
        bcc: 'joshua.jamelo@transparentpm.ae'
    }

    return body
}