import React, {useState, useEffect}from "react";
import "./Nav.css"
export default function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    // const handleChange = (e) => {
    //     setSearchValue(e.target.value);
    //     navigate(`/search?q=${e.target.value}`);
    // };

    return (
        <nav className={`nav ${show && "nav__black"} `}>
            <img
                alt={'Netflix logo'}
                src={"https://upload.wikimedia.org/wikipedia/commons/4/42/Dfnefr.png?20230102142402"}
                className={'nav__logo'}
                onClick={() => window.location.reload()}
            />
            <img
                alt={"User logged"}
                src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"}
                className={'nav__avatar'}
            />
        </nav>)
}