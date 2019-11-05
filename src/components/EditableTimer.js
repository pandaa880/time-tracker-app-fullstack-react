import React from "react"

import Timer from "./Timer"
import TimerForm from "./TimerForm"

function EditableTimer({
  editFormOpen,
  title,
  project,
  elapsed,
  runningSince
}) {
  return (
    <>
      {editFormOpen ? (
        <TimerForm title={title} project={project} />
      ) : (
        <Timer
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
        />
      )}
    </>
  )
}

export default EditableTimer
