import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import { TBadge } from '../components'


const meta = {
	title: 'TealUI/TBadge',
	component: TBadge,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof TBadge>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {
		size: 'slim',
		color: 'clear',
	},
}
