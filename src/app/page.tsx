import StartSection from "@/app/ui/sections/StartSection";
import TrendingCollection from "@/app/ui/sections/TrendingCollection";
import TopCreators from "@/app/ui/sections/TopCreators";
import BrowseCategories from "@/app/ui/sections/BrowseCategories";
import DiscoverMoreNFTs from "@/app/ui/sections/DiscoverMoreNFTs";
import MagicMashrooms from "@/app/ui/sections/Mashrooms";


export default function Home( ) {
  return (
    <main className='main'>
        <StartSection/>
        <TrendingCollection/>
        <TopCreators/>
        <BrowseCategories/>
        <DiscoverMoreNFTs/>
        <MagicMashrooms/>
    </main>
  )
}
