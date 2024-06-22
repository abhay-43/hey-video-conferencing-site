import './MainPage.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainCard from './components/mainCard/MainCard';
function MainPage() {
  return (
    <div className='body'>
      <Header></Header>
      <div className='main-body'>
        <MainCard></MainCard>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
