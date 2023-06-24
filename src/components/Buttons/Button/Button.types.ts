import { SizeOptions } from '../../../types'


export type ButtonProps = {
	disabled: boolean
	color: 'success'|'warning'|'danger'|'info'|'clear'|'white'
	size: SizeOptions
	nativeType: 'button'|'submit'|'reset'
	onClick: () => void
}
