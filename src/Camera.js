import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const Camera = (props) => {
    const ref = useRef();
    const { setDefaultCamera } = useThree();

    useEffect(() => {
        setDefaultCamera(ref.current);
    }, [])

    return <perspectiveCamera ref={ref} {...props}/>
}