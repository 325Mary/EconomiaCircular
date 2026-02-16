using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EconomiaCircular.Pages
{
	public class ContactoModel : PageModel
	{
		[BindProperty]
		public ContactoFormulario Formulario { get; set; }

		public void OnGet()
		{
			// Mostrar formulario vacío
		}

		public IActionResult OnPost()
		{
			if (!ModelState.IsValid)
			{
				return Page();
			}

			// Aquí puedes procesar el formulario:
			// - Enviar email
			// - Guardar en base de datos
			// - Integrar con un CRM

			// Por ahora, solo mostramos un mensaje de éxito
			TempData["Mensaje"] = "Mensaje enviado correctamente. Te contactaremos pronto.";

			return RedirectToPage();
		}
	}

	public class ContactoFormulario
	{
		public string Nombre { get; set; }
		public string Correo { get; set; }
		public string Telefono { get; set; }
		public string Asunto { get; set; }
		public string Mensaje { get; set; }
		public bool Acepto { get; set; }
	}
}