"use client";

import "reflect-metadata";
import { container } from "@/infrastructure/di/container";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
