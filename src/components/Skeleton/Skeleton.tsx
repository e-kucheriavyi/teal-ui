import React from 'react'
import './Skeleton.css'
import { SkeletonProps } from './index'


class Skeleton extends React.Component<SkeletonProps, {}> {
	static defaultProps: SkeletonProps = {
		height: '',
		width: '',
		fluid: false,
	}

	render = () => {
		const { height, width, fluid } = this.props
		return <div
			className={[
				'Skeleton',
				fluid ? 'Skeleton_fluid' : '',
			].join(' ')}
			style={{
				height,
				width,
			}}
		></div>
	}
}


export default Skeleton
