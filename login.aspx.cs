using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.Practices.EnterpriseLibrary.Data;
using w7pay;

namespace tediev2
{
    public partial class login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            Database db = DatabaseFactory.CreateDatabase("ConnectionString");
            DbCommand selectCommand = db.GetSqlStringCommand(
                                "SELECT * FROM app_cliente WHERE telefone1 = @telefone1");

            db.AddInParameter(selectCommand, "@telefone1", DbType.String, txtemail.Text);

            using (IDataReader reader = db.ExecuteReader(selectCommand))
            {
                if (reader.Read())
                {
                    string senha = Criptografia.Encrypt(auth.RandomString(6));
                    lblMsg.Text = auth.RandomNumero(6);
                    string cod = Criptografia.Encrypt(lblMsg.Text);

                    //aqui tem que fazer update na tabela app_cliente 
                    try
                    {
                        DbCommand insertCommand = db.GetSqlStringCommand(
               "UPDATE APP_CLIENTE SET CODIGO = @CODIGO, STATUS = 'PENDENTE' WHERE TELEFONE1 = @TELEFONE1");
                                                
                        db.AddInParameter(insertCommand, "@CODIGO", DbType.String, cod);
                        db.AddInParameter(insertCommand, "@TELEFONE1", DbType.String, txtemail.Text);

                        db.ExecuteNonQuery(insertCommand);

                        
                        //Response.Redirect("codigo.aspx?code=" + senha);
                    }
                    catch (Exception ex)
                    {
                        lblMsg.Text = "Dados inválidos para acesso. Faça seu cadastro." + ex.Message;
                    }                    
                }
                else
                {
                    //mostrar a mensagem de dados inválidos
                    lblMsg.Text = "Usuário não encontrado. Faça seu cadastro.";
                }
            }
        }
    }
}