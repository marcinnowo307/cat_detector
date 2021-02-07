/*
 * utils.h
 *
 * Created: 03.02.2021 17:47:18
 *  Author: marcinek
 */ 

#include <avr/io.h>

#ifndef UTILS_H_
#define UTILS_H_



// led macros
#define initLed()  (DDRB |= (1 << DDB2))
#define ledOn()    (PORTB |= (1 << PORTB2))
#define ledOff()   (PORTB &= ~(1 << PORTB2))

// buzzer macros
#define buzzOn()   (TCCR0B |= (1 << CS00))
#define buzzOff()  {					     \
					TCCR0B &= 0b11111000;    \
					TCNT0 = 0;               \
					PORTB &= ~(1 << PORTB1); \
				   }

// contactron macros
#define initReed()  (DDRB &= ~(1 << DDB4))
#define isReedOff() (PINB & (1 << PINB4))
#define isReedOn()  (! isReedOff())

// pir macros
#define initPir()   (DDRB &= ~(1 << DDB3))
#define isPirOn()	(PINB & (1 << PINB3))
#define isPirOff()  (!isPirOn())

#endif /* UTILS_H_ */