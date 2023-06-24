import React, { PropsWithChildren } from 'react'
import './Badge.css'
import { BadgeProps } from './index'


class Badge extends React.Component<PropsWithChildren<BadgeProps>, {}> {
	static defaultProps: BadgeProps = {
		size: 'slim',
		color: 'clear',
	}

	prepareClasses = () => {
		return [
			'TealBadge',
			`TealSizeMode_${ this.props.size }`,
			`TealColorMode_${ this.props.color }`,
		].join(' ')
	}

	render = () => {
		return <div
			className={ this.prepareClasses() }
		>{ this.props.children ? this.props.children : 'Badge' }</div>
	}
}


export default Badge
