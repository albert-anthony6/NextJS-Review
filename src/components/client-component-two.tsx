"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("batman");
  return <h1>ClientComponentTwo</h1>;
};
