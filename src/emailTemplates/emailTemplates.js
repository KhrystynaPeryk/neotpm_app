export function leadGenerationEmailTemplate(clientName, clientEmail, clientPhone, selectedRole, selectedOption, to, bcc) {
    const body = {
        content: `
            <div style="margin-bottom: 20px;">Hi,<div>
            <div style="margin-bottom: 20px; margin-top: 20px;">
                <div>A Free Property Management Guide Request from a client sent through the website pop up form.</div>

                <div style="margin-top: 20px;">Client's details:</div>

                <div style="margin-top: 20px;">Client's name: ${clientName}</div>
                <div>Email: ${clientEmail}</div>
                <div>Phone: ${clientPhone}</div>
                <div>Role: ${selectedRole}</div>
                <div style="margin-bottom: 20px;">Service of interest: ${selectedOption}</div>

                <div>A free guide has been sent to the client.</div>
                <div>Please contact the client to discuss the services.</div>
            </div>
            <div>
                <div>Best regards,<div>
                <div>transparentpm.ae<div>
            <div>
        `,
        email: to,
        subject: 'FREE Property Management Guide Request',
        bcc: bcc
    }

    return body
}