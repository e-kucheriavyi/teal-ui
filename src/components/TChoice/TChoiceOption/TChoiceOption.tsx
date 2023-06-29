import React from 'react'
import { TChoiceOptionProps } from './index'
import './TChoiceOption.css'


class TChoiceOption extends React.Component<TChoiceOptionProps> {
	static defaultProps: TChoiceOptionProps = {
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

		const acctiveClasses = `t-choice-option_active ${ this.props.option.activeClasses }`

		return <div
			className={[
				't-choice-option',
				active ? acctiveClasses : '',
				disabled ? 't-choice-option_disabled' : '',
			].join(' ')}
			onClick={ this.handleClick }
		>
			{ this.props.multiChoise ? <div className='t-choice-option__check-container'>
				<span className='t-choice-option__check-icon'>✔</span>
			</div> : '' }
			<div className='t-choice-option__content'>
				{ option.icon ? <i className={ option.icon }/> : '' }
				{ option.label !== '' ? <div>{ option.label }</div> : '' }
			</div>
		</div>
	}
}


export default TChoiceOption
