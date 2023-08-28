import React, { useState } from "react"
import styles from "./style.module.css"
import { Calendar } from 'react-feather';

export const TodoList = () => {
    const [complete, setComplete] = useState(false)
    const todoListData = [
        {
            id: 0,
            title: "Henry",
            description: "rave lord",
            dueDate: "01/10/2022"
        }
    ]
    return (
        <div>
            <div className={styles.firstContainer}>
                <div className={styles.container} onClick={() => setComplete(!complete)}>
                    <div className={styles.round}>
                        <input type="checkbox" checked={complete} id="checkbox" />
                        <label></label>
                    </div>
                </div>
                <div className={styles.textHolder}>
                    <h1>Henry</h1>
                    <p>Rave lord</p>
                    <div className={styles.dueDateContainer}>
 <Calendar />
 <p>01/10/22</p>
                    </div>
                </div>
            </div>
            <div className={styles.secondContainer}>

            </div>
        </div>
    )
}