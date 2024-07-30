import React, { useRef, useEffect, useState } from 'react'

const Textarea = () => {
  const [text, setText] = useState('')
  const [maxCharsPerLine, setMaxCharsPerLine] = useState(80)
  const [maxLines, setMaxLines] = useState(30)

  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }

    const calculateMaxCharsPerLine = () => {
      const screenWidth = window.innerWidth
      const newMaxCharsPerLine = Math.floor(screenWidth / 10.5)
      setMaxCharsPerLine(newMaxCharsPerLine)
    }

    const calculateMaxLines = () => {
      const screenHeight = window.innerHeight
      const lineHeightPx = 16 * 1.5 // 16px font-size with 1.5 line-height
      const newMaxLines = Math.floor((screenHeight - 50) / lineHeightPx)
      setMaxLines(newMaxLines)
    }

    calculateMaxCharsPerLine()
    calculateMaxLines()

    window.addEventListener('resize', calculateMaxCharsPerLine)
    window.addEventListener('resize', calculateMaxLines)

    return () => {
      window.removeEventListener('resize', calculateMaxCharsPerLine)
      window.removeEventListener('resize', calculateMaxLines)
    }
  }, [])

  const handleChange = (e) => {
    const inputText = e.target.value
    const lines = inputText.split('\n')
    let wrappedLines = []

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i]
      while (line.length > maxCharsPerLine) {
        wrappedLines.push(line.substring(0, maxCharsPerLine))
        line = line.substring(maxCharsPerLine)
      }
      wrappedLines.push(line)
    }

    if (wrappedLines.length > maxLines) {
      wrappedLines = wrappedLines.slice(0, maxLines)
    }

    setText(wrappedLines.join('\n'))
  }

  const handleKeyDown = (e) => {
    const cursorPosition = textareaRef.current.selectionStart
    const textBeforeCursor = text.substring(0, cursorPosition)
    const linesBeforeCursor = textBeforeCursor.split('\n')
    const currentLineIndex = linesBeforeCursor.length - 1

    if (currentLineIndex === maxLines - 1) {
      return
    }

    if (e.key === 'ArrowDown') {
      const totalLines = text.split('\n').length

      if (currentLineIndex + 1 >= totalLines) {
        e.preventDefault()
        setText(prev => prev + '\n')

        setTimeout(() => {
          textareaRef.current.selectionStart = cursorPosition + 1
          textareaRef.current.selectionEnd = cursorPosition + 1
        }, 0)
      }
    }
  }

  return (
    <textarea
      ref={textareaRef}
      rows={maxLines}
      cols={maxCharsPerLine}
      style={{ resize: 'none', overflowY: 'hidden' }}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder='type here...'
    />
  )
}

export default Textarea