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

namespace tediev2
{
    public partial class ecom : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Session["cookie"] != null)
                {
                    try
                    {
                        Database db = DatabaseFactory.CreateDatabase("ConnectionString");                       

                        DbCommand selectCommand2 = db.GetSqlStringCommand(
                                           "select sum(i.valor) as valortotal, count(*) as qtde from app_pedido p join app_pedido_item i on i.NUMERO_PEDIDO = p.NUMERO_PEDIDO where sessao = @sessao");

                        db.AddInParameter(selectCommand2, "@sessao", DbType.String, Session["cookie"].ToString());

                        using (IDataReader reader2 = db.ExecuteReader(selectCommand2))
                        {
                            if (reader2.Read())
                            {
                                lblQtdeCarrinho.Text = reader2["qtde"].ToString();
                                lblSubTotalCarrinho.Text = reader2["valortotal"].ToString();
                            }
                            else
                            {
                                lblQtdeCarrinho.Text = "0";
                                lblSubTotalCarrinho.Text = "0,00";
                            }
                        }

                        //aqui verifica se o usuario já está logado, e com os dados do cliente, gera o qrcode de pagamento
                        //verifica se o carrinho está com quantidade > 0

                    }
                    catch
                    {

                    }
                }
            }
        }
    }
}