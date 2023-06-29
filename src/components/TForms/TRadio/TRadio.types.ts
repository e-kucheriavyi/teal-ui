export type TRadioProps = {
	name: string
	value: string
	active: string
	disabled: boolean
	onChange: (value: string) => void
}

export type TRadioState = {
	active: boolean
}
