import React from 'react';
import { Grid, Paper, styled } from '@mui/material';
import { useDroppable } from '@dnd-kit/core';

export const TaskArea = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minWidth: 50,
  }));

  const {setNodeRef: setRef1} = useDroppable({
    id: 'item-1',
  });
  const {setNodeRef: setRef2} = useDroppable({
    id: 'item-2',
  });
  const {setNodeRef: setRef3} = useDroppable({
    id: 'item-3',
  });
  const {setNodeRef: setRef4} = useDroppable({
    id: 'item-4',
  });

  return(
    <>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={1.5} ref={setRef1}>
            <Item>01:00</Item>
          </Grid>
          <Grid item xs={1.5} ref={setRef2}>
            <Item>02:00</Item>
          </Grid>
          <Grid item xs={1.5} ref={setRef3}>
            <Item>03:00</Item>
          </Grid>
          <Grid item xs={1.5} ref={setRef4}>
            <Item>04:00</Item>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default TaskArea