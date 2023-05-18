import React, { PropsWithChildren } from 'react'
import { ButtonProps } from './Button.types'


class Button extends React.Component<PropsWithChildren<ButtonProps>> {
	static defaultProps: ButtonProps = {
		disabled: false,
		type: 'button',
		onClick: () => {},
	}

	handleClick = () => {
		if (this.props.disabled) {
			return
		}

		this.props.onClick()
	}

	render = () => {
		return <button
			type={ this.props.type }
			disabled={ this.props.disabled }
			onClick={ this.handleClick }
		>{ this.props.children }</button>
	}
}


export default Button
