import { SparklesIcon } from '../Icons'

const ACCEPTED_EXTS = new Set(['.txt', '.md', '.docx', '.pdf', '.pptx'])

export default function BRDUploadArea({ notes, setNotes, files, setFiles, onAnalyze, loading }) {
  const addFiles = (incoming) => {
    const valid = Array.from(incoming).filter(f => {
      const ext = '.' + f.name.split('.').pop().toLowerCase()
      return ACCEPTED_EXTS.has(ext)
    })
    setFiles(prev => {
      const existing = new Set(prev.map(f => f.name))
      return [...prev, ...valid.filter(f => !existing.has(f.name))]
    })
  }

  const removeFile = (name) => setFiles(prev => prev.filter(f => f.name !== name))

  const handleInput = (e) => {
    addFiles(e.target.files)
    e.target.value = ''
  }

  const handleDrop = (e) => {
    e.preventDefault()
    addFiles(e.dataTransfer.files)
  }

  const canAnalyze = notes.trim().length > 0 || files.length > 0

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Phase 1 — Source Documents</h2>
        <p className="text-sm text-gray-500">
          Upload CRDs or paste notes below. All content will be combined and analyzed to build the BRD.
        </p>
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-violet-400 transition-colors"
      >
        <input
          type="file"
          multiple
          accept=".txt,.md,.docx,.pdf,.pptx"
          onChange={handleInput}
          className="hidden"
          id="brd-file-upload"
        />
        <label htmlFor="brd-file-upload" className="cursor-pointer block">
          <svg
            className="mx-auto h-10 w-10 text-gray-300 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-sm text-gray-600">
            Drop files here or <span className="text-violet-600 font-medium">browse</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">.txt · .md · .docx · .pdf · .pptx</p>
        </label>

        {files.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {files.map(f => (
              <span
                key={f.name}
                className="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 bg-violet-50 border border-violet-200 text-violet-800 text-xs rounded-full max-w-[220px]"
              >
                <span className="truncate">{f.name}</span>
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); removeFile(f.name) }}
                  className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-violet-400 hover:bg-violet-200 hover:text-violet-700 transition-colors"
                  aria-label={`Remove ${f.name}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Or paste notes directly
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={14}
          placeholder="Paste CRD content, meeting notes, or raw requirements here…"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
        />
      </div>

      <button
        onClick={onAnalyze}
        disabled={!canAnalyze || loading}
        className="w-full py-3 px-6 bg-violet-600 text-white rounded-lg font-medium text-sm hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Analyzing...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <SparklesIcon className="w-4 h-4" />
            Analyze{files.length > 0 && ` + ${files.length} file${files.length > 1 ? 's' : ''}`}
          </span>
        )}
      </button>
    </div>
  )
}
