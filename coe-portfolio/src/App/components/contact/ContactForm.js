import React, { useState, useEffect } from 'react';
import { FormContainer } from './contactStyles';

const MessageForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [fullMessage, setFullMessage] = useState({});

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         email: '',
    //         message: ''
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/send', {
            method: "POST",
            body: JSON.stringify(fullMessage),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if(response.status === 'success'){
                alert("Message Sent!");
                resetForm();
            }else if(response.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }        


    useEffect(() => {
        setFullMessage({ name: name, email: email, message: message})
    }, [name, email, message])

    
    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    // onNameChange(event) {
    //     this.setState({name: event.target.value})
    // }

    // onEmailChange(event) {
    //     this.setState({email: event.target.value})
    // }

    // onMessageChange(event) {
    //     this.setState({message: event.target.value})
    // }

    // render() {
    return (
        <FormContainer>
            <div className="contact-heading">
                    <h1>Want to contact me directly?</h1>
                    <p>Fill out this form to send me an email!</p>
            </div>
            <form action="submit" 
                className="contact-form" 
                onSubmit={handleSubmit} 
                method="POST"
            >
                <div className="contact-name"> 
                    <label htmlFor="name">
                        <p>Name:</p>
                        <input placeholder="What is your name?" 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} required></input>
                    </label>
                </div>
                <div className="contact-email"> 
                        <label htmlFor="email">
                            <p>Email:</p>
                        <input placeholder="What is your email?" 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} required></input>
                    </label>
                </div>
                <div className="contact-message"> 
                    <label htmlFor="name">
                        <p>Message:</p>
                        <textarea placeholder="Enter your message here" 
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </label>
                    </div>
                    <div className="submit-button">
                        <button type="submit">Send Message</button>
                </div>
            </form>
        </FormContainer> 
    )
    // }

    
}

export default MessageForm;




/* <form action="submit" className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="contact-name"> 
        <label htmlFor="name">
            <p>Name:</p>
            <input placeholder="What is your name?" 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.onNameChange.bind(this)} required></input>
        </label>
    </div>
<div className="contact-email"> 
        <label htmlFor="email">
            <p>Email:</p>
        <input placeholder="What is your email?" 
                type="email" 
                value={this.state.email} 
                onChange={this.onEmailChange.bind(this)} required></input>
    </label>
</div>
<div className="contact-message"> 
    <label htmlFor="name">
        <p>Message:</p>
        <textarea placeholder="Enter your message here" 
                    value={this.state.message} 
                    onChange={this.onMessageChange.bind(this)} required></textarea>
        </label>
    </div>
    <div className="submit-button">
        <button type="submit">Send Message</button>
</div>
</form> */