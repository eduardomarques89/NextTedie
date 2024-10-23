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
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Session["username"] != null)
                {
                    //lblUsername.Text = Session["username"].ToString();
                }
                //Session.Clear();
                if (Session.Count == 0)
                {
                    Session["cookie"] = Criptografia.Encrypt(auth.RandomString(6));
                    pedidos.CriarPedido(Session["cookie"].ToString());
                }

                //ltrProdutos.Text = "";
                //var dados = produtos.GerarLista();                

                //for (int i = 0; i < 24; i++)
                //{
                //    ltrProdutos.Text += "<div class=\"col-sm-6 col-xl-3\"><!--== Start Product Item ==--><div class=\"product-item\">  <div class=\"product-thumb\">    <a href=\"produtodetalhes.aspx?id=" + dados[i]["id"] + "\">      <img src=\"" + dados[i]["imagem"] + "\" width=\"270\" height=\"320\" alt=\"Image-HasTech\">    </a>  </div>  <div class=\"product-info\">    <h4 class=\"title\"><a href=\"produtodetalhes.aspx?id=" + dados[i]["id"] + "\">" + dados[i]["nome"] + "</a></h4>    <div class=\"prices\">      <span class=\"price\">R$ " + dados[i]["preco_De"] + "</span>    </div>  </div>  <div class=\"product-action\">    <button type=\"button\" class=\"btn-product-wishlist\" data-bs-toggle=\"modal\" data-bs-target=\"#action-WishlistModal\">      <i class=\"pe-7s-like\"></i>    </button>    <div class=\"product-action-links\">      <button type=\"button\" class=\"btn-product-cart\" data-bs-toggle=\"modal\" data-bs-target=\"#action-CartAddModal\">        <i class=\"pe-7s-shopbag\"></i>      </button>      <button type=\"button\" class=\"btn-product-quick-view\" data-bs-toggle=\"modal\" data-bs-target=\"#action-QuickViewModal\">        <i class=\"pe-7s-look\"></i>      </button>    </div>  </div></div><!--== End prPduct Item ==-->  </div>";
                //}
            }
        }

        protected void ltvCarrinho_ItemCommand(object sender, ListViewCommandEventArgs e)
        {
            try
            {
                Database db = DatabaseFactory.CreateDatabase("ConnectionString");

                DbCommand selectCommand2 = db.GetSqlStringCommand(
                                   "select a.valor from app_produto_atacado a where idproduto = @idproduto");

                db.AddInParameter(selectCommand2, "@idproduto", DbType.String, e.CommandArgument.ToString());

                using (IDataReader reader2 = db.ExecuteReader(selectCommand2))
                {
                    if (reader2.Read())
                    {
                        cart.AdicionarCarrinho(Session["cookie"].ToString(), Convert.ToInt32(e.CommandArgument.ToString()), Convert.ToDouble(reader2["valor"].ToString()), 1);
                        //Timer1.Enabled = true;
                    }
                }
            }
            catch (Exception ex)
            {
                //lblMsg.Text = ex.Message;
            }
        }

        protected void LinkButton1_Click(object sender, EventArgs e)
        {
            pnlVitrine.Visible = true;
            pnlGaleria.Visible = false;
            txtBusca.Text = "Sou uma pessoa que me preocupo com a saúde e faço atividades fisicas todos os dias.";
        }
    }
}