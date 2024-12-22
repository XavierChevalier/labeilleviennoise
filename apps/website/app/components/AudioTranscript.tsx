import { useRef, useMemo } from 'react'

interface AudioTranscriptProps {
  content: string
  onTimeClick: (seconds: number) => void
  currentTime?: number
}

export function AudioTranscript({
  content,
  onTimeClick,
  currentTime,
}: AudioTranscriptProps) {
  const transcriptRef = useRef<HTMLDivElement>(null)

  // get all timestamps and find the active one
  const timestamps = useMemo(() => {
    const matches = [...content.matchAll(/\[(\d{2}):(\d{2}):(\d{2})\]/g)]
    return matches
      .map((match) => {
        const [, hours, minutes, seconds] = match
        return (
          parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)
        )
      })
      .sort((a, b) => a - b)
  }, [content])

  const activeTimestamp = useMemo(() => {
    if (currentTime === undefined) return null
    return timestamps.reduce((prev, curr) => {
      if (curr <= currentTime) return curr
      return prev
    }, timestamps[0])
  }, [currentTime, timestamps])

  const processedContent = content.replace(
    /\[(\d{2}):(\d{2}):(\d{2})\]/g,
    (match, hours, minutes, seconds) => {
      const totalSeconds =
        parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)
      const isActive = activeTimestamp === totalSeconds

      return `<span 
        class="cursor-pointer transition-colors ${
          isActive ? 'text-primary font-bold' : 'hover:text-primary'
        }" 
        data-time="${totalSeconds}"
        onclick="window.handleTimeClick(${totalSeconds})"
        id="timestamp-${totalSeconds}"
      >${match}</span>`
    }
  )

  if (activeTimestamp !== null && transcriptRef.current) {
    const activeElement = transcriptRef.current.querySelector(
      `#timestamp-${activeTimestamp}`
    )
    activeElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="prose lg:prose-xl max-w-none mt-8 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Transcription</h2>
      <div
        ref={transcriptRef}
        className="max-h-[500px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100"
        dangerouslySetInnerHTML={{
          __html: processedContent,
        }}
      />
    </div>
  )
}
