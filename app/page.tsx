"use client";

import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import RightSidebar from "@/components/RightSidebar";
import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import {
  handleCanvasMouseDown,
  handleResize,
  initializeFabric,
} from "@/lib/canvas";
import Navbar from "@/components/Navbar";
import { ActiveElement } from "@/types/type";

export default function Page() {
  const [activeElement, setActiveElement] = useState<ActiveElement>({
    name: "",
    value: "",
    icon: "",
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef<boolean>(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>("rectangle");

  const handleActiveElement = (elem: ActiveElement) => {
    setActiveElement(elem);
    selectedShapeRef.current = elem?.value as string;
  };

  useEffect(() => {
    const canvas = initializeFabric({
      canvasRef,
      fabricRef,
    });

    canvas.on("mouse:down", (options) =>
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
      })
    );

    window.addEventListener("resize", () =>
      handleResize({ canvas: fabricRef.current })
    );

    return () => {
      window.removeEventListener("resize", () =>
        handleResize({ canvas: null })
      );
    };
  }, []);

  return (
    <main className='h-screen overflow-hidden'>
      <Navbar
        activeElement={activeElement}
        handleActiveElement={handleActiveElement}
      />

      <section className='flex h-full flex-row'>
        <LeftSidebar />

        <Live canvasRef={canvasRef} />

        <RightSidebar />
      </section>
    </main>
  );
}
