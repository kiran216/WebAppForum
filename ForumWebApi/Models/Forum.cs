using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiForum.Models
{
    public class Forum
    {
       public int  ForumId {get;set;}
       public string Subject {get;set;}
       public string Description {get;set;}
       public int  CategoryId { get; set; }

       public string CategoryName { get; set; }
    }
}