import { Component } from 'react';
import './LoginForm.css';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

class LoginForm extends Component {
  render() {
    // The array of input data
    const loginInputs = [
      {
        name:'username-input',
        prompt:'username',
        type:'text'
      },
      {
        name:'password-input',
        prompt:'password',
        type:'password'
      }
    ]
    // Construct the list of inputs
    const inputs = loginInputs.map((input,i) => {
      return (
        <Input
          name={input.name}
          prompt={input.prompt}
          type={input.type}
          key={i}
        />
      )
    });

    // Return the construct
    return (
      <div className="LoginForm">
        {inputs}
        <Button
          text="LOGIN"
        />
      </div>
    );
  }
}

export default LoginForm;
