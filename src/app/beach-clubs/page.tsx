import ListingsView from "@/components/ListingsView";

export const metadata = { title: "Beach Clubs" };

type SearchParams = Record<string, string | string[] | undefined>;

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return <ListingsView category="beach-clubs" searchParams={searchParams} />;
}
