import { SizeOptions } from '../../../types'


export type ButtonProps = {
	disabled: boolean
	type: 'success'|'warning'|'danger'|'info'|'clear'|'white'
	size: SizeOptions
	nativeType: 'button'|'submit'|'reset'
	onClick: () => void
}
