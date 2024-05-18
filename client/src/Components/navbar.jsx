import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//image import
import Logo from './Images/logo.png'
import Ic1 from './Images/NavIcons/ic1.png';
import Ic2 from './Images/NavIcons/ic2.png';
import Ic3 from './Images/NavIcons/ic3.png';
import Ic4 from './Images/NavIcons/ic4.png';
import Ic5 from './Images/NavIcons/ic5.png';
import Ic6 from './Images/NavIcons/ic6.png';
import Ic7 from './Images/NavIcons/ic7.png';
import Ic8 from './Images/NavIcons/ic8.png';
import Ic9 from './Images/NavIcons/ic9.png';
import Ic10 from './Images/NavIcons/ic10.png';
import Ic11 from './Images/NavIcons/ic11.png';

export default class navbar extends Component {
  render() {
    return (
      <div className='ad-nav-mn-sct'>
        <Link to=''>
            <img src={Logo} alt="Logo" className='ad-nav-lg' />
            <div className="ad-nav-lnks">
                <Link to=''>
                    <img src={Ic1} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic2} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic3} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic4} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic5} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic6} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic7} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic8} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic9} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic10} alt="icon" className='ad-nav-ic' />
                </Link>
                <Link to=''>
                    <img src={Ic11} alt="icon" className='ad-nav-ic' />
                </Link>
            </div>
        </Link>
      </div>
    )
  }
}
