import React from 'react'
import { TSkeleton, TSkeletonProps } from '../components'


class TSkeletonExample extends React.Component<TSkeletonProps, {}> {
	static defaultProps: TSkeletonProps = {
		height: '20px',
		width: '150px',
		fluid: false,
	}

	render = () => {
		return <div style={{ height: '150px' }}>
			<TSkeleton { ...this.props }/>
		</div>
	}
}


export default TSkeletonExample
