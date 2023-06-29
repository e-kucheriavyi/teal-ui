export type TCheckboxProps = {
	value: boolean
	name: string
	required: boolean
	disabled: boolean
	onChange: (value: boolean) => void
}

export type TCheckboxState = {
	value: boolean
}
