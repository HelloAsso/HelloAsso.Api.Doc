using Microsoft.AspNetCore.Mvc;

namespace HelloAsso.Api.Doc.Controllers
{
    public class V2Controller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
