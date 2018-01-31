using Microsoft.AspNetCore.Mvc;

namespace HelloAsso.Api.Doc.Controllers
{
    public class V3Controller : Controller
    {
        public IActionResult Index()
        {
            ReadCookie();
            return View();
        }

        public IActionResult Description()
        {
            ReadCookie();
            return View();
        }

        public IActionResult Format()
        {
            ReadCookie();
            return View();
        }

        public IActionResult Notifications()
        {
            ReadCookie();
            return View();
        }

        public IActionResult Public()
        {
            ReadCookie();
            return View();
        }

        public IActionResult Resources()
        {
            ReadCookie();
            return View();
        }

        public IActionResult Responses()
        {
            ReadCookie();
            return View();
        }

        private void ReadCookie()
        {
            var cookie = Request.Cookies["themeSaver"] ?? "theme-default";
            this.ViewBag.Theme = cookie;
        }
    }
}
