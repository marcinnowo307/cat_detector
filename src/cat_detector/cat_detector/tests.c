/*
 * tests.c
 *
 * Created: 03.02.2021 17:46:29
 *  Author: marcinek
 */ 

#include "tests.h"


void test_led()
{
	initLed();
	
	while (1)
	{
		ledOn();
		_delay_ms(500);
		ledOff();
		_delay_ms(500);
	}
}

/*
//buzzer
void test_buzz()
{
	initBuzz();
	
	while (1)
	{
		buzzOn();
		_delay_ms(500);
		buzzOff();
		_delay_ms(500);
	}
}*/

void test_reed()
{
	initLed();
	initReed();
	
	while (1)
	{
		if(isReedOn())
			ledOn();
		else
			ledOff();
	}
}

void test_pir()
{
	initLed();
	initPir();
	
	while (1)
	{
		if(isPirOn())
			ledOn();
		else
			ledOff();
	}
}
