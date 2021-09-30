import { Component } from 'react';
import './RadioButtons.css';
import Button from 'components/Button/Button';

class RadioButtons extends Component {
  // Initialize starting current page to 1
  constructor(props) {
    super(props);
    this.state = {curButton: undefined}
  }

  // onClick event change state of button
  onClick = (button) => {
    this.setState({curButton: button});
  }

  render() {
    const {curButton} = this.state;
    // The array of input data
    const buttonNames = ['Apple', 'Pear', 'Orange'];
    // Create a mapping of constructed buttons
    const buttons = buttonNames.map((button) => {
      return (
        <Button
          text={button}
          onClick={() => this.onClick(button)}
          color={button === curButton ? 'blue' : 'neutral' }
          key={button}
        />
      )
    });

    // Return the construct
    return (
      <div className="RadioButtons">
       <div className="RadioButtons-container">
          {buttons}
          {(curButton &&
           <div>
              {curButton}!
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RadioButtons;
