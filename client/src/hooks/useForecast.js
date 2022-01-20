import { useState } from 'react';
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const REQUEST_URL = `http://localhost:8080/`;

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const getForecastData = async location => {
        const { data } = await axios(`${REQUEST_URL}`,{ params: { location: location } });

        if (!data || data.length === 0) {
            setError('Something went wrong');
            setLoading(false);
            return;
        }

        return data;
    };

    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    };

    const submitRequest = async location => {
        setLoading(true);
        setError(false);

        const data = await getForecastData(location);
        if (!data) return;

        gatherForecastData(data);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};

export default useForecast;
