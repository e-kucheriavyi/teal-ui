import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import { TButton } from '../components'


const meta = {
	title: 'TealUI/TButton',
	component: TButton,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof TButton>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {
		disabled: false,
		color: 'clear',
		size: 'regular',
		nativeType: 'button',
		onClick: () => {},
		children: [
			'Text'
		]
	},
}
