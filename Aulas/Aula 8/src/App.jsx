import Header from './Componentes/Header';
import Footer from './Componentes/Footer'; 
import {Outlet} from 'react-router-dom';

function App() {
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Sobre', link: '/sobre' },
    { text: 'Serviços', link: '/servicos' },
    { text: 'Contato', link: '/contato' },
  ];
  return (
        <>
          <Header title="Meu Site" menuItems={menuItems} />
          <Outlet/>
          <Footer />
        </>
  )
}

export default App
