import { TSizeOptions } from '../../types'


export type TButtonProps = {
	disabled: boolean
	color: 'success'|'warning'|'danger'|'info'|'clear'|'white'
	size: TSizeOptions
	nativeType: 'button'|'submit'|'reset'
	onClick: () => void
}
