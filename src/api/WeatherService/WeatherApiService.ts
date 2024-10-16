import WeatherResponse from './WeatherResponse'

class WeatherApiService {
  private baseUrl: string
  private apiKey: string

  constructor() {
    this.baseUrl = import.meta.env.VITE_WEATHER_API_URL
    this.apiKey = import.meta.env.VITE_WEATHER_API_KEY
  }

  private getUrl(path: string, queryParams: Record<string, string> = {}): string {
    const query = new URLSearchParams(queryParams).toString()
    return `${this.baseUrl}${path}?${query}&appid=${this.apiKey}`
  }

  public async getWeatherByCity(cityName: string | undefined): Promise<WeatherResponse> {
    if (!cityName) {
      throw new Error('City name is required')
    }
    const path = '/weather'
    const url = this.getUrl(path, { q: cityName })
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Fetch error:', error)
      throw error
    }
  }
}

export default WeatherApiService
