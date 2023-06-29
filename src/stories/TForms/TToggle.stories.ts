import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/main.css'
import { TToggle } from '../../components'


const meta = {
	title: 'TealUI/TForms/TToggle',
	component: TToggle,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof TToggle>


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
