// src/Histogram.js
import React from 'react';

const Histogram = ({
	objData,
	width = 400,
	height = 200,
	barColor = '#2196f3',
	axisColor = '#000',
	padding = 30,
	labelColor = '#000',
	barLabelColor = '#000',
	tickSize = 5,
	yAxisTickCount = 5,
}) => {
	const { data } = objData;
	if (!data || data.length === 0) {
		return <p>No data provided</p>;
	}

	const values = data.map((d) => d.value);
	const value = Math.min(...values);
	const maxValue = Math.max(...values);
	const minValue = Math.min(...values) - value;
	const binWidth = (width - 2 * padding) / data.length;

	const yAxisTickValues = Array.from(
		{ length: yAxisTickCount },
		(_, i) => minValue + (i * (maxValue - minValue)) / (yAxisTickCount - 1)
	);

	return (
		<svg width={width} height={height}>
			{/* Bars */}
			{data.map((d, index) => {
				const barHeight = ((d.value - minValue) / (maxValue - minValue)) * (height - 2 * padding);
				const x = padding + index * binWidth;
				const y = height - barHeight - padding;

				return <rect key={`bar-${index}`} x={x} y={y} width={binWidth - 1} height={barHeight} fill={barColor} />;
			})}

			{/* Bar Labels */}
			{data.map((d, index) => {
				const barHeight = ((d.value - minValue) / (maxValue - minValue)) * (height - 2 * padding);
				const x = padding + index * binWidth + binWidth / 2;
				const y = height - barHeight - padding - 5;

				return (
					<text key={`label-${index}`} x={x} y={y} textAnchor="middle" fontSize="12px" fill={barLabelColor}>
						{d.value}
					</text>
				);
			})}

			{/* X-Axis */}
			<line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke={axisColor} />

			{/* X-Axis Ticks and Labels */}
			{data.map((d, index) => {
				const x = padding + index * binWidth;
				const y = height - padding;

				return (
					<>
						<line key={`x-tick-${index}`} x1={x} y1={y} x2={x} y2={y + tickSize} stroke={axisColor} />
						<text
							key={`x-label-${index}`}
							x={x + binWidth / 2}
							y={y + tickSize * 2}
							textAnchor="middle"
							fontSize="12px"
							fill={labelColor}
						>
							{d.x}
						</text>
					</>
				);
			})}

			{/* Y-Axis */}
			<line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke={axisColor} />

			{/* Y-Axis Ticks and Labels */}
			{yAxisTickValues.map((tickValue, index) => {
				const y = height - padding - ((tickValue - minValue) / (maxValue - minValue)) * (height - 2 * padding);
				return (
					<>
						<line key={`y-tick-${index}`} x1={padding - tickSize} y1={y} x2={padding} y2={y} stroke={axisColor} />
						<text
							key={`y-label-${index}`}
							x={padding - tickSize * 2}
							y={y + 4} // Small offset to align text vertically
							textAnchor="end"
							fontSize="12px"
							fill={labelColor}
						>
							{Math.round(tickValue * 100) / 100}
						</text>
					</>
				);
			})}
		</svg>
	);
};

export default Histogram;
