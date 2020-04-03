import React, { useState } from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const randomPositions = [
  "Downward Dog",
  "Child Pose",
  " Easy Pose",
  "Tree",
  "Boat",
]
const randomObject = []
const randomLimb = ["Hand", "Foot", "Head", "Shoulder", "Knee", "Back"]

// PLAN
// Generate a random yoga pose and hold a random object with a random limb
// input 5 nearby random objects
// random position
// random object
// random limb
// input for objects
// button to roll
// maybe an image of the yoga position?
function IndexPage() {
  const [isClicked, setIsClicked] = useState(false)
  const [pos, setPos] = useState("")
  const [obj, setObj] = useState("")
  const [limb, setLimb] = useState("")
  return (
    <div>
      <h1>Silly Yoga</h1>
      <label>Enter 5 objects that are nearby:</label>
      <input
        placeholder="separate with a comma"
        onBlur={e => {
          let objs = e.target.value
          let x = objs.split(",")
          for (let i = 0; i < x.length; i++) {
            randomObject.push(x[i])
          }
        }}
      />
      <input
        type="submit"
        onClick={() => {
          console.log(randomObject)
        }}
      />
      <br />
      <button
        onClick={() => {
          setPos(
            randomPositions[Math.floor(Math.random() * randomPositions.length)]
          )
          setObj(randomObject[Math.floor(Math.random() * randomObject.length)])
          setLimb(randomLimb[Math.floor(Math.random() * randomLimb.length)])
          setIsClicked(true)
        }}
      >
        Roll!
      </button>
      {isClicked && (
        <p>
          You must do {pos} and balance a {obj} on your {limb}
        </p>
      )}
    </div>
  )
}

export default IndexPage
