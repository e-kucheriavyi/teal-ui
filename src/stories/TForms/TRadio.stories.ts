import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/main.css'
import TRadioExample from './TRadioExample'

const meta = {
	title: 'TealUI/TForms/TRadio',
	component: TRadioExample,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof TRadioExample>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {},
}
