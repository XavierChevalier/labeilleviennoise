import fs from 'fs'
import path from 'path'
import type { LoaderFunction } from '@remix-run/node'
import { useRef, useState } from 'react'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'
import { AudioPlayer, type AudioPlayerRef } from '../components/AudioPlayer'
import { AudioTranscript } from '../components/AudioTranscript'

export const loader = (async () => {
  const transcriptPath = path.join(
    process.cwd(),
    'app/content/interviews/le-crock-show-18-12-24.html'
  )
  const transcript = fs.readFileSync(transcriptPath, 'utf-8')
  return typedjson({ transcript })
}) satisfies LoaderFunction

export default function InterviewRoute() {
  const { transcript } = useTypedLoaderData<typeof loader>()
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
          content={transcript}
          onTimeClick={(seconds) => audioPlayerRef.current?.seekTo(seconds)}
          currentTime={currentTime}
        />
      </div>
    </div>
  )
}
