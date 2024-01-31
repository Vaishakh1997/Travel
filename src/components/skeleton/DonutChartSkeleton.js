import React from 'react'
import ContentLoader from 'react-content-loader'

const DonutChartSkeleton = props => {
	return (
		<ContentLoader
			speed={2}
			width={370}
			height={550}
			viewBox="0 0 370 550"
			backgroundColor="#dedede"
			foregroundColor="#c2c2c2"
			{...props}
		>
			<circle cx="184" cy="132" r="84" />
			<rect x="20" y="290" rx="5" ry="5" width="240" height="10" />
			<rect x="20" y="330" rx="5" ry="5" width="240" height="10" />
			<rect x="300" y="415" rx="5" ry="5" width="50" height="10" />
			<rect x="20" y="371" rx="5" ry="5" width="240" height="10" />
			<rect x="300" y="371" rx="5" ry="5" width="50" height="10" />
			<rect x="10" y="445" rx="5" ry="5" width="240" height="10" />
			<rect x="316" y="445" rx="5" ry="5" width="50" height="10" />
			<rect x="300" y="328" rx="5" ry="5" width="50" height="10" />
			<rect x="300" y="288" rx="5" ry="5" width="50" height="10" />
			<rect x="20" y="415" rx="5" ry="5" width="240" height="10" />
			<rect x="297" y="448" rx="5" ry="5" width="50" height="5" />
		</ContentLoader>
	)
}

export default DonutChartSkeleton