"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import EditProduct from "@/components/editProduct/EditProduct";
import { fetchProductByIdAPI, formatProductData } from "@/utils/productApi";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      try {
        console.log("🔄 Loading product for edit:", id);
        const rawProduct = await fetchProductByIdAPI(id);
        const [formattedProduct] = formatProductData([rawProduct]);
        setProduct(formattedProduct);
      } catch (err) {
        console.error("❌ Error loading product:", err);
        alert("Failed to load product: " + err.message);
        router.push("/products");
      } finally {
        setLoading(false);
      }
    }
    if (id) loadProduct();
  }, [id, router]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product) return null;

  return <EditProduct product={product} onClose={() => router.push("/products")} />;
}
