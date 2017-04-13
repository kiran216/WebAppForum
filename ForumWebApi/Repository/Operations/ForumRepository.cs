using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiForum.Models;
using WebApiForum.Repository.DataProcessor;

namespace WebApiForum.Repository.Operations
{
    public class ForumRepository:IForumRepository
    {
        public List<Forum> GetForums()
        {
            var forumsList = new List<Forum>();
            try
            {
                var dataSet = DataHelper.ExecuteDataSet(DbConstants.SpGetForums);
                foreach (DataRow data in dataSet.Tables[0].Rows)
                {
                    forumsList.Add(new Forum
                    {
                        ForumId = Convert.ToInt32(data[DbConstants.ForumId]),
                        CategoryName = data[DbConstants.CategoryName].ToString(),
                        CategoryId =Convert.ToInt32(data[DbConstants.CategoryId]),
                        Description = data[DbConstants.ForumDescription].ToString(),
                        Subject = data[DbConstants.ForumSubject].ToString()
                    });
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return forumsList;
        }

        public bool InsertOrUpdateForum(Forum forum)
        {
            bool result;
            try
            {
                var dataSet = DataHelper.ExecuteCommand(DbConstants.SpInsertOrUpdateForum, new SqlParameterHolder()
                {
                    Parameter = DbConstants.CategoryId,
                    ParameterValue = forum.CategoryId,
                    Direction = ParameterDirection.Input
                },
                new SqlParameterHolder()
                {
                    Parameter = DbConstants.CategoryName,
                    ParameterValue = forum.CategoryName,
                    Direction = ParameterDirection.Input
                },  
                 new SqlParameterHolder()
                {
                    Parameter = DbConstants.ForumId,
                    ParameterValue = forum.ForumId,
                    Direction = ParameterDirection.Input
                },
                 new SqlParameterHolder()
                {
                    Parameter = DbConstants.ForumSubject,
                    ParameterValue = forum.Subject,
                    Direction = ParameterDirection.Input
                }, new SqlParameterHolder()
                {
                    Parameter = DbConstants.ForumDescription,
                    ParameterValue = forum.Description,
                    Direction = ParameterDirection.Input
                });
                result = true;
            }
            catch (Exception ex)
            {
                result = false;
                throw ex;
            }
            return result;
        }
        public bool DeleteForum(int id)
        {
            bool result;
            try
            {
                var dataSet = DataHelper.ExecuteCommand(DbConstants.SpDeleteForum, new SqlParameterHolder()
                {
                    Parameter = DbConstants.ForumId,
                    ParameterValue = id,
                    Direction = ParameterDirection.Input
                });
                result = true;
            }
            catch (Exception ex)
            {
                result = false;
                throw ex;
            }
            return result;
        }
    }
}