export { ToArray, Filter, Group, Sort, Sorts, Unic, IndexArray, Pick, Concatenate } from './utils/arrays.utils'; 
export type { Indexed, Predicate, Sorter } from './utils/arrays.utils'; 

export { DaysPerMonth, IsLeapYear, IsToday, ParseDate } from './utils/date.utils'; 
//export type {  } from './utils/date.utils'; 

export { DefaultWidth, GetInputType, GetValueFromInput, 
  OnEnter, OnEnterOrTab, OnPress, OnTab } from './utils/htmlelement.utils'; 
export type { IEvent } from './utils/htmlelement.utils'; 

export { Copy, DeepCopy, 
  GetDefaultValueByType, GetTypeByValue, 
  IsEmpty, IsInRange, IsNaN, IsNull, 
  GetValueAt, GetValuesAt, SetValuesAt } from './utils/value_type.utils'; 