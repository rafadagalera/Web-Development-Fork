import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex p-5 mb-5 justify-around bg-stone-900 text-red-700">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao Movie App</h1>
            <Navbar/>
        </header>
     );
}

export default Header;