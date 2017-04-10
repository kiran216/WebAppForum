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
        
    }
    public interface ICategoryRepository
    {
        List<Category> GetCategories();

        Category GetCategory(int id);

        //Category InsertCustomer(Category cust);

        //bool UpdateCustomer(Category category);

        //bool DeleteCustomer(int id);
    }
}
