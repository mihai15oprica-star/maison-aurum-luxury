import ListingsView from "@/components/ListingsView";

export const metadata = { title: "Yachts" };

type SearchParams = Record<string, string | string[] | undefined>;

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return <ListingsView category="yachts" searchParams={searchParams} />;
}
