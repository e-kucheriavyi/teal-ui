export type RadioProps = {
	name: string
	value: string
	active: string
	disabled: boolean
	onChange: (value: string) => void
}

export type RadioState = {
	active: boolean
}
