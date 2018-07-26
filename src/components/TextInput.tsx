import * as React from 'react';

interface TextInputProps {
  autoFocus?: boolean;
  defaultValue: string;
  disabled?: boolean;
  onChange(text: string): void;
  inputClassName: string;
};

interface TextInputState {
  text: string;
};

class TextInput extends React.Component<TextInputProps, TextInputState> {

  input: HTMLInputElement;

  static defaultProps = {
    defaultValue: '',
    disabled: false
  };

  constructor(props: TextInputProps) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      text: defaultValue
    };
  }

  public render() {
    const { disabled, inputClassName } = this.props;

    return (
      <input
        className={inputClassName}
        disabled={disabled}
        onChange={this.handleChangeText}
        ref={this.setInputRef}
        value={this.state.text}
      />
    );
  }

  handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const { value } = e.target;
    this.setState({ text: value });
    if (onChange) {
      onChange(value);
    }
  };

  setInputRef = (ref: HTMLInputElement) => {
    const { autoFocus } = this.props;
    this.input = ref;
    if (autoFocus && ref) {
      this.focus();
    }
  };

  focus() {
    this.input.focus();
  }

  value() {
    return this.state.text;
  }

  clear() {
    this.setState({ text: '' });
  }
}

export default TextInput;
