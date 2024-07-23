
import Frame from '../assets/Frame.png';

const NavBar = () =>{
    return(
        <nav className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
        <img src={Frame} alt="Soul Farm Logo" className="h-8" />
          <ul className="flex space-x-4">
            <li>Azienda agricola</li>
            <li>Fattoria didattica</li>
            <li>Agriturismo</li>
            <li>Bio e sostenibilità</li>
            <li>Turismo e territorio</li>
            <li>Area clienti</li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar