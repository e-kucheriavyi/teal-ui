import React from 'react'
import styles from './Button.module.scss'
import { ButtonProps } from './Button.types'


class Button extends React.Component<ButtonProps> {
	static defaultProps: ButtonProps = {
		text: 'Button',
		type: 'button',
		color: 'teal',
		outline: false,
		isDisabled: false,
		onClick: () => {},
	}

	handleClick = () => {
		if (this.props.isDisabled) {
			return
		}

		this.props.onClick()
	}

	getClasses = () => {
		const outlineModificator = this.props.outline ? '_outline' : ''
		const modificatorClass = `Button${ outlineModificator }_${ this.props.color }`

		const classes: any[] = [
			styles.Button,
			styles[modificatorClass],
		]
	
		return classes.join(' ')
	}

	render = () => {
		return <button
			type={ this.props.type }
			className={ this.getClasses() }
			disabled={ this.props.isDisabled }
			onClick={ this.handleClick }
		>{ this.props.text }</button>
	}
}


export default Button
