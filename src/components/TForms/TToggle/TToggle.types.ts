export type TToggleProps = {
	value: boolean
	name: string
	disabled: boolean
	required: boolean
	onChange: (value: boolean) => void
}

export type TToggleState = {
	value: boolean
}
