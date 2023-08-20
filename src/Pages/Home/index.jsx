import './home.css'
import Header from '../../components/Header'
import Featured from '../../components/Featured'
import PropertyList from '../../components/ProprertyList'
import FeaturedProperties from '../../components/FeaturedProperties'
import MailList from '../../components/MailList'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <div className="home-container">
          <Featured />
          <h1 className="home-title">Browse by property type</h1>
          <PropertyList />
          <h1 className="home-title">Home guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home