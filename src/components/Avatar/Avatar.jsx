import React from 'react'

const Avatar = ({ level, xp, maxXp, avatarImg, className }) => {
  const xpPercentage = (xp / maxXp) * 100
  
  return (
    <div className={`avatar-container ${className}`}>
      <div className="avatar-display">
        <img src={avatarImg} alt="Avatar" className="pixel-art" />
        <div className="level-badge">Lv. {level}</div>
      </div>
      <div className="xp-bar-container">
        <div className="xp-bar" style={{ width: `${xpPercentage}%` }}></div>
        <span className="xp-text">{xp}/{maxXp} XP</span>
      </div>
    </div>
  )
}

export default Avatar