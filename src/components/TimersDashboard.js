import React, { useState } from "react"

import EditableTimersList from "./EditableTimersList"
import ToggleableTimerForm from "./ToggleableTimerForm"

import { newTimer } from "../helpers"

// import styles
import styles from "../styles/TimersDashboard.module.css"

function TimersDashboard() {
  // set state
  const [timers, setTimers] = useState([])

  /** create form submit handler */
  const handleCreateFormSubmit = timer => {
    createTimer(timer)
  }

  /** handle edit form submit */
  const handleEditFormSubmit = updatedValue => {
    updateTimer(updatedValue)
  }

  /** handle delete timer */
  const handleDeleteTimer = timerID => {
    deleteTimer(timerID)
  }

  /** create Timer */
  const createTimer = timer => {
    const new_timer = newTimer(timer)
    setTimers([...timers, new_timer])
  }

  /** update timer */
  const updateTimer = updatedValue => {
    /**
     * map through timers array and if we find the element with same id to update, update with updated value
     * */

    const updatedTimers = timers.map(timer => {
      if (timer.id === updatedValue.id) {
        return Object.assign({}, timer, {
          title: updatedValue.title,
          project: updatedValue.project
        })
      } else {
        return timer
      }
    })

    setTimers(updatedTimers)
  }

  /** delete timer */
  const deleteTimer = timerID => {
    const newTimers = [...timers]

    const timerIndex = newTimers.findIndex(element => element.id === timerID)

    newTimers.splice(timerIndex, 1)

    setTimers(newTimers)
  }

  return (
    <>
      <h2 className={styles.dashboardTitle}>Timers</h2>
      <div className={styles.mainContainer}>
        <div className={styles.timerListAndFormContainer}>
          <EditableTimersList
            timers={timers}
            onFormSubmit={handleEditFormSubmit}
            onDeleteClick={handleDeleteTimer}
          />
          <ToggleableTimerForm
            isOpen={true}
            onFormSubmit={handleCreateFormSubmit}
          />
        </div>
      </div>
    </>
  )
}

export default TimersDashboard
