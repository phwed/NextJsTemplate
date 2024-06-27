'use client'

import * as React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'

import { motion } from 'framer-motion'

const TOGGLE_CLASSES =
  'text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  const [currentTheme, setCurrentTheme] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    if (theme) {
      setCurrentTheme(theme)
    }
  }, [theme])

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          currentTheme === 'light' ? 'text-white' : 'text-slate-300'
        }`}
        onClick={() => {
          setTheme('light')
        }}
      >
        <FiMoon className="relative z-10 text-xs" />
        <span className="relative z-10 text-xs">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          currentTheme === 'dark' ? 'text-white' : 'text-slate-800'
        }`}
        onClick={() => {
          setTheme('dark')
        }}
      >
        <FiSun className="relative z-10 text-xs" />
        <span className="relative z-10 text-xs">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          currentTheme === 'dark' ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r bg-brand-900 dark:bg-gray-800"
        />
      </div>
    </div>
  )
}
