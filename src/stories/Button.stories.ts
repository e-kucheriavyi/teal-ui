import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import { Button } from '../components/Buttons'


const meta = {
	title: 'TealUI/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Button>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {
		disabled: false,
		type: 'clear',
		size: 'regular',
		nativeType: 'button',
		onClick: () => {},
		children: [
			'Text'
		]
	},
}
