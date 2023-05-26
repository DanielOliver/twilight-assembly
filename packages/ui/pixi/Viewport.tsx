import React, { forwardRef } from "react";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import { PixiComponent, useApp } from "@pixi/react";
import { EventSystem } from "@pixi/events";
import { BoundingBox } from "@twilight-assembly/core";

export interface ViewportProps {
  screenWidth: number;
  screenHeight: number;
  mapWidth: number;
  mapHeight: number;
  mapBounds: BoundingBox;
  children?: React.ReactNode;
}

export interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

const PixiComponentViewport = PixiComponent("Viewport", {
  create: (props: PixiComponentViewportProps) => {
    const { app } = props;

    if (!("events" in props.app.renderer)) {
      //@ts-ignore
      props.app.renderer.addSystem(PIXI.EventSystem, "events");
    }

    const viewport = new Viewport({
      worldWidth: props.mapWidth,
      worldHeight: props.mapHeight,
      events: app.renderer.events,
      ticker: app.ticker,
      passiveWheel: false,
    });
    return viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate()
      .clamp({
        direction: "all",
        bottom: props.mapBounds.maxY,
        top: props.mapBounds.minY,
        left: props.mapBounds.minX,
        right: props.mapBounds.maxX,
      })
      .clampZoom({
        minScale: 0.4,
        maxScale: 8,
      });
    // return viewport;
  },
  applyProps(instance, oldProps, newProps) {
    if (
      oldProps.screenHeight !== newProps.screenHeight ||
      oldProps.screenWidth !== newProps.screenHeight
    ) {
      instance.resize(newProps.screenWidth, newProps.screenHeight);
    }
  },
});

const PixiViewport = (props: ViewportProps) => {
  const app = useApp();
  return <PixiComponentViewport app={app} {...props} />;
};

export default PixiViewport;
