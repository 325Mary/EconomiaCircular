using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EconomiaCircular.Pages
{
	public class AcompanamientosModel : PageModel
	{
		public void OnGet()
		{
		}

	}

	public class Programa
	{
		public string Title { get; set; }
		public string Description { get; set; }
		public string IconClass { get; set; }
		public List<string> Requisitos { get; set; }
	}
}