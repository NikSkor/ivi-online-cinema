import { useRef, useState, useEffect } from 'react'

export const useOutside = (initialValue: boolean) => {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(initialValue)

  const handeClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) setShow(false)
  }

  useEffect(() => {
    document.addEventListener('click', handeClickOutside, true)
    return () => {
      document.removeEventListener('click', handeClickOutside, true)
    }
  }, [ref])


  return { show, setShow, ref }
}