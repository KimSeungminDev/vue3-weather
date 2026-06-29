import { defineStore } from 'pinia';
import axios from 'axios';
import { computed, ref } from 'vue';
import dayjs from 'dayjs';

const axiosInxtance = axios.create({
	baseURL:
		'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
	params: {
		lang: 'ko',
		key: 'YOR_API_KEY',
		unitGroup: 'metric',
	},
});
export const useWeatherStore = defineStore('weather', () => {
	const address = ref('suwon');
	const currentConditions = ref(null);
	const days = ref(null);
	const hours = computed(() => {
		return days.value
			?.find(v => v.datetime === dayjs().format('YYYY-MM-DD'))
			?.hours.filter(v => v.datetime > dayjs().format('HH:mm:ss'));
	});
	const getCurrentWeatherInfo = async () => {
		try {
			const res = await axiosInxtance.get('/' + address.value);
			currentConditions.value = res.data.currentConditions;
			days.value = res.data.days;
			console.log(days.value);
		} catch (e) {
			alert(e.response?.data ? e.response?.data : e.message);
		}
	};
	const forecast = computed(() => {
		return days.value?.filter(v => v.datetime > dayjs().format('YYYY-MM-DD'));
	});
	return { currentConditions, hours, forecast, getCurrentWeatherInfo };
});
