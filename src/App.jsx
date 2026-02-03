import { useState, useRef, useEffect } from 'react'
import Hearts from './components/Hearts'
import SuccessModal from './components/SuccessModal'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [noButtonStyle, setNoButtonStyle] = useState({})
  const [noClickCount, setNoClickCount] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const noButtonRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const handleYesClick = () => {
    setShowSuccess(true)
  }

  const handleNoHover = () => {
    if (containerRef.current && noButtonRef.current) {
      const container = containerRef.current.getBoundingClientRect()
      const button = noButtonRef.current.getBoundingClientRect()
      
      // Calculate random position within container bounds
      const maxX = container.width - button.width - 100
      const maxY = container.height - button.height - 100
      
      const randomX = Math.random() * maxX - maxX / 2
      const randomY = Math.random() * maxY - maxY / 2
      
      setNoButtonStyle({
        transform: `translate(${randomX}px, ${randomY}px)`,
        transition: 'transform 0.3s ease-out'
      })
    }
  }

  const handleNoClick = (e) => {
    e.preventDefault()
    
    if (isMobile) {
      setNoClickCount(prev => {
        const newCount = prev + 1
        
        // After 3 clicks, push the No button completely off screen
        if (newCount >= 3) {
          setNoButtonStyle({
            transform: 'translate(200vw, -50vh)',
            transition: 'transform 0.8s ease-out',
            opacity: '0'
          })
        } else {
          // Small movement on each click
          setNoButtonStyle({
            transform: `translate(${newCount * 30}px, ${newCount * -20}px)`,
            transition: 'transform 0.3s ease-out'
          })
        }
        
        return newCount
      })
    } else {
      handleNoHover() // Move the button when clicked on desktop
    }
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-8"
    >
      <Hearts />
      
      {/* Retro background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rotate-45"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-4 border-retro-magenta rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-retro-pink-dark rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border-4 border-white"></div>
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        {/* Title */}
        <h1 className="font-retro text-4xl md:text-6xl lg:text-7xl text-white retro-text-shadow mb-4 animate-bounce-slow">
          WILL YOU BE
        </h1>
        <h2 className="font-retro text-3xl md:text-5xl lg:text-6xl text-retro-magenta retro-text-shadow mb-12 animate-pulse-pink">
          MY VALENTINE?
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center relative">
          {/* Yes Button */}
          <button
            onClick={handleYesClick}
            className="retro-button retro-button-yes text-xl md:text-2xl order-2 sm:order-1 transition-all duration-500"
            style={{
              transform: isMobile ? `scale(${1 + (noClickCount * 0.3)})` : 'scale(1)',
              zIndex: noClickCount > 0 ? 20 : 10
            }}
          >
            YES! 💖
          </button>

          {/* No Button - The one that runs away */}
          <button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onMouseOver={handleNoHover}
            onFocus={handleNoHover}
            onClick={handleNoClick}
            className="retro-button retro-button-no text-xl md:text-2xl order-1 sm:order-2 relative"
            style={noButtonStyle}
          >
            NO 😢
          </button>
        </div>

        {/* Fun message */}
        <p className="font-retro text-retro-pink-light text-sm md:text-lg mt-8 animate-wiggle">
          💫 RETRO LOVE IS IN THE AIR 💫
        </p>
        
        {/* Mobile-specific message when No button is being pushed away */}
        {isMobile && noClickCount > 0 && (
          <p className="font-retro text-white text-xs md:text-sm mt-4 animate-bounce">
            {noClickCount === 1 && "YES IS GETTING STRONGER! 💪"}
            {noClickCount === 2 && "YES IS TAKING OVER! 🚀"}
            {noClickCount >= 3 && "YES WINS! NO CHANCE FOR NO! 🎉"}
          </p>
        )}
      </div>

      {/* Success Modal */}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </div>
  )
}

export default App