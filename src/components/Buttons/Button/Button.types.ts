export type ButtonProps = {
	disabled: boolean
	type: 'success'|'warning'|'danger'|'info'|'clear'|'white'
	size: 'slim'|'regular'|'tall'|'fluid'
	nativeType: 'button'|'submit'|'reset'
	onClick: () => void
}
