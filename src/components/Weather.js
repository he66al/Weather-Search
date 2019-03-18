import React from 'react';

const Weather = props => (
	<div className="weather__info">
		{props.city && props.country && (
			<p className="weather__key">
				{' '}
				Location:
				<span className="weather__value">
					{' '}
					{props.city}, {props.country}
				</span>
			</p>
		)}
		{props.temperature && (
			<p className="weather__key">
				{' '}
				Temperature:
				<span className="weather__value"> {props.temperature}&#176;F </span>
			</p>
		)}
		{props.humidity && (
			<p className="weather__key">
				{' '}
				Humidity:
				<span className="weather__value"> {props.humidity}% </span>
			</p>
		)}
		{props.description && (
			<div>
				<p className="weather__key">
					{' '}
					Conditions:
					<span className="weather__value"> {props.description} </span>
				</p>
				<p className="graph-header">Range:</p>
			</div>
		)}
		{props.error && <p className="weather__error">{props.error}</p>}

		<div class="chart-container">
			<canvas id="myChart" />
		</div>
	</div>
);

export default Weather;
