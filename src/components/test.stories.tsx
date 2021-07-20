import React from 'react'; 
import { Story } from '@storybook/react'; 

// --------------------------------------------------------
import {TestComponent} from './test.component'; 


function Tester() { 
  return <TestComponent /> 
}

export default { 
  title: 'Input/Input', 
  component: Tester, 
} 

const Template:Story<any> = args => <Tester /> 

export const TestInput = Template.bind({}); 