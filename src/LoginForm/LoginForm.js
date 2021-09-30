import { Component } from 'react';
import './LoginForm.css';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

class LoginForm extends Component {
  // Initialize starting current page to 1
  constructor(props) {
    super(props);
    // The array of input data
    this.loginInputs = [
      {
        prompt:'username',
        type:'text'
      },
      {
        prompt:'password',
        type:'password'
      }
    ];
    // special state var
    this.state = {
      username: undefined,
      password: undefined,
      welcome: undefined,
    }
  }

  // Save state of login data
  updateLoginText = ({username, password}) => {
    if (username) {
      this.setState({username: username});
    } else if (password) {
      this.setState({password: password});
    }
  }

  // logged in!
  welcome = () => {
    // set state say hi to login name
    const {username} = this.state;
    this.setState({welcome: username});
  }

  // Render the compont!
  render() {
    const {
      username,
      password,
      welcome
    } = this.state;
    // submit button can be clicked if content exists in login input
    const submitEnabled = username && password;


    // Construct the list of inputs
    const inputs = this.loginInputs.map((input,i) => {
      const {prompt, type} = input;

      return (
        <Input
          onChange={(data) => {
            // construct the value object for destructing
            const obj = {};
            obj[prompt] = data;
            this.updateLoginText(obj);
          }}
          prompt={prompt}
          type={type}
          key={i}
        />
      )
    });

    // Return the construct
    return (
      <div className="LoginForm">
        <div className="LoginForm-container">
          {inputs}
          <Button
            text="LOGIN"
            color="green"
            onClick={()=>this.welcome()}
            disabled={!submitEnabled}
          />
          {(welcome &&
          <div>
            Welcome {welcome}!
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default LoginForm;
