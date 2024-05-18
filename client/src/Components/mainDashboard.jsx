import React, { Component } from 'react';

//import images
import Notification from './Images/notification.png';
import More from './Images/more.png';
import Search from './Images/search.png';
import { Link } from 'react-router-dom';
import EclipseOne from './Images/Eclipse/Ellipse 465.png';
import EclipseTwo from './Images/Eclipse/Ellipse 466.png';
import EclipseThree from './Images/Eclipse/Ellipse 467.png';
import QuickOne from './Images/Quick Action/001.png'
import QuickTwo from './Images/Quick Action/002.png'
import QuickThree from './Images/Quick Action/003.png'
import QuickFour from './Images/Quick Action/004.png'
import QuickFive from './Images/Quick Action/005.png'
import ArrowRight from './Images/High Priority Alert/0001.png'
import People from './Images/High Priority Alert/0002.png'
import Temp from './Images/High Priority Alert/0003.png'

export default class mainDashboard extends Component {
  render() {
    return (
      <div className='ad-mn-dsh-mn-sct'>
        <div className="ad-mn-dsh-hdr">
            <h1 className="ad-mn-dsh-hdr-h1">Dashboard</h1>
            <div className="ad-mn-dsh-menu">
                <Link to=''>
                    <img src={Search} alt="icon" />
                </Link>
                <div className="div-line" />

                <Link to=''>
                    <img src={Notification} alt="icon" />
                </Link>
                <div className="div-line" />

                <Link to=''>
                    <img src={More} alt="icon" />
                </Link>
            </div>
        </div>
        <div className="ad-mn-dsh-grp-sct">
            <div className="ad-mn-dsh-grp-ctr">
                <h2 className="ad-mn-dsh-grp-hdr">
                    Orders
                </h2>
                <div className="ad-mn-dsh-graph">
                    <img src={EclipseOne} className='ecli-one' alt="icon" />
                    <img src={EclipseTwo} className='ecli-two' alt="icon" />
                    <img src={EclipseThree} className='ecli-three' alt="icon" />
                    <div className="graph-txt">
                        <p className="graph-txt-one">
                            Total
                        </p>
                        <p className="graph-txt-two">
                            123456
                        </p>
                    </div>
                </div>
                <div className="ad-mn-dsh-rng">
                    <div className="ad-mn-dsh-rng-one">
                        <p className="ad-rng-txt">Upcoming</p>
                        <p className="ad-rng-vlue">50</p>
                    </div>
                    <div className="ad-mn-dsh-rng-two">
                        <p className="ad-rng-txt">Ongoing</p>
                        <p className="ad-rng-vlue">100</p>
                    </div>
                    <div className="ad-mn-dsh-rng-three">
                        <p className="ad-rng-txt">Completed</p>
                        <p className="ad-rng-vlue">50</p>
                    </div>
                </div>
            </div>

            <div className="ad-mn-dsh-grp-ctr">
                <h2 className="ad-mn-dsh-grp-hdr">
                    Trip
                </h2>
                <div className="ad-mn-dsh-graph">
                    <img src={EclipseOne} className='ecli-one' alt="icon" />
                    <img src={EclipseTwo} className='ecli-two' alt="icon" />
                    <img src={EclipseThree} className='ecli-three' alt="icon" />
                    <div className="graph-txt">
                        <p className="graph-txt-one">
                            Total
                        </p>
                        <p className="graph-txt-two">
                            123456
                        </p>
                    </div>
                </div>
                <div className="ad-mn-dsh-rng">
                    <div className="ad-mn-dsh-rng-one">
                        <p className="ad-rng-txt">Upcoming</p>
                        <p className="ad-rng-vlue">50</p>
                    </div>
                    <div className="ad-mn-dsh-rng-two">
                        <p className="ad-rng-txt">Ongoing</p>
                        <p className="ad-rng-vlue">100</p>
                    </div>
                    <div className="ad-mn-dsh-rng-three">
                        <p className="ad-rng-txt">Completed</p>
                        <p className="ad-rng-vlue">50</p>
                    </div>
                </div>
            </div>

            <div className="ad-mn-dsh-grp-ctr">
                <h2 className="ad-mn-dsh-grp-hdr">
                    Revenue
                </h2>
                <div className="ad-mn-dsh-graph">
                    <img src={EclipseOne} className='ecli-one' alt="icon" />
                    <img src={EclipseTwo} className='ecli-two' alt="icon" />
                    <img src={EclipseThree} className='ecli-three' alt="icon" />
                    <div className="graph-txt">
                        <p className="graph-txt-one">
                            Total
                        </p>
                        <p className="graph-txt-two">
                            123456
                        </p>
                    </div>
                </div>
                <div className="ad-mn-dsh-rng">
                    <div className="ad-mn-dsh-rng-one">
                        <p className="ad-rng-txt">Upcoming</p>
                        <p className="ad-rng-vlue">50</p>
                    </div>
                    <div className="ad-mn-dsh-rng-two">
                        <p className="ad-rng-txt">Ongoing</p>
                        <p className="ad-rng-vlue">100</p>
                    </div>
                    <div className="ad-mn-dsh-rng-three">
                        <p className="ad-rng-txt">Completed</p>
                        <p className="ad-rng-vlue">50</p>
                    </div>
                </div>
            </div>

            <div className="ad-mn-dsh-grp-ctr">
                <h2 className="ad-mn-dsh-grp-hdr">
                    Expence
                </h2>
                <div className="ad-mn-dsh-graph">
                    <img src={EclipseOne} className='ecli-one' alt="icon" />
                    <img src={EclipseTwo} className='ecli-two' alt="icon" />
                    <img src={EclipseThree} className='ecli-three' alt="icon" />
                    <div className="graph-txt">
                        <p className="graph-txt-one">
                            Total
                        </p>
                        <p className="graph-txt-two">
                            123456
                        </p>
                    </div>
                </div>
                <div className="ad-mn-dsh-rng">
                    <div className="ad-mn-dsh-rng-one">
                        <p className="ad-rng-txt">Upcoming</p>
                        <p className="ad-rng-vlue">50</p>
                    </div>
                    <div className="ad-mn-dsh-rng-two">
                        <p className="ad-rng-txt">Ongoing</p>
                        <p className="ad-rng-vlue">100</p>
                    </div>
                    <div className="ad-mn-dsh-rng-three">
                        <p className="ad-rng-txt">Completed</p>
                        <p className="ad-rng-vlue">50</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="ad-mn-dsh-quick-action-sct">
            <h1 className="ad-mn0dsh-qk-act-hdr">
            Quick Actions
            </h1>
            <div className="ad-mn-qk-act-ctr">
                <div className="ad-mn-qk-div">
                    <img src={QuickOne} alt="icon" />
                    <p className="ad-mn-qk-p">
                    Create Indents
                    </p>
                </div>
                <div className="ad-mn-qk-lne" />
                <div className="ad-mn-qk-div">
                    <img src={QuickTwo} alt="icon" />
                    <p className="ad-mn-qk-p">
                    Add Vehicle
                    </p>
                </div>
                <div className="ad-mn-qk-lne" />
                <div className="ad-mn-qk-div">
                    <img src={QuickThree} alt="icon" />
                    <p className="ad-mn-qk-p">
                    Add Trailer
                    </p>
                </div>
                <div className="ad-mn-qk-lne" />
                <div className="ad-mn-qk-div">
                    <img src={QuickFour} alt="icon" />
                    <p className="ad-mn-qk-p">
                    Add Driver
                    </p>
                </div>
                <div className="ad-mn-qk-lne" />
                <div className="ad-mn-qk-div">
                    <img src={QuickFive} alt="icon" />
                    <p className="ad-mn-qk-p">
                    Add Indents
                    </p>
                </div>
            </div>
        </div>
        <div className="ad-mn-dsh-hg-pr-ale">
            <div className="ad-mn-dsh-pr-alt-hdr">
                <h1 className="ad-mn-dsh-hdr-h1">
                    High Priority alerts (14)
                </h1>
                <Link to='' className='ad-mn-dsh-link'>
                    View All
                    <img src={ArrowRight} alt="icon" />
                </Link>
            </div>
            <div className="ad-mn-dsh-ctn-pr-alt">
                <div className="ad-mn-dsh-div-pr-alt">
                    <div className="ad-mn-dsh-pr-alt-hdr-txt">
                        <div className="ad-mn-dsh-pr-div">
                            <div className="img-div">
                                <img src={People} alt="icon" />
                            </div>
                            <div className="ad-mn-dsh-pr-alrt-txt">
                                <h2 className="ad-mn-dsh-pr-alrt-tlt">
                                    Driver Raised Concern
                                </h2>
                                <p className="ad-mn-dsh-pr-alt-p">
                                Load No : 12454,   Bill To : RoaDo demo Bangalore
                                </p>
                            </div>
                        </div>
                        <div className="ad-mn-dsh-pr-div-two">
                            <p className="ad-mn-dsh-pr-alt-date">
                                13 Fab 24
                            </p>
                        </div>
                    </div>
                    <p className="ad-mn-dsh-pr-alt-mn-cnt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <div className="ad-mn-dsh-pr-alt-ftr">
                        <button className="ad-mn-dsh-alt-ignr">Ignore</button>
                        <button className="ad-mn-dsh-alt-Resolve">Resolve</button>
                    </div>
                </div>

                <div className="ad-mn-dsh-div-pr-alt">
                    <div className="ad-mn-dsh-pr-alt-hdr-txt">
                        <div className="ad-mn-dsh-pr-div">
                            <div className="img-div">
                                <img src={Temp} alt="icon" />
                            </div>
                            <div className="ad-mn-dsh-pr-alrt-txt">
                                <h2 className="ad-mn-dsh-pr-alrt-tlt">
                                    Reefer Temp. out of range
                                </h2>
                                <p className="ad-mn-dsh-pr-alt-p">
                                Load No : 12454,   Bill To : RoaDo demo Bangalore
                                </p>
                            </div>
                        </div>
                        <div className="ad-mn-dsh-pr-div-two">
                            <p className="ad-mn-dsh-pr-alt-date">
                                13 Fab 24
                            </p>
                        </div>
                    </div>
                    <p className="ad-mn-dsh-pr-alt-mn-cnt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <div className="ad-mn-dsh-pr-alt-ftr">
                        <button className="ad-mn-dsh-alt-ignr">Ignore</button>
                        <button className="ad-mn-dsh-alt-Resolve">Resolve</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
