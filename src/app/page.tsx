import Header from "@/components/Header";
// import CryptoSelector from "@/components/CryptoSelector";
import StatsCards from "@/components/StatsCards";
import Filters from "@/components/Filters";
import LeaderboardTable from "@/components/LeaderboardTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-7xl">
        <Header />
        {/* <CryptoSelector /> */}
        <StatsCards />
        <Filters />
        <LeaderboardTable />
      </div>
    </main>
  );
}
