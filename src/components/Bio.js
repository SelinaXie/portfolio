import React from 'react'
import styles from './Bio.module.css'
import me from './mee.jpg'


function Bio(props) {

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={me} alt="Me" />
      <p>
        

        A rising junior at <a href="http://shanghai.nyu.edu/">NYU Shanghai</a> major in Data Science
        .
        <br />
        Have passions for coding, handcrafts, and design.<br />
        <br />
        Skills: Python, C++, JavaScript, React
      </p>


    </div>
  )
}

export default Bio
