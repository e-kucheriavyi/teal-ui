import { SizeOptions } from '../../../types'


export type ToggleProps = {
	value: boolean
	name: string
	size: SizeOptions
	disabled: boolean
	required: boolean
	onChange: (value: boolean) => void
}
