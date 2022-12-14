import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  MARK_TASK_AS_FINISHED = 'MARK_TASK_AS_FINISHED',

}

export function addNewTaskAction (newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload : {
     newCycle
    }
  }
}

export function interruptCycleAction () {
  return {
    type: ActionTypes.INTERRUPT_CYCLE
  }

}

export function markAsFinishedAction () {
  return {
      type: ActionTypes.MARK_TASK_AS_FINISHED,     
}
}