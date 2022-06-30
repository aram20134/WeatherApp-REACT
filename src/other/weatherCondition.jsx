import clear from '../img/weatherICO/clear.png'
import patryCloudy from '../img/weatherICO/partycloudy.png'
import cloudy from '../img/weatherICO/cloudy.png'
import rain from '../img/weatherICO/rain.png'
import chanceRain from '../img/weatherICO/chanceRain.png'
import humidity from '../img/weatherICO/humidity.png'

export const weatherCondition = [
    {name: 'ясно', trace: clear},
    {name: 'небольшая облачность', trace: patryCloudy},
    {name: 'переменная облачность', trace: patryCloudy},
    {name: 'облачно с прояснениями', trace: patryCloudy},
    {name: 'пасмурно', trace: cloudy},
    {name: 'небольшой дождь', trace: chanceRain},
    {name: 'дождь', trace: rain},
    {name: 'влажность', trace: humidity}
]
