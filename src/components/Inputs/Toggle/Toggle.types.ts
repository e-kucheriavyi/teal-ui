import { SizeOptions } from '../../../types'


export type ToggleProps = {
	value: boolean
	name: string
	disabled: boolean
	required: boolean
	onChange: (value: boolean) => void
}

export type ToggleState = {
	value: boolean
}
