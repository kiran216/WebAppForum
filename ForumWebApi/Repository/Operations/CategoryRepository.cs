using WebApiForum.Models;
using WebApiForum.Repository.DataProcessor;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace WebApiForum.Repository.Operations
{
    public class CategoryRepository : ICategoryRepository
    {
        public List<Category> GetCategories()
        {
            var categories = new List<Category>();
            try
            {
                var dataSet = DataHelper.ExecuteDataSet(DbConstants.SpGetCategories);
                foreach (DataRow data in dataSet.Tables[0].Rows)
                {
                    categories.Add(new Category
                    {
                        CategoryDescription = data[DbConstants.CategoryDescription].ToString(),
                        CategoryId = Convert.ToInt32(data[DbConstants.CategoryId]),
                        CategoryName = data[DbConstants.CategoryName].ToString()
                    });
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return categories;
        }

        public Category GetCategory(int id)
        {
            var category = new Category();
            try
            {
                var dataSet = DataHelper.ExecuteCommand(DbConstants.SpGetCategory, new SqlParameterHolder()
                    {
                        Parameter = DbConstants.CategoryId,
                        ParameterValue = id,
                        Direction = ParameterDirection.Input
                    });
                foreach (DataRow data in dataSet.Tables[0].Rows)
                {
                    category.CategoryDescription = data[DbConstants.CategoryDescription].ToString();
                    category.CategoryId = Convert.ToInt32(data[DbConstants.CategoryId]);
                    category.CategoryName = data[DbConstants.CategoryName].ToString();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return category;
        }

    }


}