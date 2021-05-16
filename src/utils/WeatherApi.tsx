import { CityType, WEATHER_API } from '../config'

class Api {
    _serverUrl: string;
    constructor({ serverUrl }: { serverUrl:string }) {
        this._serverUrl = serverUrl;
    }

    _fetch(url: string, params:{method: string}) {
        return fetch(this._serverUrl + url, params).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        });
    }
    getForecastWeek(city: CityType) {
        return this._fetch(`lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${WEATHER_API.KEY}`, {
            method: 'Get',
        })
    }
}
const api = new Api ({
    serverUrl: WEATHER_API.URL
});

export default api;