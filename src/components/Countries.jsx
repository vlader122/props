import React from 'react'

function Countries(props) {
  return (
    <>
        <img src={props.url} alt="" width={100} height={100} />
        <p>{props.money}</p>
        <small>{props.pais}</small>
        <br />
    </>
  )
}

export default Countries