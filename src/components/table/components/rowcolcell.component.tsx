import React, {useContext} from 'react'; 



export const RowsContext = React.createContext({} as {rows:string[]}) 
export function Rows({rows, children}:React.PropsWithChildren<{rows:string[]}>) { 
  return <RowsContext.Provider value={{rows}}> 
    {rows.map(row => { 
      return <Row key={row} row={row}>{children}</Row> 
    })} 
  </RowsContext.Provider> 
} 


export const RowContext = React.createContext({} as {row:string}) 
export function Row({row, children}:React.PropsWithChildren<{row:string}>) { 
  return <tr><RowContext.Provider value={{row}}> 
    {children} 
  </RowContext.Provider></tr> 
}


export const ColsContext = React.createContext({} as {cols:string[]}) 
export function Cols({cols, children}:React.PropsWithChildren<{cols:string[]}>) { 
  return <ColsContext.Provider value={{cols}}> 
    {cols.map(col => { 
      return <Col key={col} col={col}>{children}</Col> 
    })} 
  </ColsContext.Provider> 
} 


export const ColContext = React.createContext({} as {col:string}) 
export function Col({col, children}:React.PropsWithChildren<{col:string}>) { 
  return <td><ColContext.Provider value={{col}}> 
    {children} 
  </ColContext.Provider></td> 
} 

/*
export const CellContext = React.createContext({} as {row:string, col:string}) 
export function Cell({children}:React.PropsWithChildren<any>) { 
  const {row} = useContext(RowContext); 
  const {col} = useContext(ColContext); 
  return <CellContext.Provider value={{row, col}}> 
    {children} 
  </CellContext.Provider> 
} 
*/