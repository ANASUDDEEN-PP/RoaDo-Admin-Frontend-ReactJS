import React, { Component } from 'react'
import '../assets/style.css'

import NavBar from './navbar'
import MainDashboard from './mainDashboard'
import TodayHighlight from './todayHighlight';

export default class mainHome extends Component {
  render() {
    return (
      <div className='ad-mn-sct'>
        <NavBar />
        <MainDashboard />
        <TodayHighlight />
      </div>
    )
  }
}
