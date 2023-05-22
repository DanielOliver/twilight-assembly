import React, { forwardRef } from "react";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import { PixiComponent, useApp } from "@pixi/react";
import { EventSystem } from "@pixi/events";

export interface ViewportProps {
  screenWidth: number;
  screenHeight: number;
  mapWidth: number;
  mapHeight: number;
  children?: React.ReactNode;
}

export interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

const PixiComponentViewport = PixiComponent("Viewport", {
  create: (props: PixiComponentViewportProps) => {
    const { app } = props;

    if (!("events" in props.app.renderer))
      props.app.renderer.addSystem(PIXI.EventSystem, "events");

    const viewport = new Viewport({
      worldWidth: props.mapWidth,
      worldHeight: props.mapHeight,
      events: app.renderer.events,
      ticker: app.ticker,
      passiveWheel: false,
    });
    viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate()
      .clamp({
        direction: "all",
        bottom: props.mapHeight,
        top: 0,
        left: -80,
        right: props.mapWidth,
      })
      .clampZoom({
        minScale: 0.4,
        maxScale: 8,
      });
    return viewport;
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
