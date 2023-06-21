import type { Meta, StoryObj } from '@storybook/react'
import '../styles/main.css'
import SkeletonExample from './SkeletonExample'


const meta = {
	title: 'TealUI/Skeleton',
	component: SkeletonExample,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof SkeletonExample>


export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
	args: {
		height: '20px',
		width: '150px',
		fluid: false,
	},
}
