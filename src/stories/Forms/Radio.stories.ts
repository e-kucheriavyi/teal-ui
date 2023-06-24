import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/main.css'
import RadioExample from './RadioExample'

const meta = {
	title: 'TealUI/Inputs/Radio',
	component: RadioExample,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof RadioExample>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {},
}
