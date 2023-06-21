import React from 'react'
import { Group, GroupProps } from '../components/Group'
import { Item } from '../types'


type GroupExampleState = {
	active: Item|Item[]|null
	props: GroupProps
}

class GroupExample extends React.Component<GroupProps, GroupExampleState> {
	static defaultProps: GroupProps = {
		size: 'regular',
		items: [],
		active: null,
		disabled: false,
		multiChoise: false,
		mode: 'nullable',
		onChange: (choise: Item|Item[]|null) => { console.log(choise) }
	}

	state: GroupExampleState = {
		active: null,
		props: {
			size: 'regular',
			items: [],
			active: null,
			disabled: false,
			multiChoise: false,
			mode: 'nullable',
			onChange: (choise: Item|Item[]|null) => { console.log(choise) }
		}
	}

	componentDidMount(): void {
		this.init()
	}

	componentDidUpdate(prevProps: GroupProps): void {
		if (JSON.stringify(prevProps) === JSON.stringify(this.props)) {
			return
		}
		this.init()
	}

	init() {
		const active: Item[] = []
		this.setState({
			active: this.props.multiChoise ? active : null,
			props: this.props
		})
	}

	handleChange = (active: Item|Item[]|null) => {
		this.setState({ active: active })
	}

	render = () => {
		let items = this.state.props.items

		if (items.length === 0) {
			items = this.props.items
		}
		return <Group
			{ ...this.state.props }
			items={ items }
			active={ this.state.active }
			onChange={ this.handleChange }
		/>
	}
}


export default GroupExample
