import { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    // Extract the props
    const {
      text,
      disabled=false,
      buttonColor='blue',
      onClick
    } = this.props;
    return (
      <button
        className="Default-button"
        disabled={disabled && 'disabled'}
        style={{backgroundColor: {buttonColor}}}
        onClick={onClick}
      >
       {text}
      </button>
    );
  }
}

export default Button;
