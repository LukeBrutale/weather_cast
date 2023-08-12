import s from './CountdownTimer.module.css'
import React, { useState, useEffect } from 'react';



const CountdownTimer = ({ startDate }) => {
  // debugger

  const [timeRemaining, setTimeRemaining] = useState(0);

  const countdown = () => {
    setTimeRemaining(time => {
      if (time > 0) {
        return time - 1000;
      }
      return time;
    });
  };

  useEffect(() => {
    const date = new Date(startDate).getTime()
    const now = new Date().getTime()
    const milliseconds = date - now;
    setTimeRemaining(milliseconds)
  }, [startDate])


  useEffect(() => {
    let timerId;
    if (timeRemaining <= 0) {
      clearInterval(timerId);
      return;
    }
    timerId = setInterval(countdown, 1000);
    return () => clearInterval(timerId);
  }, [timeRemaining]);

  const formatTime = (time) => {
    const days = Math.floor(time / 86400000);
    const hours = Math.floor((time % 86400000) / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return { days, hours, minutes, seconds };
  };

  return (
    <div className={s.timer}>
      <div className={s.section_numbers}>
        <div className={s.column}>
          <span className={s.numbers}>{formatTime(timeRemaining).days.toString().padStart(2, '0')} </span>
          <span className={s.description}>DAYS</span>
        </div>
      </div>

      <div className={s.section_numbers}>
        <div className={s.column}>
          <span className={s.numbers}>{formatTime(timeRemaining).hours.toString().padStart(2, '0')} </span>
          <span className={s.description}>HOURS</span>
        </div>


      </div>
      <div className={s.section_numbers}>
        <div className={s.column}>
          <span className={s.numbers}>{formatTime(timeRemaining).minutes.toString().padStart(2, '0')} </span>
          <span className={s.description}>MINUTES</span>
        </div>
      </div>

      <div className={s.section_numbers}>
        <div className={s.column}>
          <span className={s.numbers}>{formatTime(timeRemaining).seconds.toString().padStart(2, '0')} </span>
          <span className={s.description}>SECONDS</span>
        </div>
      </div>

    </div>
  );

};

export default CountdownTimer;






// import s from './CountdownTimer.module.css'

// const CountdownTimer = (props) => {

//   const startDate = new Date(props.startDate);
//   const milliseconds = startDate.getTime();
//   let endDate = Date.now();


//   function counts() {
//     const gap = milliseconds - endDate
//     let days = Math.floor(gap / 1000 / 60 / 60 / 24);
//     let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
//     let minutes = Math.floor(gap / 1000 / 60) % 60;
//     let seconds = Math.floor(gap / 1000) % 60;
//     console.log(days)

//     // return `${days}:${hours}:${minutes}:${seconds}`;
//   }

//   setInterval(counts, 1000)

//   return (
//     <div className={s.container}>
//       <span></span>
//       <span></span>
//       <span></span>
//       <span></span>
//     </div>
//   )


// }

// export default CountdownTimer


