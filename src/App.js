import React, { useState } from 'react';
import './App.css';
import { RadioButtons, Paper, Grid, Typography } from '@publicapps/toolbox-client-app';
import Charts from './components/charts/index';

function AppContainer() {
	const [appState, setAppState] = useState({
		mode: 'heat-map',
		mode1: 'heat-map',
		color: '255,255,0',
		showValue: false,
		showLabel: '',
	});

	const handleEvents = (option) => {
		setAppState({ ...appState, mode: option.target.id });
	};

	const handleHideValuesMode = (option) => {
		setAppState({ ...appState, mode1: option.target.id });
	};

	const handleHideValues = (option) => {
		const showValue = Number(option.target.id) !== 0;
		setAppState({ ...appState, showValue });
	};

	const handelChangeColor = (option) => {
		setAppState({ ...appState, color: option.target.id });
	};

	const handelChangeShowLabel = (option) => {
		setAppState({ ...appState, showLabel: option.target.id });
	};
	const objData = {
		xLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
		yLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
		data:
			appState.mode === 'pie'
				? [
						{ x: 'JavaScript', value: '30%' },
						{ x: 'Java', value: '50%' },
						{ x: 'C++', value: '20%' },
				  ]
				: appState.mode === 'histogram'
				? [
						{ x: 'Very Low', value: 90 },
						{ x: 'Medium', value: 30 },
						{ x: 'Very High', value: 50 },
				  ]
				: [
						{ x: 'Very High', y: 'Low', value: 'C++' },
						{ x: 'Very Low', y: 'Very High', value: 'Java' },
						{ x: 'Medium', y: 'Medium', value: 'C#' },
						{ x: 'Medium', y: 'Low', value: 16 },
				  ],
	};

	const objData2 = {
		xLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
		yLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
		data: [
			{ x: 'Very High', y: 'Low', value: 'C++' },
			{ x: 'Very Low', y: 'Very High', value: 'Java' },
			{ x: 'Medium', y: 'Medium', value: 'C#' },
			{ x: 'Medium', y: 'Low', value: 16 },
		],
	};

	const objDataGradient = {
		xLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
		yLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
		data: [
			{ x: 'Very High', y: 'Low', value: 1 },
			{ x: 'Very Low', y: 'Very High', value: 4 },
			{ x: 'Medium', y: 'Medium', value: 5 },
			{ x: 'Very Low', y: 'Very Low', value: 10 },
			{ x: 'Low', y: 'Low', value: 16 },
		],
	};

	const objDataPie = {
		data: [
			{ x: 'JavaScript', value: '30%' },
			{ x: 'Java', value: '50%' },
			{ x: 'C++', value: '20%' },
		],
	};

	const objDataHistogram = {
		data: [
			{ x: 'Very Low', value: 90 },
			{ x: 'Medium', value: 30 },
			{ x: 'Very High', value: 50 },
		],
	};

	const colorMapping = {
		Java: 'red',
		JavaScript: 'green',
		'C#': 'yellow',
		'C++': 'blue',
		Medium: 'green',
		5: 'green',
		10: 'yellow',
		15: 'orange',
		ranges: [
			{ min: 15, max: 30, color: 'red' },
			{ min: 60, max: 90, color: 'purple' }, // Add another range
		],
	};

	return (
		<React.Fragment>
			<Typography as="h4" p-2>
				Charts
			</Typography>

			<Typography as="body1" p-2>
				Charts are visual tools used to display data in a clear and concise way. They come in different types and are
				commonly used in business, science, and other fields.
			</Typography>

			<Grid container spacing="3">
				<Grid item xs="12">
					<Paper elevation="0" outline="1">
						<Grid container spacing="3">
							<Grid item xs="12">
								<Typography as="h6" p-2>
									Import
								</Typography>
							</Grid>
							<Grid item xs="12">
								<Grid container>
									<Grid item xs="12">
										<pre className="codeBox">
											<code>
												<span className="tag">import</span> {'{'}Charts{'}'}
												<span className="tag"> from</span>
												<span className="attr-name"> "@publicapps/toolbox-client-app"</span>
											</code>
										</pre>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs="12">
					<Typography as="h5" p-2>
						How to use
					</Typography>
					<Paper elevation="0" outline="1">
						<Charts mode={appState.mode} objData={objData} colorMapping={colorMapping} />
					</Paper>
				</Grid>
				<Grid item xs="12">
					<Paper elevation="0" outline="1" className="textCenter">
						<Grid item xs="12">
							<RadioButtons
								id="iconColor"
								display="inline"
								color="var(--cbmis-primary)"
								options={[
									{ key: 'heat-map', value: 'heat-map' },
									{ key: 'bullet-charts', value: 'bullet-charts' },
									{ key: 'histogram', value: 'histogram' },
									{ key: 'pie', value: 'pie' },
									{ key: 'box-plot', value: 'box-plot' },
								]}
								eventChange={handleEvents}
							/>
						</Grid>
						<Grid container>
							<Grid item xs="12">
								<pre className="codeBox">
									<code>
										{'<'}
										<span className="tag">Charts</span>
										<span className="attr-name">{`   mode`}</span>=
										<span className="attr-value">"{appState.mode}"</span>
										<span className="attr-name">{`   objDataState`}</span>=
										<span className="attr-value">{'{objDataState}'}</span>
										<span className="attr-name">{`   colorMappingState`}</span>=
										<span className="attr-value">{'{colorMappingState}'}</span>
										{'>'}
										{'</'}
										<span className="tag">Charts</span>
										{'>'}
									</code>
								</pre>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs="12">
					<Paper elevation="0" outline="1">
						<Grid container spacing="3">
							<Grid item xs="12">
								<Typography as="h6" p-2>
									objDataState structure
								</Typography>
							</Grid>
							<Grid item xs="12">
								<Grid container>
									<Grid item xs="12">
										<div>
											<span>objDataState</span> <span> {`={`} </span>
											<br />
											<Grid ml-5>
												xLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
												<br />
												yLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
												<br />
												{`data : [`}
												<br />
												{` x: 'Very High', y: 'Low', value: 'C++' `},
												<br />
												{` x: 'Very Low', y: 'Very High', value: 'Java' `},
												<br />
												{` x: 'Medium', y: 'Medium', value: 'C#' `},
												<br />
												{`]`}
											</Grid>
											{`}`}
										</div>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs="12">
					<Paper elevation="0" outline="1">
						<Grid item xs="12">
							<Typography as="h6" p-2>
								colorMappingState structure
							</Typography>
						</Grid>
						<Grid item xs="12">
							<Grid container spacing="3">
								<Grid item xs="12">
									<div>
										<span>colorMappingState</span> <span> {`={`} </span>
										<br />
										<Grid ml-5>
											Java: 'orange',
											<br />
											'C#': 'green',
											<br />
											JavaScript: 'green',
											<br />
											'C++': 'blue',
											<br />
											10: 'yellow',
											<br />
											15: 'orange',
											<br />
											{`	ranges: [`}
											<br />
											<Grid ml-5>
												{`min: 15, max: 30, color: 'red' `},<br /> {`min: 60, max: 90, color: 'purple'`},
											</Grid>
											{`	]`}
										</Grid>
										{`}`}
									</div>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs="12">
					<Paper elevation="0" outline="1">
						<Typography as="h6" p-2>
							Hide values
						</Typography>
						{appState.showLabel === 'showXLabel' ? (
							<Charts mode={appState.mode1} objData={objData2} colorMapping={colorMapping} showXLabel />
						) : appState.showLabel === 'showyLabel' ? (
							<Charts mode={appState.mode1} objData={objData2} colorMapping={colorMapping} showyLabel />
						) : (
							<Charts
								mode={appState.mode1}
								objData={objData2}
								colorMapping={colorMapping}
								showValue={appState.showValue}
							/>
						)}
						<Grid container spacing="3">
							<Grid item xs="12"></Grid>
							<Grid item xs="12">
								<Grid container>
									<Grid item xs="12">
										<RadioButtons
											id="iconColor"
											display="inline"
											color="var(--cbmis-primary)"
											options={[
												{ key: 'heat-map', value: 'heat-map' },
												{ key: 'bullet-charts', value: 'bullet-charts' },
											]}
											eventChange={handleHideValuesMode}
										/>
										<Typography as="h6" p-2>
											Show or hide values
										</Typography>

										<RadioButtons
											id="iconColor"
											display="inline"
											color="var(--cbmis-primary)"
											options={[
												{ key: 1, value: 'show-value' },
												{ key: 0, value: 'hide-value' },
											]}
											eventChange={handleHideValues}
										/>
										<Typography as="subtitle1" p-2>
											The Component have showXLabel or showyLabel props
										</Typography>

										<RadioButtons
											id="iconColor"
											display="inline"
											color="var(--cbmis-primary)"
											options={[
												{ key: 'showXLabel', value: 'showXLabel' },
												{ key: 'showyLabel', value: 'showyLabel' },
											]}
											eventChange={handelChangeShowLabel}
										/>
									</Grid>

									<Grid item xs="12">
										<pre className="codeBox">
											<code>
												{'<'}
												<span className="tag">Charts</span>
												<span className="attr-name">{`   mode`}</span>=
												<span className="attr-value">"{appState.mode1}"</span>
												<span className="attr-name">{`   objDataState`}</span>=
												<span className="attr-value">{'{objDataState}'}</span>
												<span className="attr-name">{`   colorMappingState`}</span>=
												<span className="attr-value">{'{colorMappingState}'}</span>
												<span className="attr-name">{`   showValue`}</span>=
												<span className="attr-value">{`${appState.showValue}`}</span>
												<span className="attr-value">{`${
													appState.showLabel === 'showXLabel'
														? ' showXLabel '
														: appState.showLabel === 'showyLabel'
														? ' showyLabel '
														: ''
												}`}</span>
												{'>'}
												{'</'}
												<span className="tag">Charts</span>
												{'>'}
											</code>
										</pre>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>

				<Grid item xs="12">
					<Paper elevation="0" outline="1">
						<Typography as="h6" p-2>
							HeatMap gradient colors
						</Typography>
						<Typography as="subtitle1" p-2 pb-6>
							In heat-map mode you can pass just a color props for instead of colorMappingState the color you need
							to gradual and the component will create Gradient colors
						</Typography>
						<Charts mode={'heat-map'} objData={objDataGradient} color={appState.color} showValue={false} />
						<Grid container spacing="3">
							<Grid item xs="12"></Grid>
							<Grid item xs="12">
								<Grid container>
									<Grid item xs="12"></Grid>
									<Typography as="subtitle1" p-2>
										Color
									</Typography>

									<RadioButtons
										id="iconColor"
										display="inline"
										color="var(--cbmis-primary)"
										options={[
											{ key: '255,0,0', value: 'red' },
											{ key: '255,255,0', value: 'yellow' },
										]}
										eventChange={handelChangeColor}
									/>

									<Grid item xs="12">
										<pre className="codeBox">
											<code>
												{'<'}
												<span className="tag">Charts</span> <br />
												<span className="attr-name">{`   mode`}</span>=
												<span className="attr-value">"{`heat-map`}"</span>
												<br />
												<span className="attr-name">{`   objDataState`}</span>=<br />
												<span className="attr-value">
													{`{
        xLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
        yLabels: ['Very Low', 'Low', 'Medium', 'High', 'Very High'],
        data: [
          { x: 'Very High', y: 'Low', value: 1 },
          { x: 'Very Low', y: 'Very High', value: 4 },
          { x: 'Medium', y: 'Medium', value: 5 },
          { x: 'Very Low', y: 'Very Low', value: 10 },
          { x: 'Low', y: 'Low', value: 16 },
        ],
}
    `}
												</span>
												<br />
												<span className="attr-name">{`   color`}</span>=
												<span className="attr-value">{`'${appState.color}'`}</span>
												<br />
												<span className="attr-name">{`   showValue`}</span>=
												<span className="attr-value">{`${false}`}</span>
												<br />
												{'/>'}
											</code>
										</pre>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs="12">
					<Paper elevation="0" outline="1">
						<Typography as="h6" p-2>
							Pie
						</Typography>
						<Typography as="subtitle1" p-2 pb-6>
							In Pie mode We use this structure that have x(label) and the value in percentage
						</Typography>

						<Grid item xs="12">
							<Grid container>
								<Grid item xs="12">
									<div>
										<span>objDataState</span> <span> {`={`} </span>
										<br />
										<Grid ml-2>
											{`data : [`}
											<Grid ml-5>
												{`x: 'JavaScript', value: '30%' `},
												<br />
												{`x: 'Java', value: '50%' `},
												<br />
												{` x: 'C++', value: '20%' `},
												<br />
											</Grid>
											{`]`}
										</Grid>
										{`}`}
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Charts mode={'pie'} objData={objDataPie} colorMapping={colorMapping} />
						<Grid container spacing="3">
							<Grid item xs="12"></Grid>
							<Grid item xs="12">
								<Grid container>
									<Grid item xs="12"></Grid>

									<Grid item xs="12">
										<pre className="codeBox">
											<code>
												{'<'}
												<span className="tag">Charts</span> <br />
												<span className="attr-name">{`   mode`}</span>=
												<span className="attr-value">"{`pie`}"</span>
												<br />
												<span className="attr-name">{`   objDataState`}</span>=<br />
												<span className="attr-value">
													{`{
	  data: [
		{ x: 'JavaScript', value: '30%' },
		{ x: 'Java', value: '50%' },
		{ x: 'C++', value: '20%' },
	],
}
    `}
												</span>
												{'/>'}
											</code>
										</pre>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs="12">
					<Paper elevation="0" outline="1">
						<Typography as="h6" p-2>
							histogram
						</Typography>
						<Typography as="subtitle1" p-2 pb-6>
							In histogram mode We use this structure that have x(label) and the value
						</Typography>

						<Grid item xs="12">
							<Grid container>
								<Grid item xs="12">
									<div>
										<span>objDataState</span> <span> {`={`} </span>
										<br />
										<Grid ml-2>
											{`data : [`}
											<Grid ml-5>
												{`x: 'Very Low', value: 90 `},
												<br />
												{`x: 'Medium', value: 30 `},
												<br />
												{` x: 'Very High', value: 50 `},
												<br />
											</Grid>
											{`]`}
										</Grid>
										{`}`}
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Charts mode={'histogram'} objData={objDataHistogram} colorMapping={colorMapping} />
						<Grid container spacing="3">
							<Grid item xs="12"></Grid>
							<Grid item xs="12">
								<Grid container>
									<Grid item xs="12"></Grid>

									<Grid item xs="12">
										<pre className="codeBox">
											<code>
												{'<'}
												<span className="tag">Charts</span> <br />
												<span className="attr-name">{`   mode`}</span>=
												<span className="attr-value">"{`pie`}"</span>
												<br />
												<span className="attr-name">{`   objDataState`}</span>=<br />
												<span className="attr-value">
													{`{
	  data: [
		{ x: 'Very Low', value: 90  },
		{ x: 'Medium', value: 30  },
		{ x: 'Very High', value: 50 },
	],
}
    `}
												</span>
												{'/>'}
											</code>
										</pre>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default AppContainer;
