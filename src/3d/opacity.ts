import {Mesh, MeshStandardMaterial, Object3D} from "three";

export const setOpacity = (obj: Object3D, opacity: number) => {
    const mesh = obj as Mesh;
    if(mesh.isMesh) {
        (mesh.material as MeshStandardMaterial).opacity = opacity;
        (mesh.material as MeshStandardMaterial).transparent = true;
    }
    obj.children.forEach(child => setOpacity(child, opacity));
}