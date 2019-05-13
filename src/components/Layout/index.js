import React, { Component } from 'react';
import { getWeatherRequest } from '@/utils/request';
import { parseTime } from '@/utils/common'
import './index.less'

export default class Layout extends Component {
  componentWillMount() {
    this.getWeather()
    setInterval(() => {
      this.setState({
        timenow: parseTime(Date.now())
      })
    })
  }
  state = {
    timenow: '',
    weatherInfo: {}
  }

  getWeather = async () => {
    const weatherInfo = await getWeatherRequest()
    this.setState({ weatherInfo: weatherInfo })
    console.log('getWeather', weatherInfo)
  }

  render() {
    return <nav className="layout">
      <div className="weatherInfo" style={{textAlign: 'right'}}>
        <span>{this.state.weatherInfo.province} </span>
        <span>{this.state.weatherInfo.city} </span>
        <span>{this.state.weatherInfo.weather} </span>
        <span>{this.state.weatherInfo.temperature}° </span>
        <span style={{paddingLeft:  20 }}>{this.state.timenow} </span>
      </div>
    </nav>
  }
}