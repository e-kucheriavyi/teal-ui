import React from 'react'
import { ChoiceOptionProps } from './index'
import './ChoiceOption.css'


class ChoiceOption extends React.Component<ChoiceOptionProps, {}> {
	static defaultProps: ChoiceOptionProps = {
		disabled: false,
		active: false,
		option: {
			value: '',
			label: '',
			icon: '',
			tooltip: '',
			disabled: false,
		},
		multiChoise: false,
		onClick: () => { },
	}

	handleClick = () => {
		if (this.props.disabled) {
			return
		}

		this.props.onClick()
	}

	render = () => {
		const { option, active, disabled } = this.props

		const acctiveClasses = `TealChoiceOption_active ${this.props.option.activeClasses}`

		return <div
			className={[
				'TealChoiceOption',
				active ? acctiveClasses : '',
				disabled ? 'TealChoiceOption_disabled' : '',
			].join(' ')}
			onClick={ this.handleClick }
		>
			{ this.props.multiChoise ? <div className='TealChoiceOption__checkContainer'>
				<span className='TealChoiceOption__checkIcon'>✔</span>
			</div> : '' }
			<div className='TealChoiceOption__content'>
				{ option.icon ? <i className={ option.icon }/> : '' }
				{ option.label !== '' ? <div>{ option.label }</div> : '' }
			</div>
		</div>
	}
}


export default ChoiceOption
