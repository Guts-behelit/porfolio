import './globals.css';
import PasarelaProyects from './__components/_sections/pasarelaProyects';
import Proyects from './__components/_sections/proyects';
import HeaderHome from './__components/_sections/headerHome';
import AboutMe from './__components/_sections/aboutMe';
import ContactMe from './__components/_sections/contactMe';


export default function Home2(){
  return(
    <div >
      <HeaderHome />
      <PasarelaProyects />
      <Proyects />
      <AboutMe />
      <ContactMe />
    </div>
  )
}