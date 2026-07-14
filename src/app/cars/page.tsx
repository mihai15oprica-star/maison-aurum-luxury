import ListingsView from "@/components/ListingsView";

// Decision: Cars is a real listing page (not a PDF, unlike MADE).
export const metadata = { title: "Cars" };

type SearchParams = Record<string, string | string[] | undefined>;

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return <ListingsView category="cars" searchParams={searchParams} />;
}
