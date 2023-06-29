import { TOption } from '../../../types'


export type TChoiceOptionProps = {
	option: TOption
	active: boolean
	disabled: boolean
	multiChoise: boolean
	onClick: () => void
}
