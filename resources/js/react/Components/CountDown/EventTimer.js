import React, { Fragment, useState, useEffect } from 'react';

export default function EventTimer({ events }) {
  const [DayTime, setDay] = useState('00');
  const [Hrs, setHrs] = useState('00');
  const [Min, setMin] = useState('00');
  const [Sec, setSec] = useState('00');

  let interval = React.useRef();
  const countDown = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const event = new Date(events).getTime();

      const daysSeconds = event - now;

      let sec = Math.floor(daysSeconds / 1000);
      let min = Math.floor(sec / 60);
      let hrs = Math.floor(min / 60);
      let days = Math.floor(hrs / 24);

      sec %= 60;
      min %= 60;
      hrs %= 24;

      sec = sec < 10 ? '0' + sec : sec;
      min = min < 10 ? '0' + min : min;
      hrs = hrs < 10 ? '0' + hrs : hrs;

      if (daysSeconds < 0) {
        clearInterval(interval.current);
      } else {
        setDay(days);
        setHrs(hrs);
        setMin(min);
        setSec(sec);
        clearInterval(interval.current);
      }
    }, 1000);
    clearInterval(interval.current);
  };

  useEffect(() => {
    countDown();
    return () => clearTimeout(countDown);
  });

  return (
    <div>
      <div className='timer'>
        <div>
          <h3>
            Count Every Second <br />
            Until the Event
          </h3>
        </div>
        {/* {console.log(event)} */}
        {Sec ? (
          <>
            <div className='row'>
              <div className='col-6 col-lg-3'>
                {DayTime ? <span> {`${DayTime} Days`}</span> : null}
              </div>
              <div className='col-6 col-lg-3'>
                {Hrs ? <span>{`${Hrs} Hours`}</span> : null}
              </div>
              <div className='col-6 col-lg-3'>
                {Min ? <span>{`${Min} Mins`}</span> : null}
              </div>
              <div className='col-6 col-lg-3'>
                {Sec ? <span>{`${Sec} Secs`}</span> : null}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
