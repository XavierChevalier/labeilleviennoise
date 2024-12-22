import { useRef, useState } from 'react'
import { renderToString } from 'react-dom/server'
import { AudioPlayer, type AudioPlayerRef } from '../components/AudioPlayer'
import { AudioTranscript } from '../components/AudioTranscript'
import { Interview } from '@/content/interviews/le-crock-show-18-12-24'

export default function InterviewRoute() {
  const audioPlayerRef = useRef<AudioPlayerRef>(null)
  const [currentTime, setCurrentTime] = useState<number>()

  if (typeof window !== 'undefined') {
    window.handleTimeClick = (seconds: number) => {
      audioPlayerRef.current?.seekTo(seconds)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Interview radio</h1>
        <img
          src="https://crockradio.com/images/article/4/Crockshow.jpg"
          alt="Le Crock Show du 18/12/24 avec Anne-Marie Sueur"
          className="w-full rounded-lg shadow-lg mb-8"
        />

        <AudioPlayer
          ref={audioPlayerRef}
          src="/audio/le-crock-show-18-12-24.mp3"
          title="Interview Crock Show du 18/12/24 avec Anne-Marie Sueur"
          onTimeUpdate={setCurrentTime}
        />

        <AudioTranscript
          content={renderToString(<Interview />)}
          onTimeClick={(seconds) => audioPlayerRef.current?.seekTo(seconds)}
          currentTime={currentTime}
        />
      </div>
    </div>
  )
}
