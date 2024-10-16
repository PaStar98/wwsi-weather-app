export default function kelvinToCelsius(kelvin: string | undefined): string {
  if (kelvin === undefined) {
    return 'No input provided'
  }

  const kelvinNumber = Number(kelvin)
  if (isNaN(kelvinNumber)) {
    return 'Invalid input'
  }

  const celsius = kelvinNumber - 273.15
  const roundedCelsius = Math.round(celsius * 2) / 2
  return `${roundedCelsius.toFixed(1)}°C`
}
