import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import ChoiceExample from './ChoiceExample'


const meta = {
	title: 'TealUI/Choice',
	component: ChoiceExample,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof ChoiceExample>


export default meta
type Story = StoryObj<typeof meta>


const options = [
	{ value: 'test-0', label: 'Item 0' },
	{ value: 'test-1', label: 'Item 1' },
	{ value: 'test-2', label: 'Item 2' },
]

export const Primary: Story = {
	args: {
		options,
		disabled: false,
		multi: false,
		mode: 'nullable',
		active: null,
		size: 'regular',
	},
}
