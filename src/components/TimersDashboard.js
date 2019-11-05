import React from "react"

import EditableTimersList from "./EditableTimersList"
import ToggleableTimerForm from "./ToggleableTimerForm"

// import styles
import styles from "../styles/TimersDashboard.module.css"

function TimersDashboard() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.timerListAndFormContainer}>
        <EditableTimersList />
        <ToggleableTimerForm isOpen={true} />
      </div>
    </div>
  )
}

export default TimersDashboard
