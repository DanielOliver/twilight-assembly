import { PixiComponent } from "@pixi/react";
import { Graphics } from "pixi.js";
import { propUpdated } from "./propsUpdates";

export const Circle = PixiComponent("Circle", {
  create: (props) => new Graphics(),
  applyProps: (instance, oldProps, props) => {
    const { x, y, r, fill, stroke, strokeWidth, alpha } = props;
    if (
      propUpdated(props, oldProps, [
        "x",
        "y",
        "stroke",
        "strokeWidth",
        "r",
        "fill",
      ])
    ) {
      instance.clear();
      instance.lineStyle({ width: strokeWidth, color: stroke });
      instance.beginFill(fill);
      instance.drawCircle(x || 0, y || 0, r);
      instance.endFill();
    }
    if (propUpdated(props, oldProps, ["alpha"])) {
      instance.alpha = alpha;
    }
  },
});
