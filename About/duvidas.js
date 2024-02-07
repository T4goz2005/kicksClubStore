(function () {
  /* ---- Elements ---- */

  const sectionDuvidas = document.querySelector('section[name="duvidas"]')

   /* ---- Methods ---- */

   function habilitarEventos () {
    clickDuvida()
  }

  /* ---- Events ---- */

  function clickDuvida () {
    sectionDuvidas.addEventListener('click', (evento) => {
      const elemento = 'div[name="duvida"]'
      if (!evento.target.matches(elemento)) return
      
      ativarDuvida(evento.target)
    })
  }

  /* ---- View ---- */

  function ativarDuvida (divDuvida) {
    const divs = sectionDuvidas.querySelectorAll('div[name="duvida"]')
    for (const div of divs) {
      div.classList.remove('ativo')
    }
    divDuvida.classList.add('ativo')
  }

  /* ---- Start ---- */
  
  habilitarEventos()

}())