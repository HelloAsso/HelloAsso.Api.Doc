using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using HelloAsso.Api.Doc.Models;

namespace HelloAsso.Api.Doc.Controllers
{
    public class V1Controller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Doc()
        {
            return View();
        }

        public IActionResult Cgu()
        {
            return View();
        }
    }
}
