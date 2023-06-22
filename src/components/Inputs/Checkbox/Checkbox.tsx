import React from 'react'
import './Checkbox.css'
import { CheckboxProps, CheckboxState } from './Checkbox.types'


class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
	static defaultProps: CheckboxProps = {
		value: false,
		name: '',
		required: false,
		disabled: false,
		onChange: (value: boolean) => { console.log(value) },
	}

	state: CheckboxState = {
		value: false,
	}

	componentDidMount(): void {
		this.init()
	}

	componentDidUpdate(prevProps: Readonly<CheckboxProps>): void {
		if (this.props.value === prevProps.value) {
			return
		}
		this.init()
	}

	init = () => {
		this.setState({ value: this.props.value })
	}

	prepareClasses = () => {
		const activeClass = this.state.value ? ' TealCheckbox_active' : ''
		const disabledClass = this.props.disabled ? ' TealCheckbox_disabled' : ''
		return `TealCheckbox${ activeClass}${ disabledClass }`
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


export default Checkbox
