import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const HomeComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 coro" style={{ height: '540px', border: '1px solid transparent' }}>
          <h1 className="lele" style={{ fontSize: '87px', fontWeight: 'bolder', fontFamily: 'century gothic' }}>
            Easy scheduling <span className="lolo" style={{ color: 'blue', }}>ahead</span>
          </h1>
          <p className="yeye" style={{ fontFamily: 'agency fb', fontSize: '25px' }}>
            Calendly is your hub for scheduling meetings professionally and effectively, eliminating the hassle of back-and-forth emails so you can get back to work
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            style={{
              border: '2px solid lightslategrey',
              width: '70%',
              height: '60px',
              borderRadius: '30px',
              fontFamily: 'juice itc',
              color: 'ghostwhite',
              fontSize: '20px',
              float: 'left',
            }}
          />
          <label
            style={{
              textAlign: 'center',
              height: '60px',
              width: '30%',
              border: '2px solid lightslategrey',
              borderRadius: '30px',
              float: 'none',
              marginLeft: '-135px',
              backgroundColor: 'black',
            }}
          >
            <button className="lili" style={{color: 'white',
  backgroundColor: 'black',
  marginTop: '10px',
  fontFamily: 'juice itc'}}>Sign Up</button>
          </label>
          <h6 style={{ color: 'lightslategrey', paddingTop: '-12px' }}>
            create your free account.no credit acquired
          </h6>
        </div>
        <div className="col-md-7 uu" style={{ height: '540px', border: '1px solid transparent', backgroundImage: 'url(https://trafft.com/wp-content/uploads/2021/11/calendly-header.jpg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      </div>

      <br />
      <br />

      <div className="col-md-12 yooooooo" style={{ height: '200px', border: '1px solid transparent', backgroundColor: '#f2f2f2', marginTop: '10px' }}>
        <h4 className="wake" style={{ width: '40%', textAlign: 'center', marginLeft: '30%', marginTop: '20px', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>
          Simplified scheduling for more than <span className="lolo" style={{ color: 'blue', }}>10,000,000</span> users worldwide
        </h4>
        <div className="row">
        <div className="col-md-3 uu" style={{ height: '100px', width: '200px', border: '1px solid transparent', backgroundImage: 'url(https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', marginRight: '60px' ,marginTop : '30px'}}></div>
        <div className="col-md-3 uu" style={{ height: '100px', width: '200px', border: '1px solid transparent', backgroundImage: 'url(https://th.bing.com/th/id/R.cf0213ff3e32de620001828751be4193?rik=s%2fwAjElfosiDpQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_43704.png&ehk=4h3MyUyItio0G8Q8%2bL%2bMzKFYdOKW7pt4eamfps4jbfo%3d&risl=&pid=ImgRaw&r=0)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',   }}></div>
        <div className="col-md-3 uu" style={{ height: '100px', width: '200px', border: '1px solid transparent', backgroundImage: 'url(https://th.bing.com/th/id/R.0b25f97f9eb3347eeb540e1a6e3e8a81?rik=doSbRlICSdslTw&pid=ImgRaw&r=0)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' , marginRight: '60px'}}></div>
        <div className="col-md-3 uu" style={{ height: '100px', width: '200px', border: '1px solid transparent', backgroundImage: 'url(https://www.conlins.com/current/img/homepage/lazyboy-logo.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',marginTop : '30px' }}></div>
        <div className="col-md-3 uu" style={{ height: '100px', width: '200px', border: '1px solid transparent', backgroundImage: 'url(https://th.bing.com/th/id/R.1dc5e364f8bddf9293cbdd32c5c858c6?rik=f6vEEK5IY8hcGA&pid=ImgRaw&r=0)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>


        </div>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col-md-4 tyyt typo" style={{ height: '250px' }}>
          <p className="pppp" style={{ textAlign: 'center',color: 'white',width: '40px',height: '40px',borderRadius: '20px',border: '0.1px solid transparent',backgroundColor: 'blue',float: 'left',fontWeight: 'bolder', }}>1.</p> <br />
          <h3 className="he" style={{ marginLeft: '40px', paddingLeft: '10px', fontWeight: 'bolder', fontSize: '40px', fontFamily: 'verdana' }}>Create simple rules</h3>
          <p style={{ fontFamily: 'tahoma', fontSize: '27px', paddingTop: '10px' }}>
            Let calendly know your avalability preferences and it'll do work for you.
          </p>
        </div>
        <div className="col-md-4 tyyt ress" style={{ height: '250px' }}>
          <p className="pppp" style={{ textAlign: 'center',color: 'white',width: '40px',height: '40px',borderRadius: '20px',border: '0.1px solid transparent',backgroundColor: 'blue',float: 'left',fontWeight: 'bolder', }}>2.</p> <br />
          <h3 className="he" style={{ marginLeft: '40px', paddingLeft: '10px', fontWeight: 'bolder', fontSize: '40px', fontFamily: 'verdana' }}>Share your link</h3>
          <p style={{ fontFamily: 'tahoma', fontSize: '27px', paddingTop: '10px' }}>
            Send guests your calendly link or embed it on your website.
          </p>
        </div>
        <div className="col-md-4 tyyt daph" style={{ height: '250px' }}>
          <p className="pppp" style={{ textAlign: 'center',color: 'white',width: '40px',height: '40px',borderRadius: '20px',border: '0.1px solid transparent',backgroundColor: 'blue',float: 'left',fontWeight: 'bolder', }}>3.</p> <br />
          <h3 className="he" style={{ marginLeft: '40px', paddingLeft: '10px', fontWeight: 'bolder', fontSize: '40px', fontFamily: 'verdana' }}>Get booked</h3>
          <p style={{ fontFamily: 'tahoma', fontSize: '27px', paddingTop: '10px' }}>
            They pick a time and the event is added to your calendar
          </p>
        </div>
      </div>

      <div
        className="org-cropped-image__cover-image background-image"
        style={{ backgroundImage: 'url(https://media.licdn.com/dms/image/D4E3DAQH1fRwE3I0NDw/image-scale_191_1128/0/1667306786220?e=1672527600&amp;v=beta&amp;t=4Eij0BBORqua5VhhuJ-pSmH6ZMFH4eN2oPHebYrg3O0)' }}
      ></div>
    </div>
  );
};

export default HomeComponent;
