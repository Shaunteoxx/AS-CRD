import { useRef } from 'react'
import { SparklesIcon } from './Icons'

const ACCEPTED_EXTS = new Set(['.txt', '.md', '.docx', '.pdf', '.pptx'])

const TABS = [
  'Internal Requirement',
  'Client Requirement',
  'Business Requirement',
  'Product Requirement',
]

const PLACEHOLDERS = {
  'Internal Requirement': 'Describe internal team requirements, operational needs, or process constraints…',
  'Client Requirement': 'Paste client notes, meeting transcripts, or client-facing requests…',
  'Business Requirement': 'Outline business objectives, stakeholder needs, or strategic requirements…',
  'Product Requirement': 'Detail product features, user stories, or technical specifications…',
}

const TAB_META = {
  'Client Requirement': {
    title: 'CRD Generator',
    subtitle: 'Putting all the client requests into a structured document.',
  },
  'Business Requirement': {
    title: 'BRD Generator',
    subtitle: 'Grouping client and internal requirements into platform-level business documents.',
  },
  'Internal Requirement': {
    title: 'IRD Generator',
    subtitle: 'Documenting internal operational needs and process constraints.',
  },
  'Product Requirement': {
    title: 'PRD Generator',
    subtitle: 'Outlining product features, user stories, and technical specifications.',
  },
}

export default function UploadArea({ notes, setNotes, files, setFiles, onAnalyze, loading, activeTab, onTabChange }) {
  const fileInputRef = useRef(null)

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

  const canAnalyze = notes.trim().length > 0 || files.length > 0

  return (
    <div className="flex flex-col items-center w-full">
      {/* Dynamic title */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{TAB_META[activeTab]?.title}</h1>
        <p className="text-sm text-gray-500 mt-2">{TAB_META[activeTab]?.subtitle}</p>
      </div>

      {/* Tabs — 2×2 grid */}
      <div className="grid grid-cols-2 gap-1 mb-4 bg-black/5 rounded-2xl p-1.5 border border-black/8 w-full">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 text-center ${
              activeTab === tab
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={9}
          placeholder={PLACEHOLDERS[activeTab]}
          className="w-full px-6 pt-6 pb-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none resize-none leading-relaxed"
        />

        {files.length > 0 && (
          <div className="flex flex-wrap gap-2 px-6 pb-3">
            {files.map(f => (
              <span
                key={f.name}
                className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 bg-blue-50 border border-blue-200 text-blue-800 text-xs rounded-full max-w-[220px]"
              >
                <span className="truncate">{f.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(f.name)}
                  className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-700 transition-colors"
                  aria-label={`Remove ${f.name}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".txt,.md,.docx,.pdf,.pptx"
              onChange={handleInput}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors font-medium"
            >
              <span className="text-base font-light leading-none">+</span>
              <span>Attach</span>
            </button>
            {notes.trim() && (
              <button
                type="button"
                onClick={() => { setNotes(''); setFiles([]) }}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          <button
            onClick={onAnalyze}
            disabled={!canAnalyze || loading}
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Analyzing…
              </>
            ) : (
              <>
                <SparklesIcon className="w-4 h-4" />
                Analyze{files.length > 0 && ` + ${files.length} file${files.length > 1 ? 's' : ''}`}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
