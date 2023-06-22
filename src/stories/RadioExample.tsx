import React from 'react'
import { Radio } from '../components'


class RadioExample extends React.Component {
	state = {
		active: 'option-1',
	}

	handleChange = (value: string) => {
		this.setState({ active: value })
	}

	render = () => {
		return <form
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				gap: '10px',
			}}
		>
			<Radio
				name='choice'
				value='option-1'
				active={ this.state.active }
				onChange={ this.handleChange }
			/>
			<Radio
				name='choice'
				value='option-2'
				active={ this.state.active }
				onChange={ this.handleChange }
			/>
			<Radio
				name='choice'
				value='option-3'
				active={ this.state.active }
				onChange={ this.handleChange }
			/>
		</form>
	}
}


export default RadioExample
