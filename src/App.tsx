import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BrandLogos } from './components/BrandLogos'
import { ProductGrid } from './components/ProductGrid'
import { BrowseByStyle } from './components/BrowseByStyle'
import { CustomerReviews } from './components/CustomerReviews'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { products, topSellingProducts } from './data/products'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BrandLogos />
        <ProductGrid title="NEW ARRIVALS" products={products} />
        <ProductGrid title="TOP SELLING" products={topSellingProducts} />
        <BrowseByStyle />
        <CustomerReviews />
      </main>
      <Newsletter />
      <Footer />
    </div>
  )
}