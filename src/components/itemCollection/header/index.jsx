import React, {useEffect, useState} from 'react';
import './style.css';
import {Percent, ShoppingBag, Timer} from "@phosphor-icons/react";

function ItemCollectionHeader({title, hasOffer, endingDate}) {
    const [countdownDays, setCountdownDays] = useState(0);
    const [countdownHours, setCountdownHours] = useState(0);
    const [countdownMinutes, setCountdownMinutes] = useState(0);
    const [countdownSeconds, setCountdownSeconds] = useState(0);

    useEffect(() => {
        if (hasOffer) {
            const interval = setInterval(() => {
                timerCountdown();
            }, 1000);
            return () => clearInterval(interval);
        }
    }, );

    const timerCountdown = () => {
        const countdownDate = new Date(endingDate).getTime();
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);
        setCountdownDays(days);
        setCountdownHours(hours);
        setCountdownMinutes(minutes);
        setCountdownSeconds(seconds);
    }

    return (<div className="header-wrapper">
            <div className="header-content">
                <h1 className="div-center">
                    {hasOffer ? <Percent width={30} height={30}/> : <ShoppingBag width={30} height={30}/>}
                    {title}
                </h1>
                {hasOffer && <h3 className="div-center">
                    <Timer width={30} height={30}/> Ofertas acabam em:
                    {' '}
                    {countdownDays}D {countdownHours}H {countdownMinutes}M {countdownSeconds}S
                </h3>}

            </div>
        </div>

    );
}

export default ItemCollectionHeader;

