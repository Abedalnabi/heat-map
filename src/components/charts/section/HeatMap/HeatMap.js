import React from 'react';
import './Heatmap.css';

/**
 * HeatMap component displays a heatmap based on the data provided.
 * @param {Object} objData - An object containing xLabels, yLabels, and data for the heatmap.
 * @param {Object} colorMapping - An object mapping values to colors.
 * @param {boolean} showXLabel - A flag to show x labels in cells if true.
 * @param {boolean} showyLabel - A flag to show y labels in cells if true and showXLabel is false.
 * @param {string} color - A color string to be used when colorMapping is not provided.
 * @param {boolean} showValue - A flag to show values inside the cells if true.
 */

const HeatMap = ({ objData, colorMapping, showXLabel, showyLabel, color, showValue = true }) => {
	const { xLabels, yLabels, data } = objData;
	const reversedYLabels = [...yLabels].reverse();

	const maxData = Math.max(...data.map((item) => item.value || 0));

	const renderTableCell = (xLabel, yLabel, cellIndex) => {
		const cell = data.find((item) => item.x === xLabel && item.y === yLabel);
		const value =
			showXLabel && cell ? xLabel : showyLabel && cell ? yLabel : cell?.value ? cell?.value : xLabel ? cell?.x : null;

		const backgroundColor = color ? `rgba(${color},${value / maxData})` : undefined;
		let cellColor;
		if (colorMapping?.[value] !== undefined) {
			cellColor = colorMapping[value];
		} else {
			const range = colorMapping?.ranges.find((r) => typeof value === 'number' && value > r.min && value <= r.max);
			cellColor = range ? range.color : backgroundColor;
		}

		return (
			<td
				key={cellIndex}
				style={{
					backgroundColor: cellColor,
				}}
			>
				{showValue && value}
			</td>
		);
	};

	const renderTableRow = (yLabel, rowIndex) => (
		<tr key={rowIndex}>
			<td>{yLabel}</td>
			{xLabels.map((xLabel, cellIndex) => renderTableCell(xLabel, yLabel, cellIndex))}
		</tr>
	);

	const renderFooterRow = () => (
		<tr>
			<td></td>
			{xLabels.map((label, index) => (
				<td key={index}>{label}</td>
			))}
		</tr>
	);

	return (
		<div className="heatmap-container">
			<table className="heatmap">
				<tbody>{reversedYLabels.map((yLabel, rowIndex) => renderTableRow(yLabel, rowIndex))}</tbody>
				<tfoot>{renderFooterRow()}</tfoot>
			</table>
		</div>
	);
};

export default HeatMap;
