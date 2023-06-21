import { SizeOptions, Item } from '../../../types'


export type GroupProps = {
	size: SizeOptions
	items: Item[]
	active: Item[]|Item|null
	disabled: boolean
	multiChoise: boolean
	mode: 'nullable'|'at_least_one'|'range'
	onChange: (choise: Item|Item[]|null) => void
}


export type GroupState = {
	hasErrors: boolean
}
