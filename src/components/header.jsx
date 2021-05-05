import React from "react"

export default function Header(props) {
  return (
    <>
      <h1>{props.headerText}</h1>
      <p>{props.arbitraryPhrase}</p>
    </>
  )
}
