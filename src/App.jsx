import './App.css'

export const App = () =>{
  
  return (
    <>
    <section>
    <nav className="menu-bar">
            <div className="menu-container">
                <div className="menu-links">
                    <a href="#home">Inicio</a>
                    <a href="#about">Sobre Nosotros</a>
                    <a href="#contact">Contáctenos</a>
                </div>
                <button className="login-btn">Iniciar Sesión</button>
            </div>
        </nav>
    </section>
    <section className="hero">
      <div className="content-container">
        <div className="content">
          <h1 className='hero-title' >TU RUTA AL ÉXITO</h1>
          <p className='hero-text'>"Descubre tu potencial, sigue tu camino"</p>
          <button className="cta">CTA</button>
        </div>
        <div className="image-hero"></div>
      </div>
    </section>
    <section className="info" id='home'>
      <div className='info-container'>
      <h2>¿Qué es?</h2>
      <p className='info-text'>El desarrollo personal es un proceso continuo en el que cada individuo busca mejorar y crecer, tanto emocional como personalmente. Este viaje de autoconocimiento e introspección puede abarcar una amplia gama de áreas, incluyendo la autoestima, las relaciones interpersonales, la gestión del estrés, el autocontrol y la búsqueda de propósitos más significativos en la vida.</p>
      <button className="cta cta-info">CTA</button>
      </div>
    </section>
    <section className="help" id='about'>
    <div className="help-container">
      <div className="image-help"></div>
      <div className="content-help">
        <h2>ASÍ PODEMOS AYUDARTE</h2>
        <p className='help-text'> Autocontrol emocional </p>
        <p className='help-text'> Adaptabilidad al cambio </p>
        <p className='help-text'> Manejo del tiempo </p>
        <button className="cta">CTA</button>
      </div>
      </div>
    </section>
    <section className="services" id='contact'>
      <div className='services-container'>
        <hr/>
      <h2>ESTOS SON NUESTROS SERVICIOS</h2>
      <div className="service-cards">
        <div className="card">
          <div className="image-card url-1"></div>
          <p>El control de impulsos y emociones es clave para manejar situaciones difíciles.</p>
          <button className="cta cta-services">CTA</button>
        </div>
        <div className="card">
          <div className="image-card url-2"></div>
          <p>El mundo está en constante evolución, por lo que la capacidad de adaptarse al cambio es una habilidad vital.</p>
          <button className="cta cta-services">CTA</button>
        </div>
        <div className="card">
          <div className="image-card url-3"></div>
          <p>El manejo eficiente del tiempo puede mejorar la productividad y reducir el estrés. </p>
          <button className="cta cta-services">CTA</button>
        </div>
      </div>
      </div>
    </section>
  </>
   
  )
}


