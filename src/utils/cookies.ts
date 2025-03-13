import { parse } from 'cookie'

export function getCookie(name: string) {
    if(typeof window === "undefined") return
    const cookies = parse(document.cookie)
    return cookies[name]
}