import React from 'react'
import { LabeledInputProps } from './LabeledInput.types'
import { Input } from '../inputs'


class LabeledInput extends React.Component<LabeledInputProps> {
	static defaultProps: LabeledInputProps = {
		label: '',
		input: {
			name: '',
		}
	}

	render = () => {
		return <label className='col gap-1'>
			<div className='text-dark-2'>{ this.props.label }</div>
			<Input { ...this.props.input } />
		</label>
	}
}


export default LabeledInput
