using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiForum.Repository.DataProcessor
{
    public class DbConstants
    {
        #region<<StoredProcedure>>
        public const string SpGetCategories = "Sp_GetCategories";
        public const string SpGetCategory = "Sp_GetCategory";
        public const string SpDeleteCategory = "Sp_DeleteCategory";
        public const string SpInsertOrUpdateCategory = "Sp_InsertOrUpdateCategory";
        #endregion

        #region<<SP Params>>
        public const string CategoryDescription = "CategoryDescription";
        public const string CategoryId = "CategoryId";
        public const string CategoryName = "CategoryName";
        #endregion
        
    }
}