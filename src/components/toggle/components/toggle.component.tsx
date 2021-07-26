import React from 'react';
import {useToggle} from '../hooks/usetoggle.hook';


export 


interface IToggleTarget { 
  toggle:boolean, 
  toggleTarget:React.RefObject<HTMLDivElement>, 
} 
function ToggleTarget ({toggle, toggleTarget, children}:React.PropsWithChildren<IToggleTarget>) { 
  return <div tabIndex={0} ref={toggleTarget} hidden={toggle}> 
    {children} 
  </div> 
}