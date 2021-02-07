/*
 * cat_detector.c
 *
 * Created: 01.02.2021 19:02:43
 * Author : marcinek
 */ 


#include <avr/io.h>
#include <avr/sleep.h>
#include <avr/interrupt.h>
#include <avr/eeprom.h>
#include <util/delay.h>
#include <util/atomic.h>
#include "tests.h"
#include "utils.h"


typedef struct {
	uint8_t loudness;
	uint8_t reps;
	uint8_t blinks_in_one_rep;
	uint8_t should_led_stay_on;
	uint8_t should_buzz_every_time;
} configuration;

void goToSleep();

void playAlarmSequence(configuration * conf);

void setBuzzerPwm(configuration * conf);

// determines if the cat is standing behind the door, returns 1 if it is, 0 otherwise
#define isTheCatWaiting() (isPirOn() && isReedOn())

// R/Wr EEProm configuration variables
void writeConf(configuration * conf);
void readConf(configuration * conf);

// returns 1 if the eeprom needs configuration, 0 othewise
uint8_t eeprom_is_fresh();
// fills the struct with defaults
void set_default_config(configuration * conf);



int main(void)
{
	initLed();
	initPir();
	initReed();
	
	configuration conf;

	// read conf
	if(eeprom_is_fresh())
	{
		set_default_config(&conf);
		writeConf(&conf);
	}
	else
	{
		readConf(&conf);		
	}

	setBuzzerPwm(&conf);
	
	
	PRR  |= (1 << PRADC); // disable adc
	ACSR |= (1 << ACD);   // disable analog comparator
	PORTB |= (1 << PORTB0); // PB0 is floating, so pullup to save power
	
	GIMSK |= (1 << PCIE); // to detect if the kitty is close to the door
	PCMSK |= (1 << PCINT3); 


	sei();
	
    while (1) 
    {
		goToSleep();
		if(isTheCatWaiting())
		{
			playAlarmSequence(&conf);
			if(conf.should_led_stay_on)
				ledOn();
		}
		else
		{
			//ledOff();
		}
	}
}


void goToSleep()
{
	PRR |= (1 << PRTIM0);
	set_sleep_mode(SLEEP_MODE_PWR_DOWN);
	cli();
	sleep_enable();
	sleep_bod_disable();
	sei();
	sleep_cpu();
	sleep_disable();
	PRR &= ~(1 << PRTIM0);
}


void setBuzzerPwm(configuration * conf)
{
	DDRB |= (1 << DDB1);
	TCCR0A = (1 << COM0B1) | (1 << WGM01) | (1 << WGM00);
	//TCCR0B |= (1 << WGM02);
	OCR0B  = conf->loudness;
}



void playAlarmSequence(configuration * conf)
{
	static uint8_t firstTime = 1;
	
	ledOff();
	buzzOff();
	
	for(uint8_t i = 0; i < conf->reps; i++)
	{
		for(uint8_t j = 0; j < conf->blinks_in_one_rep; j++)
		{
			ledOn();
			if(conf->should_buzz_every_time || firstTime)
				buzzOn();
			_delay_ms(150);
			ledOff();
			buzzOff();
			_delay_ms(100);
		}
		_delay_ms(500);
	}
	
	firstTime = 0;	
}



ISR(PCINT0_vect)
{

}

// returns 1 if the eeprom needs to be configured with defaults
uint8_t eeprom_is_fresh()
{
	return (eeprom_read_byte((uint8_t *)5) != 0);
}

void writeConf(configuration * conf)
{
	eeprom_update_byte((uint8_t *)0,conf->loudness);
	eeprom_update_byte((uint8_t *)1,conf->reps);
	eeprom_update_byte((uint8_t *)2,conf->blinks_in_one_rep);
	eeprom_update_byte((uint8_t *)3,conf->should_led_stay_on);
	eeprom_update_byte((uint8_t *)4,conf->should_buzz_every_time);
	eeprom_update_byte((uint8_t *)5,0); // set a flag which signifies, that the eeprom is configured
}


void readConf(configuration * conf)
{
	conf->loudness = eeprom_read_byte((uint8_t *)0);
	conf->reps	   = eeprom_read_byte((uint8_t *)1);
	conf->blinks_in_one_rep = eeprom_read_byte((uint8_t *)2);
	conf->should_led_stay_on = eeprom_read_byte((uint8_t *)3);
	conf->should_buzz_every_time = eeprom_read_byte((uint8_t *)4);
}

void set_default_config(configuration * conf)
{
	conf->blinks_in_one_rep = 3;
	conf->reps = 3;
	conf->loudness = 4;
	conf->should_led_stay_on = 1;
	conf->should_buzz_every_time = 0;
}