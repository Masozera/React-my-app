import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
      /* Add the states "content" and "hasContentError" */
      content: '',
      hasContentError: false,
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  /* Declare the method handleContentChange */
  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          Please enter your email address
        </p>
      );
    }
    
    /* Declare the variable contentErrorText */
    let contentErrorText;
    
    /* Create an if statement with hasContentError as the condition */
    if (this.state.hasContentError) {
      contentErrorText = (
        <p className='contact-message-error'>
         Please enter your message
        </p>
      )
    }
    
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          Sent Successfully
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}} >
          <p>Email Address (required)</p>
          <input
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
          />
          {emailErrorText}
          <p>Message (required)</p>
          {/* Add the value and an onChange event */}
          <textarea
            value={this.state.content}
            onChange={(event) => {this.handleContentChange(event)}}
          />
          {/* Display contentErrorText */}
          {contentErrorText}
          
          <input
            type='submit'
            value='Send'
          />
        </form>
      );
    }
    
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;


//Create the look of the form
//Prepare the form submission message
//Switch between the form and message

//In order to run the code when the form is submitted, 
//we need to set the onSubmit event in the <form> tag.

//We'll create a method that changes the value of the state as you can see below,
// and call it when the form is submitted.

//When creating a form with React, it is necessary to connect the input value to the state.
// We'll add an email state, which manages the input value of the email address. 
//Also, we need to assign the value of the state to the value attribute of the <input> tag.

//Steps For Managing User Input with State
//Prepare the state and Input
//Get the input value using onChange
//Update the State


//An onChange event is used in order to run code when text is added or deleted in the input field.
// We'll add an onChange event in the <input>

//The input value can be acquired by adding a parameter to the function handling the onChange event. We'll call the parameter event.
//Although there is no need to understand this in detail in this lesson, be sure to remember event and event.target.value as a set.

//We will update the state by creating a method which we'll call handleEmailChange. 
//Notice that the event is passed to the method as you can see below.
// By doing this, you can get the input value within the method.

// event.target.value gets input value

//Let's manage the status of whether the input value is null or not with state. 
//Declare a new boolean state called hasEmailError. 
//Let's make it so that the display will change like shown below.