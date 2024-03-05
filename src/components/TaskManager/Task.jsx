import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';


export const Task = ({id, title}) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id});
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  
  return (
    <>
        <button className='task' ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {title}
        </button>
    </>
  );
}

export default Task