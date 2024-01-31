import React from 'react'
import ContentLoader from 'react-content-loader'

const BarChartSkeleton = props => {
	return (
		<ContentLoader
			speed={1}
			width={712}
			height={320}
			viewBox="0 0 712 320"
			backgroundColor="#dedede"
			foregroundColor="#c4c4c4"
			{...props}
		>
			<rect x="6" y="137" rx="0" ry="0" width="40" height="266" />
			<rect x="381" y="416" rx="0" ry="0" width="1" height="3" />
			<rect x="113" y="312" rx="0" ry="0" width="0" height="1" />
			<rect x="68" y="79" rx="0" ry="0" width="40" height="327" />
			<rect x="129" y="113" rx="0" ry="0" width="40" height="293" />
			<rect x="186" y="189" rx="0" ry="0" width="40" height="217" />
			<rect x="248" y="133" rx="0" ry="0" width="40" height="273" />
			<rect x="311" y="139" rx="0" ry="0" width="40" height="266" />
			<rect x="372" y="80" rx="0" ry="0" width="40" height="327" />
			<rect x="432" y="115" rx="0" ry="0" width="40" height="293" />
			<rect x="490" y="190" rx="0" ry="0" width="40" height="217" />
			<rect x="552" y="135" rx="0" ry="0" width="40" height="273" />
			<rect x="612" y="115" rx="0" ry="0" width="40" height="293" />
			<rect x="670" y="190" rx="0" ry="0" width="40" height="217" />
			<rect x="732" y="135" rx="0" ry="0" width="40" height="273" />
		</ContentLoader>

	)
}

export default BarChartSkeleton