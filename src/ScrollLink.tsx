import {FC, PropsWithChildren, useEffect, useState} from "react";

export const useScrollTarget = () => {
    const [active, setActive] = useState<null | Element>(null);
    useEffect(() => {
        const handler = () => {
            const targets = document.querySelectorAll(".scroll-target");
            let cur: Element | null = null;
            const height = window.innerHeight;
            for(const target of targets) {
                cur = target;
                const {top} = target.getBoundingClientRect()
                if(top > -(height * .75)) break
            }
            setActive(cur);
        }
        handler()
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, []);
    return active;
}

export const ScrollLink: FC<PropsWithChildren<{
    target: string;
}>> = ({target, children}) => {
    const cur = useScrollTarget()
    
    return <a className={`link ${(cur && cur.id === target) ? "active" : ""}`} href={`#${target}`} onClick={e => {
        e.preventDefault()
        document.querySelector(`#${target}`)!.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }}>
        {children}
    </a>
}