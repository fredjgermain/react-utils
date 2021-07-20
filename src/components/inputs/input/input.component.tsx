import React from 'react'; 

// --------------------------------------------------------
import { GetDefaultValueByType, GetTypeByValue, IsNull } from '../../../utils/value_type.utils'; 
import { DefaultWidth, IEvent, GetValueFromInput, OnEnter, GetInputType } from '../../../utils/htmlelement.utils';



export interface IInput { 
  type?: IType|string; 
  value?: any; 
  inputType?: string; 

  placeholder?: string; 

  onSetValue: (newValue:any) => void; 
  onPressEnter?: () => void; 
  onPressTab?: () => void; 

  sizeFunc?: (value:any) => number; 
  inputAttribute?: React.InputHTMLAttributes<HTMLInputElement>; 
}


/** Input 
 * Accepts most input types 
 * @param param0 
 * @returns 
 */
export function Input({...props}:IInput) { 
  const {width, ...args} = PrepArgs(props); 
  const style = {...props.inputAttribute?.style, ...width}; 
  const inputArgs = {...props.inputAttribute, ...args, style}; 
  
  if(args.type ==='checkbox') 
    return <input {...inputArgs} {...{checked:args.value} }  /> 
  return <input {...inputArgs} /> 
}



/** PrepArgs
 * Assures that all necessary properties are defined defined or set to their default value. 
 * 
 * @param param0 
 * @returns 
 */
function PrepArgs({...props}:IInput) { 
  const {itype, inputType:type, value} = GetITypeAndValue(props); 
  const placeholder = props.placeholder ?? ''; 

  // Called on input Change
  const onChange = (event:IEvent) => { 
    const valueFromInput = GetValueFromInput(event); 
    const newValue = IsNull(valueFromInput) ? itype.defaultValue : valueFromInput; 
    if(JSON.stringify(newValue) !== JSON.stringify(value) ) 
      props.onSetValue(newValue); 
  } 

  // Tab Function called on KeyDown. 
  //const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => OnTab(event, props.onPressEnter); 
  const onBlur = () => props.onPressEnter && props.onPressEnter(); 
  // Enter Function called on KeyUp. 
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => OnEnter(event, props.onPressEnter); 

  // Calculate input width 
  const width = props.sizeFunc ? 
    {width: `${props.sizeFunc(value)}ch`}: 
    {width: `${DefaultWidth(value, itype.name)}ch`}; 
  
  // Regroups to arguments to pass to input tag
  return {type, value, placeholder, onChange, onKeyUp, width, onBlur} 
}



/** GetITypeAndValue 
 * Infers itype, inputType, defaultValue and value from props or set them to a default value. 
 * @param param0 
 * @returns 
 */
function GetITypeAndValue({...props}:IInput) { 
  props.type = props?.type ?? GetTypeByValue(props.value) ?? 'string'; 
  const itype = typeof props.type != 'string' ? props.type: 
    {name:props.type, defaultValue: GetDefaultValueByType(props.type)} as IType; 
  const inputType = props.inputType ?? GetInputType(itype.name); 
  const value = IsNull(props.value) ? itype.defaultValue: props.value; 
  return {itype, inputType, value}; 
}