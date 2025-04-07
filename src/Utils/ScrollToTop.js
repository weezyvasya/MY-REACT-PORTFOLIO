import { useLocation } from "react-router-dom"
import { useEffect } from "react";


export function scrollToTop(){
    const {pathname} = useLocation()
    useEffect(()=> window.scrollTo(0,0), [pathname] )
}

