import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import TSkeletonExample from './TSkeletonExample'


const meta = {
	title: 'TealUI/TSkeleton',
	component: TSkeletonExample,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof TSkeletonExample>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {
		height: '20px',
		width: '150px',
		fluid: false,
	},
}
