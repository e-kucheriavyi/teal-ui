import React from 'react'
import { ChoiceProps, ChoiceState } from './index'
import './Choice.css'
import { ChoiceOption, validateChoiceProps } from '../index'
import { Option, PropsError } from '../../../types'


class Choice extends React.Component<ChoiceProps, ChoiceState> {
	static defaultProps: ChoiceProps = {
		size: 'regular',
		options: [],
		active: [],
		disabled: false,
		multi: false,
		mode: 'nullable',
		onChange: (choise: Option|Option[]|null) => { console.log(choise) },
	}

	state: ChoiceState = {
		hasErrors: false,
	}

	componentDidMount(): void {
		this.validateProps()
	}

	componentDidUpdate(prevProps: Readonly<ChoiceProps>, prevState: Readonly<ChoiceState>): void {
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
		const result = validateChoiceProps(this.props)

		if (result === '') {
			this.setState({ hasErrors: false })
			return
		}

		this.setState({ hasErrors: true }, () => {
			throw new PropsError(
				'Choice',
				result
			)
		})
	}

	isActive = (option: Option) => {
		if (Array.isArray(this.props.active)) {
			return this.props.active.includes(option)
		}

		return this.props.active === option
	}

	isDisabled = (option: Option) => {
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
		const sizeClass = `TealChoice_${ this.props.size }`
		return `TealChoice ${sizeClass}`
	}

	handleSelect = (option: Option) => {
		if (this.props.multi) {
			this.handleMultiSelect(option)
			return
		}

		this.handleSingleSelect(option)
	}

	handleSingleSelect = (option: Option) => {
		const { mode, active, onChange } = this.props

		if (mode === 'nullable' && option === active) {
			onChange(null)
			return
		}
		this.props.onChange(option)
	}

	handleMultiSelect = (option: Option) => {
		const active: Option[] = this.props.active as Option[]

		if (active.includes(option)) {
			const result = active.filter((activeOption: Option) => activeOption !== option)
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
			{ this.props.options.map((option: Option, index: number) => {
				return <ChoiceOption
					key={ `TealChoiceOption_${ option.value }_${ index }` }
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


export default Choice
