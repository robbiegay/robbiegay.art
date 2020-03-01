import { useState, useEffect } from 'react';

function CountUpTimer() {
    const [firstSongDate] = useState(new Date(2013, 4, 30, 11, 39));
    const [countdown, setCountdown] = useState({
        years: null,
        days: null,
        hrs: null,
        min: null,
        sec: null,
        mil: null,
    });

    const m = 1000 * 60;
    const h = m * 60;
    const d = h * 24;
    const y = d * 365.2425

    // function addZeros(x) {
    //     x = x < 10 ? `0${x}` : x;
    //     return x;
    // }

    useEffect(() => {
        const timer = setInterval(
            () => {
                var totalM = Date.now() - firstSongDate.valueOf();
                var years = Math.floor(totalM / y);
                totalM -= years * y;
                var days = Math.floor(totalM / d);
                totalM -= days * d;
                var hours = Math.floor(totalM / h);
                totalM -= hours * h;
                var min = Math.floor(totalM / m);
                totalM -= min * m;
                var sec = Math.floor(totalM / 1000);
                totalM -= sec * 1000;
                var milli = Math.floor(totalM / 100);
                setCountdown({
                    years: years,
                    days: days,
                    hrs: hours,
                    min: min,
                    sec: sec,
                    mil: milli,
                });
            }, 100
        );

        return function cleanup() {
            clearInterval(timer);
        }
    });

    return (
            countdown.years + ' years ' +
            countdown.days + ' days ' +
            countdown.hrs + ' hours ' +
            // Seconds.tenths option
            countdown.min + ' minutes and ' +
            countdown.sec + '.' +
            countdown.mil + ' seconds'

            // Milliseconds option -> turn on addZeros() and 
            // change milli / num and interval num to 10 or 1
            // countdown.min + ' minutes ' +
            // countdown.sec + ' seconds and ' +
            // countdown.mil + ' milliseconds'
            // addZeros(countdown.mil) + ' milliseconds'
    );
}

export default CountUpTimer;
