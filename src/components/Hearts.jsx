import { useState, useEffect } from 'react'

const Hearts = () => {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    // Create initial hearts
    const initialHearts = []
    for (let i = 0; i < 15; i++) {
      initialHearts.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 20 + 15,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2
      })
    }
    setHearts(initialHearts)

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 15 + 10,
          delay: 0,
          duration: Math.random() * 2 + 2
        }
        // Keep only the last 20 hearts
        return [...prev.slice(-19), newHeart]
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-float text-retro-pink opacity-60"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`
          }}
        >
          💖
        </div>
      ))}
    </div>
  )
}

export default Hearts