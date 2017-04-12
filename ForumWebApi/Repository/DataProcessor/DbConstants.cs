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

        public const string SpGetForums = "sp_GetForums";
        public const string SpDeleteForum = "Sp_DeleteForum";
        public const string SpInsertOrUpdateForum = "Sp_InsertOrUpdateForum";     

        #endregion

        #region<<SP Params>>
        public const string CategoryDescription = "CategoryDescription";
        public const string CategoryId = "CategoryId";
        public const string CategoryName = "CategoryName";
        public const string ForumCount = "ForumCount";

        public const string ForumDescription = "Description";
        public const string ForumId = "ForumId";
        public const string ForumSubject = "Subject";     


        #endregion
        
    }
}