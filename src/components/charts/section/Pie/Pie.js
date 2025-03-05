import React, { useEffect, useRef } from 'react';

const PieChart = ({ objData, colorMapping }) => {
	const { data } = objData;

	const canvasRef = useRef(null);

	const drawChart = () => {
		const ctx = canvasRef.current.getContext('2d');
		const totalValue = data.reduce((acc, curr) => acc + parseFloat(curr.value), 0);
		let startAngle = 0;

		data.forEach((item) => {
			const value = parseFloat(item.value);
			const sliceAngle = (2 * Math.PI * value) / totalValue;

			ctx.beginPath();
			ctx.moveTo(canvasRef.current.width / 2, canvasRef.current.height / 2);
			ctx.arc(
				canvasRef.current.width / 2,
				canvasRef.current.height / 2,
				Math.min(canvasRef.current.width / 2, canvasRef.current.height / 2),
				startAngle,
				startAngle + sliceAngle
			);
			ctx.closePath();

			ctx.fillStyle = colorMapping?.[item.x];
			ctx.fill();

			// Draw label
			const labelX =
				canvasRef.current.width / 2 +
				(Math.min(canvasRef.current.width / 2, canvasRef.current.height / 2) / 2) * Math.cos(startAngle + sliceAngle / 2);
			const labelY =
				canvasRef.current.height / 2 +
				(Math.min(canvasRef.current.width / 2, canvasRef.current.height / 2) / 2) * Math.sin(startAngle + sliceAngle / 2);

			ctx.fillStyle = 'white';
			ctx.font = '16px Arial';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(item.x, labelX, labelY);

			startAngle += sliceAngle;
		});
	};

	useEffect(() => {
		drawChart();
	}, []);

	return (
		<>
			<canvas ref={canvasRef} width="200" height="200"></canvas>
		</>
	);
};

export default PieChart;
