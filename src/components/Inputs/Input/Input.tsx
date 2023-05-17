import React from 'react'
import styles from './Input.module.scss'
import { InputProps, InputState } from './Input.types'


class Input extends React.Component<InputProps, InputState> {
	static defaultProps: InputProps = {
		name: '',
		type: 'text',
		hasError: false,
		placeholder: 'Type something...',
		defaultValue: '',
		required: false,
		readOnly: false,
		disabled: false,
	}

	render = () => {
		return <div
			className={[
				styles.Container,
				this.props.hasError ? styles.Container_error : '',
				this.props.disabled ? styles.Container_disabled: '',
			].join(' ')}
		>
			<input
				type={ this.props.type }
				name={ this.props.name }
				placeholder={ this.props.placeholder }
				defaultValue={ this.props.defaultValue }
				required={ this.props.required }
				readOnly={ this.props.readOnly }
				disabled={ this.props.disabled }
				className={ styles.Input }
			/>
		</div>
	}
}


export default Input
