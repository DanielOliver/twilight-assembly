import { PixiComponent } from "@pixi/react";
import { Color, Filter, Graphics } from "pixi.js";
import { propUpdated } from "./propsUpdates";

export interface CircleProps {
  x?: number;
  y?: number;
  stroke?: Color;
  r: number;
  strokeWidth?: number;
  fill?: Color | string;
  alpha?: number;
  filters?: Filter[];
}

export const Circle = PixiComponent("Circle", {
  create: (props: CircleProps) => new Graphics(),
  applyProps: (instance, oldProps, props) => {
    const { x, y, r, fill, stroke, strokeWidth, alpha, filters } = props;
    if (
      propUpdated(props, oldProps, [
        "x",
        "y",
        "stroke",
        "strokeWidth",
        "r",
        "fill",
        "filters",
      ])
    ) {
      instance.clear();
      instance.lineStyle({ width: strokeWidth, color: stroke });
      instance.beginFill(fill);
      instance.drawCircle(x || 0, y || 0, r);
      instance.endFill();
      instance.filters = filters || null;
    }
    if (propUpdated(props, oldProps, ["alpha"])) {
      instance.alpha = alpha || 1;
    }
  },
});
