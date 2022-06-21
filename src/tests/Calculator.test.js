import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add', () => {
    const button4 = container.find('#number4');
    const operatorAdd = container.find('#operator_add');
    const button1 = container.find('#number1');
    const runningTotal = container.find('#running-total');
    const operatorEquals = container.find('#operator-equals');
    button1.simulate('click');
    operatorAdd.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract', () => {
    const button7 = container.find('#number7');
    const operatorSubtract = container.find('#operator-subtract');
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    const operatorEquals = container.find('#operator-equals');
    button7.simulate('click');
    operatorSubtract.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply', () => {
    const button3 = container.find('#number3');
    const operatorMultiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const runningTotal = container.find('#running-total');
    const operatorEquals = container.find('#operator-equals');
    button3.simulate('click');
    operatorMultiply.simulate('click');
    button5.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide', () => {
    const button3 = container.find('#number3');
    const operatorMultiply = container.find('#operator-multiply');
    const operatorDivide = container.find('#operator-divide');
    const button7 = container.find('#number7');
    const runningTotal = container.find('#running-total');
    const operatorEquals = container.find('#operator-equals');
    button3.simulate('click');
    operatorMultiply.simulate('click');
    button7.simulate('click');
    operatorEquals.simulate('click');
    operatorDivide.simulate('click');
    button7.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const button3 = container.find('#number3');
    const button7 = container.find('#number7');
    const button5 = container.find('#number5');
    const button1 = container.find('#number1');
    const runningTotal = container.find('#running-total');
    const operatorEquals = container.find('#operator-equals');
    button3.simulate('click');
    button7.simulate('click');
    button5.simulate('click');
    button1.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3751');
  })

  it('should be able to chain multiple operations together ', () => {
    const button8 = container.find('#number8');
    const button2 = container.find('#number2');
    const button5 = container.find('#number5');
    const operatorAdd = container.find('#operator_add');
    const operatorSubtract = container.find('#operator-subtract');
    const operatorMultiply = container.find('#operator-multiply');
    const runningTotal = container.find('#running-total');
    const operatorEquals = container.find('#operator-equals');
    button8.simulate('click');
    operatorSubtract.simulate('click');
    button2.simulate('click');
    operatorAdd.simulate('click');
    button5.simulate('click');
    operatorMultiply.simulate('click');
    button2.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('22');
  })




})

