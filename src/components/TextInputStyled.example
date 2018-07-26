import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { css } from 'glamor';

import { colors } from '../../theme';

const borderColorStyle = color => ({
  borderBottomColor: color,
  borderLeftColor: color,
  borderRightColor: color,
  borderTopColor: color
});

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -32,
    paddingLeft: 6,
    height: 32,
    width: 32
  },
  input: {
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    flex: 1,
    padding: 10,
    fontSize: 16,
    maxWidth: '100%'
  },
  inputWithIcon: {
    paddingLeft: 38
  },
  border: borderColorStyle(colors.grey500),
  onDarkBorder: borderColorStyle(colors.white),
  focused: borderColorStyle(colors.darkBlack),
  onDarkFocused: borderColorStyle(colors.white),
  disabled: {
    opacity: 0.4
  }
});

const placeholderTextColor = colors.grey500;

// react-native-web does not support the placeholderTextColor prop
// so this is a hopefully temporary hack
const inputClassName = css({
  '::placeholder': {
    fontWeight: '300',
    color: placeholderTextColor
  }
});

const onDarkPlaceholderTextColor = colors.white;
const onDarkInputClassName = css({
  '::placeholder': {
    color: onDarkPlaceholderTextColor,
    transition: 'color 0.2s'
  },
  ':focus::placeholder': {
    color: 'rgba(255,255,255,0.5)'
  }
});

class CVTextInput extends React.Component {
  static propTypes = {
    autoFocus: bool,
    color: string,
    defaultValue: string,
    disabled: bool,
    inputStyle: object,
    icon: any,
    onChange: func,
    onDark: bool,
    rewrite: func,
    style: TextInput.propTypes.style
  };

  static defaultProps = {
    onDark: false,
    defaultValue: '',
    rewrite: text => text
  };

  constructor(props) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      text: defaultValue
    };
  }

  render() {
    const {
      autoFocus, // eslint-disable-line
      color: _color,
      disabled,
      defaultValue, // eslint-disable-line
      icon,
      inputStyle,
      onChange, // eslint-disable-line
      onDark,
      rewrite, // eslint-disable-line
      style,
      ...other
    } = this.props;

    const color = _color || onDark ? colors.white : colors.darkBlack;

    return (
      <View style={[styles.root]}>
        {icon && (
          <View style={styles.icon} pointerEvents="none">
            {React.cloneElement(icon, {
              color:
                icon.props.color || (onDark ? colors.white : colors.grey500),
              height: icon.props.height || 26
            })}
          </View>
        )}
        <TextInput
          {...other}
          className={onDark ? onDarkInputClassName : inputClassName}
          disabled={disabled}
          onChangeText={this._handleChangeText}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          ref={this._setInputRef}
          placeholderTextColor={
            onDark ? onDarkPlaceholderTextColor : placeholderTextColor
          }
          style={[
            styles.input,
            onDark ? styles.onDarkBorder : styles.border,
            inputStyle,
            disabled && styles.disabled,
            { color },
            icon && styles.inputWithIcon,
            style
          ]}
          value={this.state.text}
        />
      </View>
    );
  }

  _handleChangeText = text => {
    const { onChange, rewrite } = this.props;
    const newText = rewrite(text);
    this.setState({ text: newText });
    onChange && onChange(newText);
  };

  _handleFocus = () => {
    const { onDark } = this.props;
    this._input.setNativeProps({
      style: onDark ? styles.onDarkFocused : styles.focused
    });
  };

  _handleBlur = () => {
    const { onDark } = this.props;
    this._input.setNativeProps({
      style: onDark ? styles.onDarkBorder : styles.border
    });
  };

  _setInputRef = ref => {
    const { autoFocus } = this.props;
    this._input = ref;
    autoFocus && ref && this.focus();
  };

  focus() {
    this._input.focus();
  }

  value() {
    return this.state.text;
  }

  clear() {
    this.setState({
      text: ''
    });
  }
}

export default CVTextInput;
