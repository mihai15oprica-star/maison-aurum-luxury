import CategoryPage from "@/components/CategoryPage";
import { categories } from "@/data/categories";

export const metadata = { title: "Motorcars" };
export default function Page() { return <CategoryPage c={categories.cars} />; }
