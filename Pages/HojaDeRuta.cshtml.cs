using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EconomiaCircular.Pages
{
	public class HojaDeRutaModel : PageModel
	{
		public void OnGet()
		{
		}

	}

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