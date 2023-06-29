import React from 'react'
import './TRadio.css'
import { TRadioProps, TRadioState } from './index'


class TRadio extends React.Component<TRadioProps, TRadioState> {
	static defaultProps: TRadioProps = {
		name: '',
		value: '',
		active: '',
		disabled: false,
		onChange: (value: string) => { console.log(value) }
	}

	state: TRadioState = {
		active: false,
	}

	componentDidMount(): void {
		this.init()
	}

	componentDidUpdate(prevProps: Readonly<TRadioProps>): void {
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
		const activeClass = this.state.active ? ' t-radio_active' : ''
		const disabldeClass = this.props.disabled ? ' t-radio_disabled' : ''
		return `t-radio${ activeClass }${ disabldeClass }`
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
			{ this.state.active ? <div className='t-radio__dot'></div> : '' }
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


export default TRadio
