export type CheckboxProps = {
	value: boolean
	name: string
	required: boolean
	disabled: boolean
	onChange: (value: boolean) => void
}

export type CheckboxState = {
	value: boolean
}
