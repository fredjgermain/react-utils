import { useState } from 'react'; 

// -------------------------------------------------------- 
import { Filter, Predicate } from '../../../utils'; 


export function InputFilter() {

}


type FilterObj<T> = {[key:string]:Predicate<T>} 

export function useFilter<T>(toFilter:T[], defaultFilterObj?:FilterObj<T>) { 
  const [filterObj, setFilterObj] = useState(defaultFilterObj ?? {}) 

  // Convert SorterObject into an predicates array usable by Sorts
  const predicates = (t: T, i: number, a: T[], positive: T[], negative: T[]) => {
    return Object.keys(filterObj).every( key => {     
      return filterObj[key](t, i, a, positive, negative); 
    }) 
  }

  function ResetFilter() { 
    setFilterObj(defaultFilterObj ?? {}); 
  } 

  function SetFilterObj(newFilterObj:FilterObj<T>) { 
    let copyFilters = {} as FilterObj<T>; 
    // Ignore newSorter Value if it === 0; 
    Object.keys(newFilterObj).forEach( key => { 
      if(newFilterObj[key]) 
        copyFilters[key] = newFilterObj[key]; 
    }) 
    setFilterObj(copyFilters); 
  } 

  console.log(filterObj); 
  
  const [filteredValues] = Filter(toFilter, predicates); 
  return {filteredValues, filterObj, SetFilterObj, ResetFilter} 
}