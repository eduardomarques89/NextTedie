using Microsoft.Practices.EnterpriseLibrary.Data;
using OpenAI_API.Moderation;
using Sdk.CobrancaApi;
using Sdk.PixApi;
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
    public partial class produtodetalhes : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString.Count > 0)
            {
                string idproduto = Request.QueryString["id"].ToString();
                produtos prod = new produtos();
                dynamic dados = produtos.GerarLista();
                dynamic res = (dados as Newtonsoft.Json.Linq.JArray).Where(x => x["id"].ToString() == idproduto).ToList();
                lblNome.Text = res[0]["nome"];
                imgProd.Src = res[0]["imagem"];
                lblId.Text = res[0]["id"];
                lblCategoria.Text = res[0]["categoria"];
                lblPreco.Text = res[0]["preco_De"];
            }
        }

        protected void btnAddCarrinho_Click(object sender, EventArgs e)
        {
            try
            {
                cart.AdicionarCarrinho(Session["cookie"].ToString(), Convert.ToInt32(Request.QueryString["id"].ToString()), Convert.ToDouble(lblPreco.Text), Convert.ToInt16(txtQtde.Text));               
                Timer1.Enabled = true;
            }
            catch(Exception ex)
            {
                lblMsg.Text = ex.Message;
            }
        }

        protected void Timer1_Tick(object sender, EventArgs e)
        {
            lblMsg.Text = "";
            Timer1.Enabled = false;
        }
    }
}