import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`

    background-color: #89BE9C;
    display: grid;
    grid-template-rows: auto 1000px;
    min-width: 98%;
    padding-left: 10%;


    div.contact-heading{
        margin: 30px 0;

        @media (max-width: 768px){
            width: 80%;
        }
    }

    div.contact-heading h1{
        font-size: 2.3rem;
    }

    div.contact-heading p,
    label p{
        font-size: 1.6rem;
    }


    form.contact-form{
        background-color: #62a87c;
        border-radius: 10px;
        display: grid;
        grid-template-rows: 1fr 1fr 2fr 1fr;
        height: 50%;
        justify-items: center;
        padding: 20px;
        width: 800px;

        @media (max-width: 1000px){
            width: 75%;
        }
    }

    form.contact-form div{
        display: grid;
        padding-left: 20px;
        width: 100%;
    }

    label{
        width: 80%;
    }

    label p{
        padding-bottom: 5px;
    }


    input,
    textarea{
        background-color: #70e0ff;
        border: 1px solid #000;
        border-radius: 8px;
        box-sizing: border-box;
        outline: none;
        padding: 10px;
        width: 100%;
    }

    textarea{
        height: 70%;
        resize: none;
    }
    

    div.submit-button button{
        align-self: end;
        background-color: #70e0ff;
        border: 1.5px solid #000;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.2rem;
        height: 65px;
        margin-bottom: 10px;
        outline: none;
        width: 80%;
    }
`

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
                      <h1>Want to tell me a secret?</h1>
                      <p>Fill out this form to send me an email! (<u>Work in Progress</u>)</p>
                     <p>Or send one directly to calebcoecode@gmail.com.</p>
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