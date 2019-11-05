import React from "react"

import styles from "../styles/TimerForm.module.css"

function TimerForm({ title, project }) {
  // submit button text
  const submitButtonText = title ? "Update" : "Create"

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" defaultValue={title} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="project">Project</label>
          <input
            type="text"
            name="project"
            id="project"
            defaultValue={project}
          />
        </div>
        <div className={styles.formButtonsContainer}>
          <button className={styles.submitButton}>{submitButtonText}</button>
          <button className={styles.cancelButton}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default TimerForm
