import {FC} from "react";

export const Plate: FC = () => {
    return <group>
        <mesh>
            <meshStandardMaterial color="white" />
            <boxGeometry args={[1, .015, 1]} />
        </mesh>
    </group>
 }