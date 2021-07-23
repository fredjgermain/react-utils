/**
 * 
 */
interface Indexer { 
  [key:string]:boolean|Indexer 
} 

/** ITYPE 
 * 
 */
interface IType { 
  defaultValue: any; 
  name: string; 
  //nestedType?: IType[] | {[key:string]:IType}; 
  enums?: string[]; // ?? 
  isEnum?: boolean; 
  isArray?: boolean; 
  isScalar?: boolean; 
  isObject?: boolean; 
} 



/** IOPTION
 * 
*/ 
interface IOption { 
  value:any; 
  label:string; 
}


/** IFIELD
 * 
 */
interface IField {
  name: string; 
  type: IType; 

  label: string; 
  ref?: string; 
  options?: any; 
  abbrev: boolean; 
  // required?: boolean; 
  // unique?: boolean; 
  // regex: string ?? 
  // format: string ?? 
  // validators: any[];
  // abbrev: 
  
}


/** IMODEL
 * 
 */
interface IModel { 
  accessor:string, 
  label:string[], 
  description:string[], 
  fields:IField[], 
} 


/** IENTRY 
 * 
 */
interface IEntry { 
  _id: string; 
  [key:string]: any; 
} 


/** ERRPROP
 * 
*/
interface ErrProp { 
  name: string; 
  path: string; 
  value: any; 
  [key:string]: any; 
} 

/** IMONGOFIELD 
 * 
*/
interface IMongoField {
  path:string;  // accessor 
  instance:string; 
  validators: any; 
  options: { 
    ref?: string; 
    label?: string; 
    sortType?: string; 
    defaultValue?: any; 
    format?: string; 
    enum?: any[]; 
    abbrev?: boolean; 
    [key:string]:any; 
  }; 
  $embeddedSchemaType?:{ 
    instance:string; 
  }; 
  [key:string]:any; 
}

