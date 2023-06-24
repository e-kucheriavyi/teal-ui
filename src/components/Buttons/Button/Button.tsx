import React, { PropsWithChildren } from 'react'
import { ButtonProps } from './Button.types'
import './Button.css'


class Button extends React.Component<PropsWithChildren<ButtonProps>> {
	static defaultProps: ButtonProps = {
		disabled: false,
		color: 'success',
		nativeType: 'button',
		size: 'regular',
		onClick: () => {},
	}

	handleClick = () => {
		if (this.props.disabled) {
			return
		}

		this.props.onClick()
	}

	getClasses = () => {
		return [
			'TealButton',
			'TealDisablable',
			'TealHoverable',
			'TealActivable',
			`TealSizeMode_${ this.props.size }`,
			`TealColorMode_${ this.props.color }`,
		].join(' ')
	}

	render = () => {
		return <button
			type={ this.props.nativeType }
			disabled={ this.props.disabled }
			onClick={ this.handleClick }
			className={ this.getClasses() }
		>{ this.props.children }</button>
	}
}


export default Button
