using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiForum.Models;
using WebApiForum.Repository;
using WebApiForum.Repository.Operations;
using System.Web.Http.Cors;

namespace ForumWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CategoryController : ApiController
    {
       ICategoryRepository _Repository;

       public CategoryController()
        {
            //ForumRepository could be injected if desired
            _Repository = new CategoryRepository();
        }

        // GET api/Categories
       // [Route("api/Categories/Get")]
        public List<Category> Get()
        {
            var custs = _Repository.GetCategories();
            if (custs == null) throw new HttpResponseException(HttpStatusCode.NotFound);
            return custs;
        }

        // GET api/Categories
        // [Route("api/Categories/post")]
        public bool post(Category category)
        {
            var custs = _Repository.InsertOrUpdateCategory(category);
            return custs;
        }
        // GET api/Categories
        // [Route("api/Categories/delete")]
        public bool delete(int id)
        {
            var custs = _Repository.DeleteCategory(id);
            return custs;
        }



    }
}
