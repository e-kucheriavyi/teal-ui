export type ButtonProps = {
	disabled: boolean
	type: 'success'|'warning'|'danger'|'info'
	size: 'small'|'regular'|'large'
	nativeType: 'button'|'submit'|'reset'
	onClick: () => void
}
