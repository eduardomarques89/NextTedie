using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using w7pay;
using Microsoft.AspNetCore.Http;

namespace tediev2
{
    public partial class codigo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {            
            if(Request.QueryString.Count == 0)
            {

            }
        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            Database db = DatabaseFactory.CreateDatabase("ConnectionString");
            DbCommand selectCommand = db.GetSqlStringCommand(
                                "SELECT * FROM app_cliente WHERE senha = @senha and codigo = @codigo and status = 'PENDENTE'");

            db.AddInParameter(selectCommand, "@senha", DbType.String, Request.QueryString["code"].ToString());
            db.AddInParameter(selectCommand, "@codigo", DbType.String, Criptografia.Encrypt(txtcodigo.Text));

            using (IDataReader reader = db.ExecuteReader(selectCommand))
            {
                if (reader.Read())
                {
                    DbCommand insertCommand = db.GetSqlStringCommand(
               "UPDATE APP_CLIENTE SET status = @status WHERE CODIGO = @CODIGO");

                    db.AddInParameter(insertCommand, "@status", DbType.String, "ATIVO");
                    db.AddInParameter(insertCommand, "@CODIGO", DbType.String, Criptografia.Encrypt(txtcodigo.Text));

                    db.ExecuteNonQuery(insertCommand);

                    Session["username"] = reader["username"].ToString();
                    Session["idcliente"] = reader["idcliente"].ToString();
                    Response.Redirect("index.aspx");
                }
                else
                {
                    lblMsg.Text = "Código Invalido. Tente Novamente...";
                }
            }
        }
    }
}