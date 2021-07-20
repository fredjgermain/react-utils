import React, {useState} from 'react'; 
import { Story } from '@storybook/react'; 
import { IInput, Input } from './input.component'; 


function TestInput({...props}:IInput) { 
  const [value, setValue] = useState(props.value); 
  props.value = value; 
  props.onSetValue = (newValue:any) => setValue(newValue); 

  return <div> 
    {JSON.stringify(value)} <br/> 
    <Input {...props} /> 
  </div>
}


export default { 
  title: 'Input/Input', 
  component: TestInput, 
} 

const Template:Story<IInput> = args => <TestInput {...args} /> 


export const TestInput_DefaultValueNull = Template.bind({}) 
TestInput_DefaultValueNull.args = { 
  onSetValue: (newValue:any) => console.log(newValue), 
  //onPressEnter: () => console.log('on Press Enter'), 
} 

export const TestInput_String_fewArgs = Template.bind({}) 
TestInput_String_fewArgs.args = { 
  value:'a string', 
  onSetValue: (newValue:any) => console.log(newValue), 
} 

export const TestInput_String = Template.bind({}) 
TestInput_String.args = { 
  type: {name:'string', defaultValue:''}, 
  value:'a string', 
  placeholder: '3 digits', 
  onSetValue: (newValue:any) => console.log(newValue), 
  onPressEnter: () => console.log('on Press Enter'), 
  //_width: , 
} 

export const TestInput_Number = Template.bind({}) 
TestInput_Number.args = { 
  type: {name:'number', defaultValue:0}, 
  value: 12, 
  onSetValue: (newValue:any) => console.log(newValue), 
  onPressEnter: () => console.log('on Press Enter'), 
  //_width: , 
} 


export const TestInput_Color = Template.bind({}) 
TestInput_Color.args = { 
  type: {name:'color', defaultValue:0}, 
  //inputType: 'color', 
  value: '', 
  onSetValue: (newValue:any) => console.log(newValue), 
  //onPressEnter: () => console.log('on Press Enter'), 
  //_width: , 
} 

export const TestInput_Bool = Template.bind({}) 
TestInput_Bool.args = { 
  type: {name:'boolean', defaultValue:false}, 
  value: false, 
  onSetValue: (newValue:any) => console.log(newValue), 
  onPressEnter: () => console.log('on Press Enter'), 
  //sizeFunc: (value:any) => 5, 
  //_width: , 
} 

/*export const TestInput_Date = Template.bind({}) 
TestInput_Date.args = { 
  type: {name:'date', defaultValue:0}, 
  value: '2010-10-10', 
  onSetValue: (newValue:any) => console.log(newValue), 
  onPressEnter: () => console.log('on Press Enter'), 
  inputAttribute: {style: {color:`blue`}}, 
  sizeFunc: (value:any) => 17, 
} */