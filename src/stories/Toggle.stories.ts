import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import { Toggle } from '../components'


const meta = {
	title: 'TealUI/Toggle',
	component: Toggle,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Toggle>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {
		disabled: false,
		value: false,
		name: 'text',
		required: false,
	},
}
