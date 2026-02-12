using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EconomiaCircular.Pages
{
	public class HojaDeRutaModel : PageModel
	{
		public void OnGet()
		{
			// Por ahora es contenido estático
			// Aquí puedes agregar lógica para cargar datos dinámicamente
		}

		// Ejemplo de cómo podrías estructurar los datos si decides hacerlo dinámico:
		/*
        public List<Objetivo> Objetivos { get; set; }
        public List<Hito> Hitos { get; set; }
        public List<LineaAccion> LineasAccion { get; set; }

        public void OnGet()
        {
            Objetivos = new List<Objetivo>
            {
                new Objetivo 
                { 
                    Title = "Reducción de Residuos", 
                    Meta = "50% para 2030",
                    IconClass = "bg-green"
                },
                // ... más objetivos
            };
        }
        */
	}

	// Modelos de datos opcionales para futuro uso
	public class Objetivo
	{
		public string Title { get; set; }
		public string Meta { get; set; }
		public string IconClass { get; set; }
	}

	public class Hito
	{
		public string Year { get; set; }
		public string Title { get; set; }
		public string Descripcion { get; set; }
	}

	public class LineaAccion
	{
		public string Nombre { get; set; }
		public string Responsable { get; set; }
		public string Plazo { get; set; }
		public string Descripcion { get; set; }
	}
}