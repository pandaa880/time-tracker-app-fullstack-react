import React, { useState } from "react"
import { FaPlus } from "react-icons/fa"

import TimerForm from "./TimerForm"

import styles from "../styles/ToggleableTimerForm.module.css"

function ToggleableTimerForm(props) {
  /** set state */
  const [isTimerFormOpen, setIsTimerFormOpen] = useState(false)

  /** handle form submit */
  const handleFormSubmit = timer => {
    props.onFormSubmit(timer)
    setIsTimerFormOpen(false)
  }

  return (
    <div className={styles.container}>
      {isTimerFormOpen ? (
        <TimerForm
          onFormClose={() => setIsTimerFormOpen(false)}
          onFormSubmit={handleFormSubmit}
        />
      ) : (
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => setIsTimerFormOpen(true)}
          >
            <FaPlus className={styles.toggleIcon} />
          </button>
        </div>
      )}
    </div>
  )
}

export default ToggleableTimerForm
