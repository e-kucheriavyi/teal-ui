export type ButtonProps = {
	text: string
	type: 'button'|'reset'|'submit'
	color: 'teal'|'orange'|'white'|'dark'
	outline: boolean
	isDisabled: boolean
	onClick: () => void
}
