import { Option } from '../../../types'
import { ChoiceProps } from './index'


export function validateActiveChoiceOption(options: Option[], option: Option): string {
	if (options.includes(option)) {
		return ''
	}

	return '`active` option/s should be in `options` prop'
}


export function validateChoiceProps(props: ChoiceProps): string {
	const { options, active, multi, mode } = props
	const isActiveArray = Array.isArray(active)

	if (!multi && mode === 'range') {
		return '`range` mode is only for multi choice'
	}

	if (multi && !isActiveArray) {
		return '`active` prop should be an array if it is multi choice'
	}

	if (!multi && isActiveArray) {
		return '`active` prop should be an Option pointer or null if it is single choice'
	}

	if (!Array.isArray(options) || options.length === 0) {
		return '`options` prop must be an array with more than 0 items'
	}

	if (active === null) {
		return ''
	}

	let activeOptions = isActiveArray ? [...active] : [active]

	let res = ''

	activeOptions.every((option: Option) => {
		res = validateActiveChoiceOption(options, option)

		if (res !== '') {
			return false
		}

		return true
	})

	return res
}
