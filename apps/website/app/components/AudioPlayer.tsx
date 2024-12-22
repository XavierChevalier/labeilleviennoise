import { useRef, forwardRef, useImperativeHandle, useEffect } from 'react'

interface AudioPlayerProps {
  src: string
  title: string
  onTimeUpdate?: (currentTime: number) => void
}

export interface AudioPlayerRef {
  seekTo: (time: number) => void
}

export const AudioPlayer = forwardRef<AudioPlayerRef, AudioPlayerProps>(
  ({ src, title, onTimeUpdate }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null)

    useImperativeHandle(ref, () => ({
      seekTo: (time: number) => {
        if (audioRef.current) {
          audioRef.current.currentTime = time
          audioRef.current.play()
        }
      },
    }))

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.2
      }
    }, [])

    useEffect(() => {
      const audio = audioRef.current
      if (!audio || !onTimeUpdate) return

      const handleTimeUpdate = () => {
        onTimeUpdate(Math.floor(audio.currentTime))
      }

      audio.addEventListener('timeupdate', handleTimeUpdate)
      return () => audio.removeEventListener('timeupdate', handleTimeUpdate)
    }, [onTimeUpdate])

    return (
      <div className="w-full max-w-2xl mx-auto my-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <audio ref={audioRef} controls className="w-full" preload="metadata">
          <source src={src} type="audio/mpeg" />
          Votre navigateur ne supporte pas l'élément audio.
        </audio>
      </div>
    )
  }
)

AudioPlayer.displayName = 'AudioPlayer'
