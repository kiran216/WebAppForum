using WebApiForum.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiForum.Repository
{
    public interface IForumRepository
    {

        List<Forum> GetForums();

        bool InsertOrUpdateForum(Forum forum);

        bool DeleteForum(int id);
    }
    public interface ICategoryRepository
    {
        List<Category> GetCategories();

        Category GetCategory(int id);

        bool InsertOrUpdateCategory(Category cust);

        bool DeleteCategory(int id);
    }
}
