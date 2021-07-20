// --------------------------------------------------------
import { IInput } from '../input/input.component'; 
import { GetDefaultValueByType, GetTypeByValue, IsNull } from '../../../utils/value_type.utils'; 
import { DefaultWidth, IEvent, GetValueFromInput, OnEnter, GetInputType } from '../../../utils/htmlelement.utils';




export interface IUseInputArray extends IInput { 
  ElementArgs:(at?:number) => IInput; 
  Create:(newValue:any) => void; 
  Update:(at:number, newValue:any) => void; 
  Delete:(at:number) => void; 
} 

// USE INPUT ARRAY ========================================
export function useInputArray({...props}:IInput):IUseInputArray { 
  const {itype, inputType, value} = GetITypeAndValue(props); 
  const placeholder = props.placeholder ?? ''; 

  // ElementArgs 
  function ElementArgs(at?:number):IInput { 
    const valueAt = value[at??-1] ?? itype.defaultValue; 
    const onSetValue = (newValue:any) => {}; 
    const onPressEnter = () => {}; 

    return {...props, type:itype, value:valueAt, placeholder, onSetValue, onPressEnter} 
  }

  // Creates new elements 
  function Create (newValue:any) { 
    props.onSetValue([...value, newValue]); 
  }; 
  // Update existing new elements 
  function Update (at:number, newValue:any) { 
    const copy = [...value]; 
    copy[at] = newValue; 
    props.onSetValue(copy); 
  }; 
  // Delete existing elements 
  function Delete (at:number) { 
    const copy = [...value]; 
    copy.splice(at,1); 
    props.onSetValue(copy); 
  }; 

  return {...props, ElementArgs, Create, Update, Delete}; 
}


/** GetITypeAndValue 
 * Infers itype, inputType, defaultValue and value from props or set them to a default value. 
 * @param param0 
 * @returns 
 */
 function GetITypeAndValue({...props}:IInput) { 
  props.type = props?.type ?? GetTypeByValue(props.value) ?? 'string'; 
  const itype = typeof props.type != 'string' ? props.type: 
    { name:props.type, defaultValue: GetDefaultValueByType(props.type) } as IType; 
  const inputType = props.inputType ?? GetInputType(itype.name); 
  const value = IsNull(props.value) ? []: props.value as any[]; // ?ToArray? 
  return {itype, inputType, value}; 
}