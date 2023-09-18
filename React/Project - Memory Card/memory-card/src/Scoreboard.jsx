/* eslint-disable react/prop-types */
export default function Scoreboard({ currentScore, highScore}) {
  return (
    <>
      <h3>Current score: {currentScore}</h3>
      <h3>Best score: {highScore}</h3>
    </>
  )
}
