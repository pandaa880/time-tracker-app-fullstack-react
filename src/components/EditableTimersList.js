import React from "react"

import EditableTimer from "./EditableTimer"

// import styles
import styles from "../styles/EditableTimersList.module.css"

function EditableTimersList({ timers, onFormSubmit, onDeleteClick }) {
  return (
    <div className={styles.timersList}>
      {timers && timers.length > 0 ? (
        timers.map(timer => (
          <EditableTimer
            key={timer.id}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            runningSince={timer.runningSince}
            onFormSubmit={onFormSubmit}
            onDeleteClick={onDeleteClick}
          />
        ))
      ) : (
        <h3 className={styles.noTimersText}>
          No Timers.. <br /> Add by clicking a + button below.
        </h3>
      )}
    </div>
  )
}

export default EditableTimersList
