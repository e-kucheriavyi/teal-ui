import { SizeOptions } from '../../types'


export type ToggleProps = {
	value: boolean
	name: string
	size: SizeOptions
	disabled: boolean
	onChange: (value: boolean) => void
}
