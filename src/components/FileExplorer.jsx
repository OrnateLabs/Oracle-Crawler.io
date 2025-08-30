import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Mock data for demo; replace with real API/files if needed
const files = [
  { name: 'README.md', type: 'file' },
  { name: 'src', type: 'folder', children: [
    { name: 'App.jsx', type: 'file' },
    { name: 'components', type: 'folder', children: [
      { name: 'Features.jsx', type: 'file' },
      { name: 'FileExplorer.jsx', type: 'file' },
    ]},
    { name: 'index.css', type: 'file' },
    { name: 'main.jsx', type: 'file' },
  ]},
  { name: 'package.json', type: 'file' },
]

function File({ file, level = 0 }) {
  const [open, setOpen] = useState(level === 0)
  return (
    <div className={`ml-${level * 4}`}>
      <motion.div
        layout
        className={`flex items-center cursor-pointer hover:text-primary transition`}
        onClick={() => file.type === 'folder' && setOpen(v => !v)}
        initial={false}
      >
        {file.type === 'folder' ? (
          <span className="mr-2">{open ? '📂' : '📁'}</span>
        ) : (
          <span className="mr-2">📄</span>
        )}
        <span className="font-mono">{file.name}</span>
      </motion.div>
      {file.type === 'folder' && open && file.children && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="pl-6"
        >
          {file.children.map((child, idx) => (
            <File file={child} key={idx} level={level + 1} />
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default function FileExplorer() {
  // Replace mock data with API fetch if needed
  return (
    <div className="bg-white/10 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-tech text-accent mb-4 glow">Project Files</h2>
      <div>
        {files.map((file, i) => (
          <File file={file} key={i} />
        ))}
      </div>
    </div>
  )
}
