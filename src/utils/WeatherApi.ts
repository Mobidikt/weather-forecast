import { CityType, WEATHER_API } from '../config';

class Api {
  serverUrl: string;

  constructor({ serverUrl }: { serverUrl: string }) {
    this.serverUrl = serverUrl;
  }

  private fetch(url: string, params: { method: string }) {
    return fetch(this.serverUrl + url, params).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  /**
   * Загрузка данных с сервера о погоде на неделю
   * @param city Город
   */
  getForecastWeek(city: CityType) {
    return this.fetch(
      `?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${WEATHER_API.KEY}`,
      {
        method: 'Get',
      },
    );
  }

  /**
   * Загрузка данных с сервера за определенную дату
   * @param city Город
   * @param time Дата
   */
  getForecastDay(city: CityType, time: number) {
    return this.fetch(
      `/timemachine?lat=${city.latitude}&lon=${city.longitude}&dt=${time}&units=metric&appid=${WEATHER_API.KEY}`,
      {
        method: 'Get',
      },
    );
  }
}
const api = new Api({
  serverUrl: WEATHER_API.URL,
});

export default api;
