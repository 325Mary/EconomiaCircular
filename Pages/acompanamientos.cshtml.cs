using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EconomiaCircular.Pages
{
	public class AcompanamientosModel : PageModel
	{
		public void OnGet()
		{
			// Contenido estático por ahora
		}

		// Estructura de datos opcional para futuro uso dinámico
		/*
        public List<Programa> Programas { get; set; }

        public void OnGet()
        {
            Programas = new List<Programa>
            {
                new Programa
                {
                    Title = "Economía Circular Empresarial",
                    Description = "Acompañamiento integral para empresas que buscan implementar modelos circulares",
                    IconClass = "bg-green",
                    Requisitos = new List<string>
                    {
                        "Empresa registrada en el AMVA",
                        "Compromiso de implementación",
                        "Equipo designado"
                    }
                },
                // ... más programas
            };
        }
        */
	}

	// Modelo de datos opcional
	public class Programa
	{
		public string Title { get; set; }
		public string Description { get; set; }
		public string IconClass { get; set; }
		public List<string> Requisitos { get; set; }
	}
}