import React from 'react'
import { GroupProps, GroupState } from './index'
import './Group.css'
import { GroupItem, validateGroupProps } from '../index'
import { Item, PropsError } from '../../../types'


class Group extends React.Component<GroupProps, GroupState> {
	static defaultProps: GroupProps = {
		size: 'regular',
		items: [],
		active: [],
		disabled: false,
		multiChoise: false,
		mode: 'nullable',
		onChange: (choise: Item|Item[]|null) => { console.log(choise) },
	}

	state: GroupState = {
		hasErrors: false,
	}

	componentDidMount(): void {
		this.validateProps()
	}

	componentDidUpdate(prevProps: Readonly<GroupProps>, prevState: Readonly<GroupState>): void {
		const { active, items, multiChoise, mode } = this.props
		if (prevProps.active === active &&
			prevProps.items === items &&
			prevProps.multiChoise === multiChoise &&
			prevProps.mode === mode) {
			return
		}

		this.validateProps()
	}

	validateProps = () => {
		const result = validateGroupProps(this.props)

		if (result === '') {
			this.setState({ hasErrors: false })
			return
		}

		this.setState({ hasErrors: true }, () => {
			throw new PropsError(
				'Group',
				result
			)
		})
	}

	isActive = (item: Item) => {
		if (Array.isArray(this.props.active)) {
			return this.props.active.includes(item)
		}

		return this.props.active === item
	}

	isDisabled = (item: Item) => {
		const { disabled, mode } = this.props

		if (disabled || item.disabled) {
			return true
		}

		const active = this.isActive(item)

		if (mode === 'at_least_one' && active) {
			if (Array.isArray(this.props.active) && this.props.active.length > 1) {
				return false
			}
			return true
		}

		return false
	}

	prepareClasses = () => {
		const sizeClass = `TealGroup_${ this.props.size }`
		return `TealGroup ${sizeClass}`
	}

	handleSelect = (item: Item) => {
		if (this.props.multiChoise) {
			this.handleMultiSelect(item)
			return
		}

		this.handleSingleSelect(item)
	}

	handleSingleSelect = (item: Item) => {
		const { mode, active, onChange } = this.props

		if (mode === 'nullable' && item === active) {
			onChange(null)
			return
		}
		this.props.onChange(item)
	}

	handleMultiSelect = (item: Item) => {
		const active: Item[] = this.props.active as Item[]

		if (active.includes(item)) {
			const result = active.filter((activeItem: Item) => activeItem !== item)
			this.props.onChange(result)
			return
		}

		this.props.onChange([...active, item])
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
			{ this.props.items.map((item: Item, index: number) => {
				return <GroupItem
					key={ `TealGroupItem_${ item.value }_${ index }` }
					item={ item }
					active={ this.isActive(item) }
					disabled={ this.isDisabled(item) }
					multiChoise={ this.props.multiChoise }
					onClick={ () => { this.handleSelect(item) } }
				/>
			}) }
		</div>
	}
}


export default Group
