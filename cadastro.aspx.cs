using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;
using w7pay;

namespace tediev2
{
    public partial class cadastro : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnSalvar_Click(object sender, EventArgs e)
        {
            Database db = DatabaseFactory.CreateDatabase("ConnectionString");

            DbCommand selectCommand = db.GetSqlStringCommand(
                               "SELECT * FROM app_cliente WHERE telefone1 = @telefone1");

            db.AddInParameter(selectCommand, "@telefone1", DbType.String, txtemail.Text);

            using (IDataReader reader = db.ExecuteReader(selectCommand))
            {
                if (!reader.Read())
                {
                    DbCommand insertCommand = db.GetSqlStringCommand(
                    "INSERT INTO APP_CLIENTE (TELEFONE1, SENHA, USERNAME, DATACADASTRO, STATUS, CODIGO) " +
                    "VALUES (@TELEFONE1, @SENHA, @USERNAME, GETDATE(), 'PENDENTE', @CODIGO)");

                    string tk = Criptografia.Encrypt(auth.RandomString(6));
                    string codigo = auth.RandomNumero(6);
                    string cod = Criptografia.Encrypt(codigo);

                    db.AddInParameter(insertCommand, "@TELEFONE1", DbType.String, txtemail.Text);
                    db.AddInParameter(insertCommand, "@SENHA", DbType.String, tk);
                    db.AddInParameter(insertCommand, "@USERNAME", DbType.String, txtusername.Text);
                    db.AddInParameter(insertCommand, "@CODIGO", DbType.String, cod);

                    try
                    {
                        db.ExecuteNonQuery(insertCommand);
                        //aqui tem que enviar um whatsapp para o cliente com o codigo de 6 digitos
                        lblMsg.Text = codigo;

                        //Response.Redirect("codigo.aspx?code=" + tk + "");
                    }
                    catch (Exception ex)
                    {
                        lblMsg.Text = "Erro ao tentar realizar cadastro. Tente novamente..."+ ex.Message;
                    }
                }
                else
                {
                    lblMsg.Text = "Usuário já cadastrado em nosso sistema. Faça seu login";
                }
            }
        }
    }
}