import React from 'react';
import PropTypes from 'prop-types';

const BoxPlot = ({
	data = [1, 6, 2, 3, 5],
	width,
	height,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingBottom,
	xLabels = [1, 'B', 'C', 'D', 'E', '5', '9'],
}) => {
	// Sort the data
	const sortedData = data.slice().sort((a, b) => a - b);

	// Calculate quartiles
	const q1 = sortedData[Math.floor(sortedData.length * 0.25)];
	const q2 = sortedData[Math.floor(sortedData.length * 0.5)];
	const q3 = sortedData[Math.floor(sortedData.length * 0.75)];

	console.log('q1', q2);
	// Calculate interquartile range
	const iqr = q3 - q1;
	console.log('iqr', iqr);

	// Calculate whiskers
	const lowerWhisker = q1 - 1.5 * iqr;
	const upperWhisker = q3 + 1.5 * iqr;

	const innerWidth = width - paddingLeft - paddingRight;
	const innerHeight = height - paddingTop - paddingBottom;

	return (
		<svg width={width} height={height}>
			{/* Box plot */}
			<g transform={`translate(${paddingLeft}, ${paddingTop})`}>
				<rect
					x={innerWidth * 0.25}
					y={innerHeight * (1 - (q3 - lowerWhisker) / (upperWhisker - lowerWhisker))}
					width={innerWidth * 0.5}
					height={(innerHeight * (q3 - q1)) / (upperWhisker - lowerWhisker)}
					fill="blue"
				/>
				<line
					x1={innerWidth * 0.5}
					y1={innerHeight * (1 - (q2 - lowerWhisker) / (upperWhisker - lowerWhisker))}
					x2={innerWidth * 0.5}
					y2={innerHeight * (1 - (q2 - lowerWhisker) / (upperWhisker - lowerWhisker))}
					stroke="black"
				/>
			</g>

			{/* X-axis */}
			<line
				x1={paddingLeft}
				y1={height - paddingBottom}
				x2={width - paddingRight}
				y2={height - paddingBottom}
				stroke="black"
			/>
			<text x={width / 2} y={height - paddingBottom + 30} textAnchor="middle" fontSize="14">
				X-axis
			</text>

			{/* X-axis labels */}
			{xLabels.map((label, index) => (
				<text
					key={index}
					x={paddingLeft + (innerWidth / (xLabels.length - 1)) * index}
					y={height - paddingBottom + 20}
					textAnchor="middle"
					fontSize="12"
				>
					{label}
				</text>
			))}

			{/* Y-axis */}
			<line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={height - paddingBottom} stroke="black" />
			<text
				x={paddingLeft - 30}
				y={height / 2}
				textAnchor="middle"
				fontSize="14"
				transform={`rotate(-90, ${paddingLeft - 30}, ${height / 2})`}
			>
				Y-axis
			</text>
		</svg>
	);
};

BoxPlot.propTypes = {
	data: PropTypes.arrayOf(PropTypes.number).isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	paddingLeft: PropTypes.number,
	paddingRight: PropTypes.number,
	paddingTop: PropTypes.number,
	paddingBottom: PropTypes.number,
	xLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

BoxPlot.defaultProps = {
	width: 400,
	height: 200,
	paddingLeft: 40,
	paddingRight: 20,
	paddingTop: 20,
	paddingBottom: 40,
};

export default BoxPlot;
