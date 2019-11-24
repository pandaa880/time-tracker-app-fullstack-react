import React, { useState } from "react"

import styles from "../styles/TimerForm.module.css"

function TimerForm(props) {
  /** set state */
  const [title, setTitle] = useState(props.title || "")
  const [project, setProject] = useState(props.project || "")

  // submit button text
  const submitButtonText = props.id ? "Update" : "Create"

  /** handle form submit */
  const handleFormSubmit = e => {
    // stop default behavior
    e.preventDefault()
    // pass all the required values to function from parent
    props.onFormSubmit({
      id: props.id,
      title,
      project
    })
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="project">Project</label>
          <input
            type="text"
            name="project"
            id="project"
            value={project}
            onChange={e => setProject(e.target.value)}
          />
        </div>
        <div className={styles.formButtonsContainer}>
          <button
            type="submit"
            className={styles.submitButton}
            onClick={handleFormSubmit}
          >
            {submitButtonText}
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={props.onFormClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default TimerForm
