import { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    // extract the prompts
    const {
      name,
      prompt,
      type,
      onChange,
    } = this.props;

    return (
      <input
        className="Input"
        name={name}
        type={type}
        placeholder={prompt}
        onChange={(e) => onChange(e.target.value)}
     />
   );
  }
}

export default Input;
