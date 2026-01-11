import { useEffect, useState, useRef } from 'react'

function VideoSection() {
  const [isMobileView, setIsMobileView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    updateView()
    window.addEventListener('resize', updateView)
    return () => window.removeEventListener('resize', updateView)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error)
      })
    }
  }, [isMobileView])

  const videoSrc = isMobileView ? '/Mobile.mp4' : '/Desktop.mp4'

  return (
    <section className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <video
        ref={videoRef}
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        onLoadStart={() => console.log('Video loading...')}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default VideoSection
