import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss'
import Label from '../Label'

const Photo = ({ data,typeObj}) => {
    const { image, title, colorLabel} = data
    return (
        <div className={styles.container}>
            <Image src={image} fill sizes='100%' alt={title}/>
            {typeObj=="category"&&<Label data={title} color={colorLabel} size={"30"} />}
            {typeObj=="recipe"&&<div className={styles.recipeName}>{title}</div>}
        </div>
    )
}

export default Photo