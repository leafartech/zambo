'use client'
import { ClockIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';

const CountdownClock = () => {
    // Estado inicial para os dias, horas, minutos e segundos
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Atualizar a contagem regressiva a cada segundo
        const interval = setInterval(() => {
            const now = new Date();
            // Defina a data final aqui
            const endDate = new Date('2024-03-26T23:59:00');
            const difference = endDate - now;

            // Calcula a diferença de tempo
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Atualiza o estado com o novo tempo
            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });

            // Quando a contagem regressiva terminar, limpa o intervalo
            if (difference < 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        }, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-16 fixed bg-[#010101]">
            <div className="h-full bg-red-500/55 flex items-center justify-center gap-2 sm:gap-4 border-b-2 border-white/55">
                <div className="flex gap-2 items-center text-white">
                    <ClockIcon className="sm:h-8 sm:w-8 h-6 w-6" />
                    <p>Oferta acaba em:</p>
                </div>
                <div className="flex gap-2 sm:gap-4">
                    <div className="text-white">
                        <p className="text-xl font-bold">{timeLeft.days}d</p>
                    </div>
                    <div className="text-white">
                        <p className="text-xl font-bold">{timeLeft.hours}h</p>
                    </div>
                    <div className="text-white">
                        <p className="text-xl font-bold">{timeLeft.minutes}m</p>
                    </div>
                    <div className="text-white">
                        <p className="text-xl font-bold">{timeLeft.seconds}s</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownClock;
