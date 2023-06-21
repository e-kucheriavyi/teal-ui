import { Item } from '../../../types'


export type GroupItemProps = {
	item: Item
	active: boolean
	disabled: boolean
	multiChoise: boolean
	onClick: () => void
}
