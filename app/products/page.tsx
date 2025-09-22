"use client";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/navigation";
const products = [
 { id: 1, title: "Headphone", img: "/images/headphone.jpg" },
 { id: 2, title: "Laptop", img: "/images/laptop.jpg" },
 { id: 3, title: "Smartphone", img: "/images/smartphone.jpg" },
 { id: 4, title: "Smartwatch", img: "/images/smartwatch.jpg" },
 { id: 5, title: "Tablet", img: "/images/tablet.jpg" },
];
export default function ProductsPage() {
 const router = useRouter();
 return (
 <div className="min-h-screen w-full bg-gradient-to-br fromblue-50 via-white to-blue-100 dark:from-slate-900 dark:viaslate-800 dark:to-slate-900 py-6 px-2 sm:px-6">
 <div className="max-w-6xl mx-auto grid grid-cols-1
sm:grid-cols-2 md:grid-cols-3 gap-8">
 {products.map((product) => (
 <div key={product.id} className="flex flex-col itemscenter">
 <ProductCard title={product.title} img={product.img}
/>
 <button
 className="mt-4 w-full sm:w-auto px-6 py-2
rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 textwhite font-semibold shadow hover:from-blue-700 hover:to-indigo600 transition-all text-base tracking-wide"
 onClick={() =>
router.push(`/products/${product.id}`)}
 >
 View Details
 </button>
 </div>
 ))}
 </div>
 </div>
 );
}