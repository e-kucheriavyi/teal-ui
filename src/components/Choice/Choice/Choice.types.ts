import { SizeOptions, Option } from '../../../types'


export type ChoiceProps = {
	size: SizeOptions
	options: Option[]
	active: Option[]|Option|null
	disabled: boolean
	multi: boolean
	mode: 'nullable'|'at_least_one'|'range'
	onChange: (choice: Option|Option[]|null) => void
}


export type ChoiceState = {
	hasErrors: boolean
}
