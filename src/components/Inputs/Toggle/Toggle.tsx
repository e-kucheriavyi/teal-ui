import React from 'react'
import { ToggleProps, ToggleState } from './index'
import './Toggle.css'


class Toggle extends React.Component<ToggleProps, ToggleState> {
	static defaultProps: ToggleProps = {
		value: false,
		name: '',
		disabled: false,
		required: false,
		onChange: (value: boolean) => { console.log(value) },
	}

	state: ToggleState = {
		value: false,
	}

	componentDidMount(): void {
		this.init()
	}

	componentDidUpdate(prevProps: Readonly<ToggleProps>): void {
		if (prevProps.value === this.props.value) {
			return
		}

		this.init()
	}

	init = () => {
		this.setState({
			value: this.props.value,
		})
	}

	prepareClasses = () => {
		const activeClass = this.state.value ? ' TealToggle_active' : ''
		const disabledClass = this.props.disabled ? ' TealToggle_disabled' : ''
		return `TealToggle${ activeClass }${ disabledClass }`
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
			<div className='TealToggle__dot'></div>
			<div className='TealToggle__spacer'></div>
			<input
				type='hidden'
				name={ this.props.name }
				value={ String(this.state.value) }
				required={ this.props.required }
			/>
		</div>
	}
}


export default Toggle
