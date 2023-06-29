import React from 'react'
import { TToggleProps, TToggleState } from './index'
import './TToggle.css'


class TToggle extends React.Component<TToggleProps, TToggleState> {
	static defaultProps: TToggleProps = {
		value: false,
		name: '',
		disabled: false,
		required: false,
		onChange: (value: boolean) => { console.log(value) },
	}

	state: TToggleState = {
		value: false,
	}

	componentDidMount(): void {
		this.init()
	}

	componentDidUpdate(prevProps: Readonly<TToggleProps>): void {
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
		const activeClass = this.state.value ? ' t-toggle_active' : ''
		const disabledClass = this.props.disabled ? ' t-toggle_disabled' : ''
		return `t-toggle${ activeClass }${ disabledClass }`
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
			<div className='t-toggle__dot'></div>
			<div className='t-toggle__spacer'></div>
			<input
				type='hidden'
				name={ this.props.name }
				value={ String(this.state.value) }
				required={ this.props.required }
			/>
		</div>
	}
}


export default TToggle
