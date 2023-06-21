import React from 'react'
import { Choice, ChoiceProps } from '../components'
import { Option } from '../types'


type ChoiceExampleState = {
	active: Option|Option[]|null
	props: ChoiceProps
}

class ChoiceExample extends React.Component<ChoiceProps, ChoiceExampleState> {
	static defaultProps: ChoiceProps = {
		size: 'regular',
		options: [],
		active: null,
		disabled: false,
		multi: false,
		mode: 'nullable',
		onChange: (choise: Option|Option[]|null) => { console.log(choise) }
	}

	state: ChoiceExampleState = {
		active: null,
		props: {
			size: 'regular',
			options: [],
			active: null,
			disabled: false,
			multi: false,
			mode: 'nullable',
			onChange: (choise: Option|Option[]|null) => { console.log(choise) }
		}
	}

	componentDidMount(): void {
		this.init()
	}

	componentDidUpdate(prevProps: ChoiceProps): void {
		if (JSON.stringify(prevProps) === JSON.stringify(this.props)) {
			return
		}
		this.init()
	}

	init() {
		const active: Option[] = []
		this.setState({
			active: this.props.multi ? active : null,
			props: this.props
		})
	}

	handleChange = (active: Option|Option[]|null) => {
		this.setState({ active: active })
	}

	render = () => {
		let options = this.state.props.options

		if (options.length === 0) {
			options = this.props.options
		}
		return <Choice
			{ ...this.state.props }
			options={ options }
			active={ this.state.active }
			onChange={ this.handleChange }
		/>
	}
}


export default ChoiceExample
