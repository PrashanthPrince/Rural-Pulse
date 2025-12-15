"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProductViewModel from "@/components/shared/ProductViewModel";

export default function ProductDetailPage() {
  const { id } = useParams();
  return <ProductViewModel id={id} />;
}
