import React from "react"

import EditableTimer from "./EditableTimer"

// import styles
import styles from "../styles/EditableTimersList.module.css"

function EditableTimersList() {
  return (
    <div className={styles.timersList}>
      <EditableTimer
        title="Learn React"
        project="React 101"
        elapsed="8986300"
        runningSince={null}
        editFormOpen={false}
      />
      <EditableTimer
        title="Learn GraphQl"
        project="React with GraphQl"
        elapsed="3890985"
        runningSince={null}
        editFormOpen={true}
      />
    </div>
  )
}

export default EditableTimersList
