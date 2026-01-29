import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-4xl">
      <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20">
        <div className="px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
              John Lu
            </span>
            <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline text-sm">
              Frontend Engineer
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a
              href="mailto:globelex65@gmail.com"
              className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all duration-200 cursor-pointer"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/JiangShuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all duration-200 cursor-pointer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all duration-200 cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
