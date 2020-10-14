import React, { useState } from 'react';
import './members.css';
import Navbar from '../mainlayout/mainlayoutcomp/navbar/navbar';
import back from './memtop.png';
import $ from 'jquery';
import { Spinner } from 'react-bootstrap';

function Members() {
  const [loader, setLoader] = useState(false);
  const api = () => {
    $.ajax({
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      url: 'https://geeksman.herokuapp.com/api/members/',
      headers: {},
    }).done(function (data) {
      var obj = JSON.parse(JSON.stringify(data));
      var batch = '';
      var details = '';
      setLoader(true);

      for (var i = 0; i < obj.length; i++) {
        if (obj[i].year === 1) {
          batch = '2k19';
        } else if (obj[i].year === 2) {
          batch = '2k18';
        } else if (obj[i].year === 3) {
          batch = '2k17';
        } else if (obj[i].year === 4) {
          batch = '2k16';
        }
        if (
          (obj[i].status === 'jsec' ||
            obj[i].status === 'seceratory' ||
            obj[i].status === 'social' ||
            obj[i].status === 'session' ||
            obj[i].status === 'Fourth Year') &&
          obj[i].year !== null
        ) {
          details +=
            `
        <div class="col-sm-4 margincards">
            <div class="dcards">
              <div class="dcard">
                <div class="dimg">
                  <img src="` +
            obj[i].pic +
            `" class="dimgstyle" />
                </div>
                <h1 class="position">` +
            (obj[i].year === 4 ? 'Founder Member' : obj[i].status) +
            `</h1>
                <div class="aboutd">
                  <span class="dname">` +
            obj[i].user.first_name +
            obj[i].user.last_name +
            `</span>
                  <span class="dskill">` +
            obj[i].tagline +
            `</span>
                </div>
                <div class="hovermaterial">
                  <div class="memberrelativwrapper">
                    <img src="` +
            obj[i].pic +
            `" class="dimagestyleflip" />
                    <div class="membersname">` +
            obj[i].user.first_name +
            obj[i].user.last_name +
            `</div>
                    <div class="membersline">` +
            (obj[i].status == 'Fourth Year' ? 'Founder' : obj[i].status) +
            `</div>
                    <div class="year">` +
            batch +
            ` Batch</div>
                    <div class="description">
                      ` +
            obj[i].description +
            `
                    </div>
                    <div class="address">` +
            obj[i].address +
            `</div>
                    <div class="icons">
                      <a href="` +
            obj[i].github +
            `">
                        <i class="fab fa-github"></i>
                      </a>
                      <a href="` +
            obj[i].linkedin +
            `">
                        <i class="fab fa-linkedin"></i>
                      </a>
                      <a href="` +
            obj[i].user.email +
            `">
                        <i class="fas fa-envelope-open-text"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    `;
        } else if (obj[i].year !== null) {
          details +=
            `   <div class="col-sm-3 margincardmembers">
            <div class="dcards">
              <div class="dmcard">
                <div class="dimg">
                  <img src="` +
            obj[i].pic +
            `" class="dimgstyle" />
                </div>
                <h1 class="mposition">member</h1>
                <div class="aboutd">
                  <span class="dname">` +
            obj[i].user.first_name +
            obj[i].user.last_name +
            `</span>
                  <span class="dskill">` +
            obj[i].tagline +
            `</span>
                </div>
                <div class="hovermaterial">
                  <div class="memberrelativwrapper">
                    <img src="` +
            obj[i].pic +
            `" class="dimagestyleflip" />
                    <div class="membersname">` +
            obj[i].user.first_name +
            obj[i].user.last_name +
            `</div>
                    <div class="membersline">` +
            obj[i].tagline +
            `</div>
                    <div class="year">` +
            batch +
            ` Batch</div>
                    <div class="description">
                    ` +
            obj[i].description +
            `
                    </div>
                    <div class="address">` +
            obj[i].address +
            `</div>
                    <div class="icons">
                      <a href="` +
            obj[i].github +
            `">
                        <i class="fab fa-github"></i>
                      </a>
                      <a href="` +
            obj[i].linkedin +
            `">
                        <i class="fab fa-linkedin"></i>
                      </a>
                      <a href="` +
            obj[i].user.email +
            `">
                        <i class="fas fa-envelope-open-text"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        }
      }

      $('#Jsecdetails').append(details);
    });
  };
  api();

  return (
    <div className='Members'>
      <Navbar />
      <div className='memtopback'>
        <img src={back} className='memtopbackstyle' />
        <div className='memtop-text'>
          <span className='memtop-header'>Our Team</span>
          <span className='memtop-tagline'>
            Our dedicated and hardwording team
          </span>
        </div>
      </div>
      <div className='jumbotron'>
        {loader ? (
          <div className='row' id='Jsecdetails' />
        ) : (
          <Spinner animation='border' variant='primary' />
        )}
      </div>
    </div>
  );
}

export default Members;
