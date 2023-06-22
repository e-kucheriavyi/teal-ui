import React from 'react'
import './Radio.css'
import { RadioProps, RadioState } from './index'


class Radio extends React.Component<RadioProps, RadioState> {
	static defaultProps: RadioProps = {
		name: '',
		value: '',
		active: '',
		disabled: false,
		onChange: (value: string) => { console.log(value) }
	}

	state: RadioState = {
		active: false,
	}

	componentDidMount(): void {
		this.init()
	}

	componentDidUpdate(prevProps: Readonly<RadioProps>): void {
		if (this.props.active === prevProps.active) {
			return
		}

		this.init()
	}

	init = () => {
		this.setState({
			active: this.props.active === this.props.value,
		})
	}

	prepareClasses = () => {
		const activeClass = this.state.active ? ' TealRadio_active' : ''
		const disabldeClass = this.props.disabled ? ' TealRadio_disabled' : ''
		return `TealRadio${ activeClass }${ disabldeClass }`
	}

	handleClick = () => {
		if (this.props.disabled) {
			return
		}

		this.setState({ active: true }, () => {
			this.props.onChange(this.props.value)
		})
	}

	render = () => {
		return <div
			className={ this.prepareClasses() }
			onClick={ this.handleClick }
		>
			{ this.state.active ? <div className='TealRadio__dot'></div> : '' }
			<input
				type='radio'
				name={ this.props.name }
				value={ this.props.value }
				checked={ this.state.active }
				readOnly
			/>
		</div>
	}
}


export default Radio
