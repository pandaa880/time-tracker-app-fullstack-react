import React from "react"

import styles from "../styles/TimerActionButton.module.css"

function TimerActionButton({ timerIsRunning, onStartClick, onStopClick }) {
  return (
    <>
      {timerIsRunning ? (
        <button
          type="button"
          className={styles.stopTimerButton}
          onClick={onStopClick}
        >
          Stop
        </button>
      ) : (
        <button
          type="button"
          className={styles.startTimerButton}
          onClick={onStartClick}
        >
          Start
        </button>
      )}
    </>
  )
}

export default TimerActionButton
