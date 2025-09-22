import Image from 'next/image';
type ProductCardProps = {
 title: string;
 img: string;
};
export default function ProductCard({ title, img }:
ProductCardProps) {
 return (
 <article className="bg-gradient-to-br from-white via-blue-50
to-blue-100 dark:from-gray-900 dark:via-slate-800 dark:to-slate900 rounded-2xl shadow-lg p-3 sm:p-6 flex flex-col items-center
border border-blue-100 dark:border-slate-700 transitiontransform hover:scale-[1.03] hover:shadow-xl">
 <img src={img} alt={title} className="w-full h-40 sm:h-48
object-cover rounded-xl mb-3 sm:mb-5 shadow-md border borderblue-200 dark:border-slate-700"/>
 <h3 className="mt-1 sm:mt-3 text-lg sm:text-xl font-bold
text-blue-900 dark:text-blue-200 text-center tracking-tight
drop-shadow-sm">
 {title}
</h3>
 </article>
 );
}
