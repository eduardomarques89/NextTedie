using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using w7pay;
using Microsoft.Practices.EnterpriseLibrary.Data;

namespace tediev2
{
    public partial class Carrinho : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                //var dados = cart.AdicionarCarrinho();

                Database db = DatabaseFactory.CreateDatabase("ConnectionString");
                DbCommand selectCommand2 = db.GetSqlStringCommand(
                                   "select valor, numero_pedido from app_pedido where sessao = @sessao");

                db.AddInParameter(selectCommand2, "@sessao", DbType.String, Session["cookie"].ToString());

                using (IDataReader reader2 = db.ExecuteReader(selectCommand2))
                {
                    if (reader2.Read())
                    {
                        hdfNumeroPedido.Value = reader2["numero_pedido"].ToString();
                        lblTotal.Text = reader2["valor"].ToString();
                        llbSubtotal.Text = reader2["valor"].ToString();
                    }
                }
            }

        }
    }
}