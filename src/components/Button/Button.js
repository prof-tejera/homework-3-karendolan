import { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    // Extract the props
    const {
      text,
      disabled=false,
      color='neutral',
      onClick
    } = this.props;

    const classNameValue = `Default-button Default-button-${color}`;

    return (
      <button
        className={classNameValue}
        disabled={disabled && 'disabled'}
        onClick={onClick}
      >
       {text}
      </button>
    );
  }
}

export default Button;
