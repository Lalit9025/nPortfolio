/// <reference types="react-scripts" />

import * as React from "react";
import "framer-motion";

declare module "framer-motion" {
  export interface HTMLAttributesWithoutMotionProps<T, E>
    extends React.HTMLAttributes<any> {
    type?: string;
    disabled?: boolean;
  }
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

declare module "react-scroll" {
  export const Link: any;
  export const Element: any;
  export const Events: any;
  export const animateScroll: any;
  export const scrollSpy: any;
  export const scroller: any;
}

declare module "react-tsparticles" {
  const Particles: any;
  export default Particles;
}

declare module "tsparticles-slim" {
  export function loadSlim(engine: any): Promise<void>;
}
