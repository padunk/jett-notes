import type EditorJS from "@editorjs/editorjs"
import { useEffect, useRef } from "react"

import { createEditor } from "@/lib/editor"

export function BaseNotes() {
  const editorRef = useRef<EditorJS | null>(null)
  const holderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize Editor.js
    if (!editorRef.current && holderRef.current) {
      editorRef.current = createEditor(holderRef, editorRef)
    }

    // Cleanup
    return () => {
      if (
        editorRef.current &&
        typeof editorRef.current.destroy === "function"
      ) {
        editorRef.current.destroy()
        editorRef.current = null
      }
    }
  }, [])

  return (
    <div className='w-full max-w-4xl mx-auto p-6'>
      <div
        ref={holderRef}
        className='border border-gray-300 rounded-lg p-4 min-h-100 bg-white'
      />
    </div>
  )
}
