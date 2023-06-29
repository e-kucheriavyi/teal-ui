import React from 'react'
import './TSkeleton.css'
import { TSkeletonProps } from './index'


class TSkeleton extends React.Component<TSkeletonProps> {
	static defaultProps: TSkeletonProps = {
		height: '',
		width: '',
		fluid: false,
	}

	render = () => {
		const { height, width, fluid } = this.props
		return <div
			className={[
				't-skeleton',
				fluid ? 't-skeleton_fluid' : '',
			].join(' ')}
			style={{
				height,
				width,
			}}
		></div>
	}
}


export default TSkeleton
