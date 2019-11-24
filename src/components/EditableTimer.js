import React, { useState } from "react"

import Timer from "./Timer"
import TimerForm from "./TimerForm"

function EditableTimer({
  id,
  title,
  project,
  elapsed,
  runningSince,
  onFormSubmit,
  onDeleteClick,
  onStartClick,
  onStopClick
}) {
  const [editFormOpen, setEditFormOpen] = useState(false)

  /** handle form open */
  const handleEditClick = () => {
    setEditFormOpen(true)
  }

  /** handle form close */
  const handleFormClose = () => {
    setEditFormOpen(false)
  }

  /** handle form submit */
  const handleFormSubmit = updatedValue => {
    onFormSubmit(updatedValue)
    setEditFormOpen(false)
  }

  /** handle delete timer click */
  const handleDeleteClick = () => {
    onDeleteClick(id)
    setEditFormOpen(false)
  }

  return (
    <>
      {editFormOpen ? (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormClose={handleFormClose}
          onFormSubmit={handleFormSubmit}
        />
      ) : (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          onStartClick={onStartClick}
          onStopClick={onStopClick}
        />
      )}
    </>
  )
}

export default EditableTimer
