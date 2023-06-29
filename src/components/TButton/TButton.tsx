import React, { PropsWithChildren } from 'react'
import { TButtonProps } from './TButton.types'
import './TButton.css'


class TButton extends React.Component<PropsWithChildren<TButtonProps>> {
	static defaultProps: TButtonProps = {
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
			't-button',
			't-disablable',
			't-hoverable',
			't-activable',
			`t-size-mode_${ this.props.size }`,
			`t-color-mode_${ this.props.color }`,
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


export default TButton
