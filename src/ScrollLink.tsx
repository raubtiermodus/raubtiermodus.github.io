import {FC, PropsWithChildren, useEffect, useState} from "react";

export const ScrollLink: FC<PropsWithChildren<{
    target: string;
}>> = ({target, children}) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        const handler = () => {
            const targets = document.querySelectorAll(".scroll-target");
            let cur: Element | null = null;
            for(const target of targets) {
                cur = target;
                const {top} = target.getBoundingClientRect()
                if(top > 0) break
            }
            setActive(cur ? cur.id === target : false);
        }
        handler()
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, []);
    
    return <a className={`link ${active ? "active" : ""}`} href={`#${target}`} onClick={e => {
        e.preventDefault()
        document.querySelector(`#${target}`)!.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }}>
        {children}
    </a>
}