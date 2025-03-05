import React from 'react';
import HeatMap from './section/HeatMap/HeatMap';
import BulletChart from './section/bulletCharts/BulletChart';
import Histogram from './section/Histogram/Histogram';
import Pie from './section/Pie/Pie';
import BoxPlot from './section/BoxPlot/BoxPlot';

export default function Index({ mode, ...rest }) {
	return (
		<>
			{mode === 'heat-map' && <HeatMap {...rest} />}
			{mode === 'bullet-charts' && <BulletChart {...rest} />}
			{mode === 'histogram' && <Histogram {...rest} />}
			{mode === 'pie' && <Pie {...rest} />}
			{mode === 'box-plot' && <BoxPlot {...rest} />}
		</>
	);
}
