'use client'

import { ModeToggle } from "../ModeToggle/mode-toggle"

export function Header(){
  return (
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold ">Gomes Chat</span>
      <ModeToggle/>
    </div>
  )
}