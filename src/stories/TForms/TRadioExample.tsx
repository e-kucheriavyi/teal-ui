import React from 'react'
import { TRadio } from '../../components'


class TRadioExample extends React.Component {
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
			<TRadio
				name='choice'
				value='option-1'
				active={ this.state.active }
				onChange={ this.handleChange }
			/>
			<TRadio
				name='choice'
				value='option-2'
				active={ this.state.active }
				onChange={ this.handleChange }
			/>
			<TRadio
				name='choice'
				value='option-3'
				active={ this.state.active }
				onChange={ this.handleChange }
			/>
		</form>
	}
}


export default TRadioExample
