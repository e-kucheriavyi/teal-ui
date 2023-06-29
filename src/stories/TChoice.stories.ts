import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import TChoiceExample from './TChoiceExample'


const meta = {
	title: 'TealUI/TChoice',
	component: TChoiceExample,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof TChoiceExample>


export default meta
type Story = StoryObj<typeof meta>


const options = [
	{ value: 'test-0', label: 'Item 0' },
	{ value: 'test-1', label: 'Item 1', activeClasses: 't-ColorMode_danger' },
	{ value: 'test-2', label: 'Item 2', activeClasses: 't-ColorMode_success' },
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
