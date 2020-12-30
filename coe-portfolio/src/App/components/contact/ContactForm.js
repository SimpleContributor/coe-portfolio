import React, { Component } from 'react';
import { FormContainer } from './contactStyles';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch('/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if(response.status === 'success'){
                alert("Message Sent!");
                this.resetForm()
            }else if(response.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render() {
        return (
            <FormContainer>
                <div className="contact-heading">
                      <h1>Want to contact me directly?</h1>
                      <p>Fill out this form to send me an email!</p>
                </div>
                <form action="submit" className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
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
                </form>
            </FormContainer> 
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default MessageForm;
