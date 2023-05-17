import { HTMLInputTypeAttribute } from 'react'


export type InputProps = {
	name: string
	type?: HTMLInputTypeAttribute
	hasError?: boolean
	placeholder?: string
	defaultValue?: string
	required?: boolean
	readOnly?: boolean
	disabled?: boolean
}


export type InputState = {}
