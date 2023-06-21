import React from 'react'
import { ToggleProps } from './index'
import './Toggle.css'


class Toggle extends React.Component<ToggleProps, {}> {
	static defaultProps: ToggleProps = {
		value: false,
		name: '',
		size: 'regular',
		disabled: false,
		required: false,
		onChange: (value: boolean) => { console.log(value) }
	}

	prepareClasses = () => {
		const sizeClass = `TealToggle_${ this.props.size }`
		const activeClass = this.props.value ? ' TealToggle_active' : ''
		const disabledClass = this.props.disabled ? ' TealToggle_disabled' : ''
		return `TealToggle ${ sizeClass }${ activeClass }${ disabledClass }`
	}

	handleClick = () => {
		if (this.props.disabled) {
			return
		}

		this.props.onChange(!this.props.value)
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
				value={ String(this.props.value) }
				required={ this.props.required }
			/>
		</div>
	}
}


export default Toggle
