import React from 'react'
import styles from './notFoundBlock.module.scss'

export const notFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>😔</span>
                <br/>
                Ничего не найдено
            </h1>
            <p className={styles.description}>Мы долго пытались, но так ничего и не нашли</p>
        </div>
    )
}

export default notFoundBlock