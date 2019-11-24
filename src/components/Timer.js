import React from "react"
import { FaRegEdit, FaTrashAlt } from "react-icons/fa"

import { renderElapsedString } from "../helpers"

import styles from "../styles/Timer.module.css"

function Timer({ title, project, elapsed, onEditClick, onDeleteClick }) {
  const elapsedString = renderElapsedString(elapsed)

  return (
    <div className={styles.container}>
      <h3 className={styles.titleText}>{title}</h3>
      <h4 className={styles.projectText}>{project}</h4>
      <h2 className={styles.elapsedTime}>{elapsedString}</h2>
      <div className={styles.buttonsContainer}>
        <button
          type="button"
          className={styles.editButton}
          onClick={onEditClick}
        >
          <FaRegEdit className={styles.editIcon} />
        </button>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={onDeleteClick}
        >
          <FaTrashAlt className={styles.deleteIcon} />
        </button>
      </div>
      <button type="button" className={styles.startTimerButton}>
        Start
      </button>
    </div>
  )
}

export default Timer
