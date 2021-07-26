import React, { useContext } from 'react'; 
import { Story } from '@storybook/react'; 

import { 
  Cols, ColContext, Rows, RowContext, 
  THeads, THeadContext, 
 } from '../_table'; 


//import { useFilter, useSorter } from '../../_inputs'; 
import { usePager, PagerBtns, PageOfPages } from '../../../pager'; 


export default { 
  title: 'Table/statictable', 
  component: TemplateComponent, 
} 


function usePrepTable(entries:Item[]) { 
  // const filters = useFilter(entries); 
  // const sorters = useSorter(filters.matchValues); 
  const paging = usePager(entries, 10); 
  // const indexedDatas = IndexDatasByKey('_id', paging.page); 
  const rows = Object.keys(paging.page); 

  return {rows, paging}; 
} 


function MockInlineTable({datas, cols}:{datas:Item[], cols:string[]}) { 
  const {rows, paging} = usePrepTable(datas); 

  function Read({row,col}:{row:string, col:string}) { 
    return <span>row: {row} - col: {col}</span>
  }

  const GetCellArgs = () => { 
    const {row} = useContext(RowContext); 
    const {col} = useContext(ColContext); 
    const entry = paging.page[row]; 

    const value = entry ? entry[col]: ''; 
    const editValue = (newValue:any) => {return;}

    // const ifield:IField = {accessor:col, defaultValue:'', label:'', type:{}} 
    // const options = [] as IOption[]; 
    //return {value, editValue, ifield, options} 
  }

  /*const GetHeadArgs = () => { 
    const {col} = useContext(THeadContext); 
    const ifield:IField = {accessor:col, defaultValue:'', label:col, type:'string'} 
    return {ifield}; 
  }*/

  // <THeads {...{cols}} ><THeadCell {...{GetHeadArgs}}/></THeads> 
  return <div> 
    <table> 
      <thead><tr> 
        
      </tr></thead> 
      <tbody> 
      <Rows {...{rows}}> 
        <Cols {...{cols}} > 
          <Cell {...{Read}} /> 
        </Cols> 
      </Rows> 
      </tbody> 
    </table> 
    <PagerBtns {...paging} /> 
  </div> 
} 


function Cell({...props}:{Read:(row, col) => JSX.Element}) { 
  const {row} = useContext(RowContext); 
  const {col} = useContext(ColContext); 
  return <props.Read {...{row, col}} /> 
}


function TemplateComponent({datas, cols, defaultItem}:{datas:Item[], cols:string[], defaultItem:Item}) { 
  return <div> 
    <MockInlineTable  {...{datas, cols}} /> 
  </div> 
} 

const Template:Story<{datas:Item[], cols:string[], defaultItem:Item}> = (args) => <TemplateComponent {...args} /> 

interface Item { 
  _id: string; 
  value: string; 
  value2: string; 
}
export const TestTabler = Template.bind({}) 
TestTabler.args = { 
  datas: [ 
    {_id:'1a', value:'asd', value2:'fgsf'}, 
    {_id:'2a', value:'asd', value2:'fgaf'}, 
    {_id:'3a', value:'asd', value2:'fgf'}, 
    {_id:'4a', value:'fg', value2:'fgdff'}, 
    {_id:'5a', value:'h', value2:'fgnf'}, 
    {_id:'6a', value:'asd', value2:'ggf'}, 
    {_id:'7a', value:'j', value2:'fgf'}, 
    {_id:'8a', value:'k', value2:'fhgf'}, 
    {_id:'9b', value:'asd', value2:'fhgf'}, 
    {_id:'10c', value:'ll', value2:'fgf'}, 
    {_id:'11c', value:'aa', value2:'fgf'}, 
    {_id:'c12', value:'asd', value2:'fhgf'}, 
    {_id:'13b', value:'gg', value2:'fgf'}, 
    {_id:'14g', value:'asd', value2:'fhgf'}, 
    {_id:'15f', value:'cc', value2:'fghf'}, 
    {_id:'16f', value:'asd', value2:'h'}, 
    {_id:'17g', value:'g', value2:'fgf'}, 
    {_id:'18h', value:'asd', value2:'fgf'}, 
    {_id:'19j', value:'g', value2:'fgf'}, 
  ] as Item[], 
  cols: ['_id','value', 'value2'], 
  defaultItem: {_id:'', value:'', value2:''}, 
} 
