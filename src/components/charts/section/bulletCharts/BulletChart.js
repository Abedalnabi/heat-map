import React from 'react';
import './BulletChart.css';

const BulletChart = ({ objData, colorMapping, showXLabel, showyLabel, showValue = true }) => {
	const { xLabels, yLabels, data } = objData;
	const reversedYLabels = [...yLabels].reverse();

	const renderTableCell = (xLabel, yLabel, cellIndex) => {
		const cell = data.find((item) => item.x === xLabel && item.y === yLabel);
		const value =
			showXLabel && cell ? xLabel : showyLabel && cell ? yLabel : cell?.value ? cell?.value : xLabel ? cell?.x : null;
		const bulletColor = colorMapping?.[value] !== undefined ? colorMapping[value] : 'black';

		return (
			<td className="bullet-svg" key={cellIndex}>
				<div>
					<div>{showValue && value}</div>
					<div>
						{cell && (
							<svg width="20" height="20">
								<circle cx="10" cy="10" r="7" fill={bulletColor} />
							</svg>
						)}
					</div>
				</div>
			</td>
		);
	};

	const renderTableRow = (yLabel, rowIndex) => (
		<tr key={rowIndex}>
			<td className="foot-row">{yLabel}</td>
			{xLabels.map((xLabel, cellIndex) => renderTableCell(xLabel, yLabel, cellIndex))}
		</tr>
	);

	const renderFooterRow = () => (
		<tr>
			<td className="foot-row"></td>
			{xLabels.map((label, index) => (
				<td className="foot-row" key={index}>
					{label}
				</td>
			))}
		</tr>
	);

	return (
		<div className="bulletchart-container">
			<table className="bulletchart">
				<tbody>{reversedYLabels.map((yLabel, rowIndex) => renderTableRow(yLabel, rowIndex))}</tbody>
				<tfoot>{renderFooterRow()}</tfoot>
			</table>
		</div>
	);
};

export default BulletChart;
