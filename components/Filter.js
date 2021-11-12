import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion"
import { useRef } from "react";



export default (params) => {
    const constraintsRef = useRef(null);

    const y = useMotionValue(0)
    const height = useTransform(
        y,
        [0, -50, -100],
        ["20vh", "50vh", "90vh"]
    )


    return (


        <motion.div
            className={`w-full flex flex-col rounded-to shadow-md h-12 bg-black fixed bottom-0`} style={{ y, height }}
            drag="y"
            onViewportBoxUpdate={(_, delta) => {

                //更新物件y值
                y.set(delta.y.translate);
            }}
            dragConstraints={{ top: -40, bottom: 0 }}
        >
            <span>filter</span>
        </motion.div>



    )
}
