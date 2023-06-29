import React from 'react'
import { TChoice, TChoiceProps } from '../components'
import { TOption } from '../types'


type TChoiceExampleState = {
	active: TOption|TOption[]|null
	props: TChoiceProps
}

class TChoiceExample extends React.Component<TChoiceProps, TChoiceExampleState> {
	static defaultProps: TChoiceProps = {
		size: 'regular',
		options: [],
		active: null,
		disabled: false,
		multi: false,
		mode: 'nullable',
		onChange: (choise: TOption|TOption[]|null) => { console.log(choise) }
	}

	state: TChoiceExampleState = {
		active: null,
		props: {
			size: 'regular',
			options: [],
			active: null,
			disabled: false,
			multi: false,
			mode: 'nullable',
			onChange: (choise: TOption|TOption[]|null) => { console.log(choise) }
		}
	}

	componentDidMount(): void {
		this.init()
	}

	componentDidUpdate(prevProps: TChoiceProps): void {
		if (JSON.stringify(prevProps) === JSON.stringify(this.props)) {
			return
		}
		this.init()
	}

	init() {
		const active: TOption[] = []
		this.setState({
			active: this.props.multi ? active : null,
			props: this.props
		})
	}

	handleChange = (active: TOption|TOption[]|null) => {
		this.setState({ active: active })
	}

	render = () => {
		let options = this.state.props.options

		if (options.length === 0) {
			options = this.props.options
		}
		return <TChoice
			{ ...this.state.props }
			options={ options }
			active={ this.state.active }
			onChange={ this.handleChange }
		/>
	}
}


export default TChoiceExample
