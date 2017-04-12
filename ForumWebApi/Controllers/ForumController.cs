using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApiForum.Models;
using WebApiForum.Repository;
using WebApiForum.Repository.Operations;

namespace ForumWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ForumController : ApiController
    {
        IForumRepository _Repository;

        public ForumController()
        {
            //ForumRepository could be injected if desired
            _Repository = new ForumRepository();
        }

        // GET api/Forums
        // [Route("api/Forum/Get")]
        public List<Forum> Get()
        {
            var forums = _Repository.GetForums();
            if (forums == null) throw new HttpResponseException(HttpStatusCode.NotFound);
            return forums;
        }

        // GET api/Forum
        // [Route("api/Forum/post")]
        public bool post(Forum forum)
        {
            var result = _Repository.InsertOrUpdateForum(forum);
            return result;
        }

        // GET api/Forum
        // [Route("api/Forum/delete")]
        public bool delete(int id)
        {
            var result = _Repository.DeleteForum(id);
            return result;
        }


    }
}
