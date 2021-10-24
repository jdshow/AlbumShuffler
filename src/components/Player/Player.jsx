import React from 'react'

import './player.css'

export const Player = () => {
  return (
    <div id="player" className="player">
      <div id="control-group" className="button-group">
        <button id="track-back-button" className="player-button track-back-button" aria-label="Play" />
        <button id="rewind-button" className="player-button rewind-button" aria-label="Play" />
        <button id="stop-button" className="player-button stop-button" aria-label="Play" />
        <button id="play-button" className="player-button play-button" aria-label="Play" />
        <button id="fast-forward-button" className="player-button fast-forward-button" aria-label="Play" />
        <button id="track-forward-button" className="player-button track-forward-button" aria-label="Play" />
      </div>
    </div>
  )
}