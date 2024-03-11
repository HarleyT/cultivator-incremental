import Task from "./Task";

export const TaskArea = () => {

  return (
    <>
    <div>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
    </>
  )
}

export default TaskArea


// import React from 'react';
// import { Grid, Paper, styled } from '@mui/material';
// import { DndContext, closestCorners, useDroppable } from '@dnd-kit/core';

// function Droppable(props) {
//   const {setNodeRef} = useDroppable({
//     id: props.id,
//   });
  
//   return (
//     <div ref={setNodeRef}>
//       {props.children}
//     </div>
//   );
// }

// export const TaskArea = () => {
//   const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     minWidth: 50,
//   }));

//   const droppables = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

//   const {setNodeRef: setRef1} = useDroppable({
//     id: 'item-1',
//   });
//   const {setNodeRef: setRef2} = useDroppable({
//     id: 'item-2',
//   });
//   const {setNodeRef: setRef3} = useDroppable({
//     id: 'item-3',
//   });
//   const {setNodeRef: setRef4} = useDroppable({
//     id: 'item-4',
//   });
//   const {setNodeRef: setRef5} = useDroppable({
//     id: 'item-5',
//   });
//   const {setNodeRef: setRef6} = useDroppable({
//     id: 'item-6',
//   });
//   const {setNodeRef: setRef7} = useDroppable({
//     id: 'item-7',
//   });
//   const {setNodeRef: setRef8} = useDroppable({
//     id: 'item-8',
//   });
//   const {setNodeRef: setRef9} = useDroppable({
//     id: 'item-9',
//   });
//   const {setNodeRef: setRef10} = useDroppable({
//     id: 'item-10',
//   });
//   const {setNodeRef: setRef11} = useDroppable({
//     id: 'item-11',
//   });
//   const {setNodeRef: setRef12} = useDroppable({
//     id: 'item-12',
//   });

//   return(
//     <>
//       <div>
//       <DndContext
//       collisionDetection={closestCorners}>
//         <Grid container spacing={1}>
//           {droppables.map((id) => (
//             <Droppable id={id} key={id}>
//               <Item>{id}</Item>
//             </Droppable>
//           ))}
//           <Grid item xs={1.5} ref={setRef1}>
//             <Item>01:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef2}>
//             <Item>02:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef3}>
//             <Item>03:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef4}>
//             <Item>04:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef5}>
//             <Item>05:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef6}>
//             <Item>06:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef7}>
//             <Item>07:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef8}>
//             <Item>08:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef9}>
//             <Item>09:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef10}>
//             <Item>10:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef11}>
//             <Item>11:00</Item>
//           </Grid>
//           <Grid item xs={1.5} ref={setRef12}>
//             <Item>12:00</Item>
//           </Grid>
//         </Grid>
//         </DndContext>
//       </div>
//     </>
//   )
// }

// export default TaskArea