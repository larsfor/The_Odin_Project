/* eslint-disable react/prop-types */
export default function Scoreboard({ currentScore, highScore}) {
  return (
    <>
      <h2>Current score: {currentScore}</h2>
      <h2>Best score: {highScore}</h2>
    </>
  )
}
