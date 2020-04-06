using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.Linq;

namespace Jarvis_corp.Controllers
{
    public class PageSearchController : Controller
    {
        
        public ActionResult Index()
        {
            SearchResults<Sitecore.ContentSearch.SearchTypes.SearchResultItem> results;
            var index = Sitecore.ContentSearch.ContentSearchManager.GetIndex(new Sitecore.ContentSearch.SitecoreIndexableItem(Sitecore.Context.Item));
            using (var context = index.CreateSearchContext())
            {
                results = context.GetQueryable<Sitecore.ContentSearch.SearchTypes.SearchResultItem>().Where(i => i.TemplateName == "Content Page" ).GetResults();

            }
            return View(results.Hits.ToList());
        }
    }
}