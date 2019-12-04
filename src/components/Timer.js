import React, { useState, useEffect } from "react"
import { FaRegEdit, FaTrashAlt } from "react-icons/fa"

import TimerActionButton from "./TimerActionButton"

import { renderElapsedString } from "../helpers"

import styles from "../styles/Timer.module.css"

function Timer({
  onStartClick,
  onStopClick,
  id,
  title,
  project,
  elapsed,
  runningSince,
  onEditClick,
  onDeleteClick
}) {
  const [elapsedString, setElapsedString] = useState("")

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newElapsedString = renderElapsedString(elapsed, runningSince)
      setElapsedString(newElapsedString)
    }, 50)

    return () => {
      clearInterval(timerInterval)
    }
  }, [elapsed, elapsedString, runningSince])

  /** handle start and stop timer click */
  const handleStartClick = () => {
    onStartClick(id)
  }

  const handleStopClick = () => {
    onStopClick(id)
  }

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
      <TimerActionButton
        timerIsRunning={!!runningSince}
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
      />
    </div>
  )
}

// class Timer extends React.Component {
//   /** lifecycle methods */
//   componentDidMount() {
//     // this.forceIntervalUpdate = setInterval(() => this.forceUpdate(), 50)
//   }

//   componentWillUnmount() {
//     clearInterval(this.forceIntervalUpdate)
//   }

//   /** handle start and stop timer click */
//   handleStartClick = () => {
//     this.props.onStartClick(this.props.id)
//   }

//   handleStopClick = () => {
//     this.props.onStopClick(this.props.id)
//   }

//   render() {
//     const {
//       title,
//       project,
//       elapsed,
//       runningSince,
//       onEditClick,
//       onDeleteClick
//     } = this.props

//     const elapsedString = renderElapsedString(elapsed, runningSince)

//     return (
//       <div className={styles.container}>
//         <h3 className={styles.titleText}>{title}</h3>
//         <h4 className={styles.projectText}>{project}</h4>
//         <h2 className={styles.elapsedTime}>{elapsedString}</h2>
//         <div className={styles.buttonsContainer}>
//           <button
//             type="button"
//             className={styles.editButton}
//             onClick={onEditClick}
//           >
//             <FaRegEdit className={styles.editIcon} />
//           </button>
//           <button
//             type="button"
//             className={styles.deleteButton}
//             onClick={onDeleteClick}
//           >
//             <FaTrashAlt className={styles.deleteIcon} />
//           </button>
//         </div>
//         <TimerActionButton
//           timerIsRunning={!!runningSince}
//           onStartClick={this.handleStartClick}
//           onStopClick={this.handleStopClick}
//         />
//       </div>
//     )
//   }
// }

export default Timer
