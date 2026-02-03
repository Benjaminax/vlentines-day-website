import { useEffect, useState } from 'react'

const SuccessModal = ({ onClose }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  const handleClose = () => {
    setShow(false)
    setTimeout(onClose, 300)
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-gradient-to-br from-retro-pink to-retro-purple p-8 rounded-lg border-4 border-white shadow-2xl max-w-md mx-4 transform transition-all duration-300 ${show ? 'scale-100' : 'scale-95'}`}>
        {/* Success content */}
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">
            💖✨💖
          </div>
          
          <h2 className="font-retro text-2xl md:text-3xl text-white retro-text-shadow mb-4">
            YAAAY!
          </h2>
          
          <p className="font-retro text-white text-sm md:text-base mb-6">
            YOU MADE MY DAY!
            <br />
            💕 HAPPY VALENTINE'S DAY! 💕
          </p>

          {/* Celebration effects */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>🎉</div>
            <div className="absolute -top-4 -right-4 text-2xl animate-bounce" style={{ animationDelay: '0.3s' }}>🎊</div>
            <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>💖</div>
            <div className="absolute -bottom-4 -right-4 text-2xl animate-bounce" style={{ animationDelay: '0.7s' }}>✨</div>
            
            <button
              onClick={handleClose}
              className="retro-button bg-retro-magenta hover:bg-retro-pink-dark text-white font-retro px-6 py-3 border-2 border-white"
            >
              YAY! 🚀
            </button>
          </div>
        </div>

        {/* Floating hearts in modal */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-retro-pink-light opacity-80 animate-bounce"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                fontSize: `${Math.random() * 15 + 15}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '2s'
              }}
            >
              💕
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SuccessModal