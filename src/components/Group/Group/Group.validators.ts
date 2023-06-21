import { Item } from '../../../types'
import { GroupProps } from './index'


export function validateGroupActiveItem(items: Item[], item: Item): string {
	if (items.includes(item)) {
		return ''
	}

	return '`active` item/s should be in `items` prop'
}


export function validateGroupProps(props: GroupProps): string {
	const { items, active, multiChoise, mode } = props
	const isActiveArray = Array.isArray(active)

	if (!multiChoise && mode === 'range') {
		return '`range` mode is only for multi coise groups'
	}

	if (multiChoise && !isActiveArray) {
		return '`active` prop should be an array if group is multi choise'
	}

	if (!multiChoise && isActiveArray) {
		return '`active` prop should be an Item pointer or null if group is single choise'
	}

	if (!Array.isArray(items) || items.length === 0) {
		return '`items` prop must be an array with more than 0 items'
	}

	if (active === null) {
		return ''
	}

	let activeItems = isActiveArray ? [...active] : [active]

	let res = ''

	activeItems.every((item: Item) => {
		res = validateGroupActiveItem(items, item)

		if (res !== '') {
			return false
		}

		return true
	})

	return res
}
