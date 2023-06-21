import { Option } from '../../../types'


export type ChoiceOptionProps = {
	option: Option
	active: boolean
	disabled: boolean
	multiChoise: boolean
	onClick: () => void
}
