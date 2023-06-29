import React from 'react'
import './TCheckbox.css'
import { TCheckboxProps, TCheckboxState } from './index'


class TCheckbox extends React.Component<TCheckboxProps, TCheckboxState> {
	static defaultProps: TCheckboxProps = {
		value: false,
		name: '',
		required: false,
		disabled: false,
		onChange: (value: boolean) => { console.log(value) },
	}

	state: TCheckboxState = {
		value: false,
	}

	componentDidMount(): void {
		this.init()
	}

	componentDidUpdate(prevProps: Readonly<TCheckboxProps>): void {
		if (this.props.value === prevProps.value) {
			return
		}
		this.init()
	}

	init = () => {
		this.setState({ value: this.props.value })
	}

	prepareClasses = () => {
		const activeClass = this.state.value ? ' t-checkbox_active' : ''
		const disabledClass = this.props.disabled ? ' t-checkbox_disabled' : ''
		return `t-checkbox${ activeClass }${ disabledClass }`
	}

	handleClick = () => {
		if (this.props.disabled) {
			return
		}

		const value = !this.state.value

		this.setState({ value }, () => {
			this.props.onChange(value)
		})
	}

	render = () => {
		return <div
			className={ this.prepareClasses() }
			onClick={ this.handleClick }
		>
			{ this.state.value ? <span>✔</span> : '' }
			<input
				type='hidden'
				name={ this.props.name }
				required={ this.props.required }
				value={ String(this.state.value) }
			/>
		</div>
	}
}


export default TCheckbox
