import moment from 'moment-with-locales-es6';
moment.locale(
	'pt-br'
);

const getWeekday = date => moment(date).format('dddd').substring(0, 3);

const getUpcomingDaysForecast = data =>
    data.slice(1).map(day => ({
        imgUrl: day.weather_state_abbr,
        temperature: Math.round(day.max_temp),
        weekday: getWeekday(day.applicable_date),
    }));

export default getUpcomingDaysForecast;
