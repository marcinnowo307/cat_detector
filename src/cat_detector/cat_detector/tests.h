/*
 * tests.h
 *
 * Created: 03.02.2021 17:46:16
 *  Author: marcinek
 */ 

#include <avr/io.h>
#include <util/delay.h>
#include "utils.h"

#ifndef TESTS_H_
#define TESTS_H_



void test_led();

void test_buzz();

void test_reed();

void test_pir();

#endif /* TESTS_H_ */