import React, { Component } from 'react';
import '../assets/style.css';
import { Link } from 'react-router-dom';

export default class todayHighlight extends Component {
  render() {
    return (
      <div className='td-hglt-mn-sct'>
        <div className="td-hig-mn-hdr">
            <h1 className="td-hg-mn-h1">
                Todays Highlights (14)
            </h1>
            <p className="td-hg-mn-p">
                19 Mar 2024
            </p>
        </div>
        <div className="td-hg-inc-dtls">
            <div className="income-div">
                <p className="income-p">
                    Income
                </p>
                <h1 className="income-value">
                    100000 CAD
                </h1>
                <p className="income-p-two">
                    2 Payment Recieved
                </p>
            </div>
            <div className="expen-div">
                <p className="expen-p">
                    Expence
                </p>
                <h1 className="expen-value">
                    50000 CAD
                </h1>
                <p className="expen-p-two">
                    5 Payment Paid
                </p>
            </div>
        </div>
        <div className="td-hg-sb-head">
            <h1 className="mn-hg-sb-h1">
                Completed Activities (14)
            </h1>
            <Link to='' className='mn-hg-sb-lnk'>
                View All
            </Link>
        </div>
        <div className="table-civ">
        <div className="row-td-hg">
            <div className="rows">
                <span className="span-name">Gurpreet Singh</span>  (Dispatch team) has created <span className="span-spl">Load No. I-I-AAA-1325</span>
            </div>
            <div className="rows">
            <span className="span-name">Aman</span> (Driver) <span className="span-spl">Picked Up</span> goods at <span className="span-spl">Location_Name</span> for <span className="span-spl">Load No. I-I-AAA-1325</span>
            </div>
            <div className="rows">
                <span className="span-name">Gurpreet Singh</span>  (Dispatch team) has created <span className="span-spl">Load No. I-I-AAA-1325</span>
            </div>
            <div className="rows">
            <span className="span-spl">Load No. I-I-AAA-1325</span> will start added by <span className="span-name">Gurpreet Singh</span>
            </div>
        </div>
        </div>

        <div className="td-hg-sb-head">
            <h1 className="mn-hg-sb-h1">
                Scheduled Activities (14)
            </h1>
            <Link to='' className='mn-hg-sb-lnk'>
                View All
            </Link>
        </div>
        <div className="table-civ">
        <div className="row-td-hg">
            <div className="rows">
                <span className="span-spl">Load No. I-I-AAA-1325</span> will be <span className="span-spl">delivered</span> <span className="span-name">by Aman (Driver)</span>
            </div>
            <div className="rows">
                <span className="span-name">Aman</span> (Driver) will <span className="span-spl">Picked Up</span> goods at <span className="span-spl">Location_Name</span> for <span className="span-spl">Load No. I-I-AAA-1325</span>
            </div>
            <div className="rows">
                <span className="span-spl">Load No. I-I-AAA-1325</span> will start added by <span className="span-name">Gurpreet Singh</span>
            </div>
            <div className="rows">
                <span className="span-spl">Load No. I-I-AAA-1325</span> will start added by <span className="span-name">Gurpreet Singh</span>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
