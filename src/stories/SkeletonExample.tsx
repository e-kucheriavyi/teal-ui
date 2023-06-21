import React from 'react'
import { Skeleton, SkeletonProps } from '../components'


class SkeletonExample extends React.Component<SkeletonProps, {}> {
	static defaultProps: SkeletonProps = {
		height: '20px',
		width: '150px',
		fluid: false,
	}

	render = () => {
		return <div style={{ height: '150px' }}>
			<Skeleton {...this.props}/>
		</div>
	}
}


export default SkeletonExample
