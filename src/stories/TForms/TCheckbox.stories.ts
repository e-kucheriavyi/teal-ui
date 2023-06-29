import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/main.css'
import { TCheckbox } from '../../components'

const meta = {
	title: 'TealUI/TForms/TCheckbox',
	component: TCheckbox,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof TCheckbox>


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
