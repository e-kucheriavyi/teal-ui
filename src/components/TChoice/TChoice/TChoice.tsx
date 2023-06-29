import React from 'react'
import { TChoiceProps, TChoiceState } from './index'
import './TChoice.css'
import { TChoiceOption, validateTChoiceProps } from '../index'
import { TOption, TPropsError } from '../../../types'


class TChoice extends React.Component<TChoiceProps, TChoiceState> {
	static defaultProps: TChoiceProps = {
		size: 'regular',
		options: [],
		active: [],
		disabled: false,
		multi: false,
		mode: 'nullable',
		onChange: (choise: TOption|TOption[]|null) => { console.log(choise) },
	}

	state: TChoiceState = {
		hasErrors: false,
	}

	componentDidMount(): void {
		this.validateProps()
	}

	componentDidUpdate(prevProps: Readonly<TChoiceProps>): void {
		const { active, options, multi, mode } = this.props
		if (prevProps.active === active &&
			prevProps.options === options &&
			prevProps.multi === multi &&
			prevProps.mode === mode) {
			return
		}

		this.validateProps()
	}

	validateProps = () => {
		const result = validateTChoiceProps(this.props)

		if (result === '') {
			this.setState({ hasErrors: false })
			return
		}

		this.setState({ hasErrors: true }, () => {
			throw new TPropsError(
				'TChoice',
				result
			)
		})
	}

	isActive = (option: TOption) => {
		if (Array.isArray(this.props.active)) {
			return this.props.active.includes(option)
		}

		return this.props.active === option
	}

	isDisabled = (option: TOption) => {
		const { disabled, mode } = this.props

		if (disabled || option.disabled) {
			return true
		}

		const active = this.isActive(option)

		if (mode === 'at_least_one' && active) {
			if (Array.isArray(this.props.active) && this.props.active.length > 1) {
				return false
			}
			return true
		}

		return false
	}

	prepareClasses = () => {
		const sizeClass = `t-choice_${ this.props.size }`
		return `t-choice ${ sizeClass }`
	}

	handleSelect = (option: TOption) => {
		if (this.props.multi) {
			this.handleMultiSelect(option)
			return
		}

		this.handleSingleSelect(option)
	}

	handleSingleSelect = (option: TOption) => {
		const { mode, active, onChange } = this.props

		if (mode === 'nullable' && option === active) {
			onChange(null)
			return
		}
		this.props.onChange(option)
	}

	handleMultiSelect = (option: TOption) => {
		const active: TOption[] = this.props.active as TOption[]

		if (active.includes(option)) {
			const result = active.filter((activeOption: TOption) => activeOption !== option)
			this.props.onChange(result)
			return
		}

		this.props.onChange([...active, option])
	}

	render = () => {
		if (this.state.hasErrors) {
			return <div
				className={ this.prepareClasses() }
			>
				<div className='text-red'>Invalid props! Check console for more info!</div>
			</div>
		}

		return <div
			className={ this.prepareClasses() }
		>
			{ this.props.options.map((option: TOption, index: number) => {
				return <TChoiceOption
					key={ `t-choice-option_${ option.value }_${ index }` }
					option={ option }
					active={ this.isActive(option) }
					disabled={ this.isDisabled(option) }
					multiChoise={ this.props.multi }
					onClick={ () => { this.handleSelect(option) } }
				/>
			}) }
		</div>
	}
}


export default TChoice
