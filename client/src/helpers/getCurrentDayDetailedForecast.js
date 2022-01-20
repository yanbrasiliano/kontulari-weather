const currentDayForecast = data => [
    {
        name: 'Previsibilidade',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'Umidade',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'Vento',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'Pressão',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'temp max',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'temp min',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayForecast;
