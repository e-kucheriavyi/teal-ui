import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import { Checkbox } from '../components/Inputs'

const meta = {
	title: 'TealUI/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Checkbox>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {
		disabled: false,
		value: false,
		name: 'test',
		required: false,
	},
}
