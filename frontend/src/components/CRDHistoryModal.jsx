import { useEffect } from 'react'
import CRDOutput from './CRDOutput'
import { XIcon } from './Icons'

export default function CRDHistoryModal({ entry, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
          <div>
            <span className="inline-block text-xs font-mono font-semibold text-blue-700 mb-0.5">
              {entry.crdId}
            </span>
            <h2 className="text-base font-semibold text-gray-900">{entry.clientName}</h2>
            <p className="text-xs text-gray-400">{entry.dateGenerated}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <CRDOutput crd={entry.crd} crdId={entry.crdId} />
        </div>
      </div>
    </div>
  )
}
