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
	{ value: 'test-1', label: 'Item 1', activeClasses: 'TealDanger' },
	{ value: 'test-2', label: 'Item 2', activeClasses: 'TealSuccess' },
	{ value: 'test-3', label: 'Item 3' },
	{ value: 'test-4', label: 'Item 4' },
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
