import { useReducer } from "react";

const ACTIONS = {
  EARTH: 'Earth',
  MARS: 'Mars'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.EARTH:
      return {planet: state.planet = 24}
    case ACTIONS.MARS:
      return {planet: state.planet = 12}
    default:
      return state
  }
}

export default function DayNightCycle() {
  const [state, dispatch] = useReducer(reducer, {planet: 24})

  function earth() {
    dispatch({ type: ACTIONS.EARTH })
  }

  function mars() {
    dispatch({ type: ACTIONS.MARS })
  }


  return (
    <>
        <div className="box-2 planets">
        <button onClick={earth}>earth</button>
        <button onClick={mars}>mars</button>
        <span>{state.planet}</span>
        </div>
    </>
  );
  
}
