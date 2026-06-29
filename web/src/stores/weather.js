import { defineStore } from 'pinia';
import axios from 'axios';
import { computed, ref } from 'vue';
import dayjs from 'dayjs';

const axiosInstance = axios.create({
	baseURL:
		'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
	params: {
		lang: 'ko',
		key: 'YOUR_API_KEY',
		unitGroup: 'metric',
	},
});
export const useWeatherStore = defineStore('weather', () => {
	const address = ref('suwon');
	const currentConditions = ref(null);
	const days = ref(null); // 일자별 날씨 객체가 담긴 배열
	const searchData = ref([]); // 검색한 날씨 데이터
	const hours = computed(() => {
		return days.value
			?.find(v => v.datetime === dayjs().format('YYYY-MM-DD'))
			?.hours.filter(v => v.datetime > dayjs().format('HH:mm:ss'));
	});
	const getCurrentWeatherInfo = async () => {
		try {
			const res = await axiosInstance.get('/' + address.value);
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
	// 지역명(city)으로 날씨 API 검색
	const getSearchWeatherInfo = async city => {
		try {
			const res = await axiosInstance.get('/' + city);
			// 응답 데이터 객체로 필요한 데이터 가공
			const printData = {
				address: res.data.address, //지역명
				feelslikemax: res.data.days[0].feelslikemax,
				feelslikemin: res.data.days[0].feeelslikemin,
				icon: res.data.currentConditions.icon,
				temp: res.data.currentConditions.temp,
			};
			if (
				searchData.value.findIndex(v => v.address === res.data.address) === -1
			) {
				searchData.value.push(printData);
			} else {
				alert('이미 조회한 지역입니다.');
			}
		} catch (e) {
			alert(e.response?.data ? e.response?.data : e.message);
		}
	};
	return {
		currentConditions,
		hours,
		forecast,
		searchData,
		getCurrentWeatherInfo,
		getSearchWeatherInfo,
	};
});
