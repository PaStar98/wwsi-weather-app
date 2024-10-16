import PixabayResponse from './PixabayResponse'

class PixabayApiService {
  private baseUrl: string
  private apiKey: string

  constructor() {
    this.apiKey = import.meta.env.VITE_PIXABAY_API_KEY
    this.baseUrl = import.meta.env.VITE_PIXABAY_API_URL
  }

  private getUrl(queryParams: Record<string, string> = {}): string {
    const query = new URLSearchParams(queryParams).toString()
    console.log(query)
    return `${this.baseUrl}/?key=${this.apiKey}&${query}=${this.apiKey}`
  }

  public async getImageByCityWeather(cityName: string | undefined): Promise<PixabayResponse> {
    if (!cityName) {
      throw new Error('City name is required')
    }
    const url = this.getUrl({ q: cityName })
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

export default PixabayApiService
