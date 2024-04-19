import PersonalInfo from '../Componentes/PersonalInfo';
import Skills from '../Componentes/Skills';
import ContactForm from '../Componentes/ContactForm'

function Home() {
  const skillList = [
    { name: 'HTML', level: 'Avançado' },
    { name: 'CSS', level: 'Intermediário' },
    { name: 'JavaScript', level: 'Básico' }
  ]

  return (
    <div className="mainInfo">
      <section id='info'>
          <PersonalInfo 
            name="João" 
            email="joao@example.com" 
            phone="(00) 12345-6789" 
          />
          <Skills skills={skillList} />
        </section>
        <ContactForm />
    </div>
  );
}

export default Home;