import { Object3DNode } from "@react-three/fiber";

// Extend ThreeElements interface to include meshline components so they are recognized in JSX
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}
