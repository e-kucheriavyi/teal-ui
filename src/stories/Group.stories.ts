import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import GroupExample from './GroupExample'


const meta = {
	title: 'TealUI/Group',
	component: GroupExample,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof GroupExample>


export default meta
type Story = StoryObj<typeof meta>


const items = [
	{ value: 'test-0', label: 'Item 0' },
	{ value: 'test-1', label: 'Item 1' },
	{ value: 'test-2', label: 'Item 2' },
]

export const Primary: Story = {
	args: {
		items,
		disabled: false,
		multiChoise: false,
		mode: 'nullable',
		active: null,
		size: 'regular',
	},
}
