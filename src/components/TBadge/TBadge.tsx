import React, { PropsWithChildren } from 'react'
import './TBadge.css'
import { TBadgeProps } from './index'


class TBadge extends React.Component<PropsWithChildren<TBadgeProps>> {
	static defaultProps: TBadgeProps = {
		size: 'slimmest',
		color: 'clear',
	}

	prepareClasses = () => {
		return [
			't-badge',
			`t-size-mode_${ this.props.size }`,
			`t-color-mode_${ this.props.color }`,
		].join(' ')
	}

	render = () => {
		return <div
			className={ this.prepareClasses() }
		>{ this.props.children ? this.props.children : 'TBadge' }</div>
	}
}


export default TBadge
