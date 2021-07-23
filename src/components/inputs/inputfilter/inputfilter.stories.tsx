import React, {useState} from 'react'; 
import { Story } from '@storybook/react'; 

// --------------------------------------------------------
import { useFilter } from './inputfilter.component'; 


// assumes a 1 lvl object like {key1:orderValue, key2:orderValue ... etc}
function TestInput() { 
  const toSort = [ 
    {a:'a', b:1, c: 4}, 
    {a:'a', b:2, c: 3}, 
    {a:'a', b:2, c: 1}, 
    {a:'a', b:1, c: 5}, 

    {a:'b', b:3, c: 4}, 
    {a:'b', b:4, c: 2}, 
    {a:'b', b:3, c: 5}, 
    {a:'b', b:4, c: 3}, 
  ] 

  const {filteredValues, filterObj, SetFilterObj, ResetFilter} = useFilter(toSort); 
  console.log('test');
  function SetFilters(filters:any) { 
    SetFilterObj({...filterObj, ...filters}) 
  } 


  return <div> 
    {Object.keys(filterObj).map( key => { 
      return <span key={key}>{key}</span> 
    })} <br/> 
    {filteredValues.map( (value, i) => { 
      return <div key={i}> 
        {i}:{JSON.stringify(value)} 
      </div> 
    })} 
    <button onClick={ResetFilter} >Reset</button> 
    <button onClick={() => SetFilters({a:(v:any) => v.a === 'a'}) } >Filter by a === 'a'</button> 
    <button onClick={() => SetFilters({b:(v:any) => v.b % 2 === 0})} >Filter by b is even</button> 
  </div> 
} 

export default { 
  title: 'Input/InputFilter', 
  component: TestInput, 
} 

const Template:Story<any> = args => <TestInput {...args} /> 


export const TestInput_DefaultValueNull = Template.bind({}) 
TestInput_DefaultValueNull.args = { 
  //onPressEnter: () => console.log('on Press Enter'), 
} 
