import React from 'react'
import { GroupItemProps } from './index'
import './GroupItem.css'


class GroupItem extends React.Component<GroupItemProps, {}> {
	static defaultProps: GroupItemProps = {
		disabled: false,
		active: false,
		item: {
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
		const { item, active, disabled } = this.props

		return <div
			className={[
				'TealGroupItem',
				active ? 'TealGroupItem_active' : '',
				disabled ? 'TealGroupItem_disabled' : '',
			].join(' ')}
			onClick={ this.handleClick }
		>
			{ this.props.multiChoise ? <div className='TealGroupItem__checkContainer'>
				<span className='TealGroupItem__checkIcon'>✔</span>
			</div> : '' }
			<div className='TealGroupItem__content'>
				{ item.icon ? <i className={ item.icon }/> : '' }
				{ item.label !== '' ? <div>{ item.label }</div> : '' }
			</div>
		</div>
	}
}


export default GroupItem
