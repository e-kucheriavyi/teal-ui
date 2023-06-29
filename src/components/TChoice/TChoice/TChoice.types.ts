import { TSizeOptions, TOption } from '../../../types'


export type TChoiceProps = {
	size: TSizeOptions
	options: TOption[]
	active: TOption[]|TOption|null
	disabled: boolean
	multi: boolean
	mode: 'nullable'|'at_least_one'|'range'
	onChange: (choice: TOption|TOption[]|null) => void
}


export type TChoiceState = {
	hasErrors: boolean
}
