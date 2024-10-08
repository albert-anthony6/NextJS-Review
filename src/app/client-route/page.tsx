"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { serverSideFunction } from "@/utils/server-utils";
import { useTheme } from "@/components/theme-provider";

export default function ClientRoutePage() {
  const theme = useTheme();
  const settings = {
    dots: true,
  };
  return <h1 style={{ color: theme.colors.primary }}>Client route</h1>;
}
