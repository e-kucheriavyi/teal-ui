import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import { Badge } from '../components'


const meta = {
	title: 'TealUI/Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Badge>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {
		size: 'slim',
		color: 'clear',
	},
}
