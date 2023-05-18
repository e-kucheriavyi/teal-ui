import React, { PropsWithChildren } from 'react'
import './Button.css'
import { ButtonProps } from './Button.types'


class Button extends React.Component<PropsWithChildren<ButtonProps>> {
	static defaultProps: ButtonProps = {
		disabled: false,
		type: 'success',
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
		const heightClass = `Button_${ this.props.size }`
		const colorClass = `Button_${ this.props.type }`
		const disabledClass = this.props.disabled ? 'Button_disabled' : ''
		return [
			'Button',
			heightClass,
			colorClass,
			disabledClass,
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
