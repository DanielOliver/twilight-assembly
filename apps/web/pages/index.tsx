import dynamic from "next/dynamic";
import * as React from "react";

const DynamicMap = dynamic(() => import("../components/GalaxyMap"), {
  ssr: false,
});

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <DynamicMap />
    </div>
  );
}
