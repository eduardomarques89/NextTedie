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
    public partial class produtos2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ltrProdutos.Text = "";
                var dados = produtos.GerarLista();

                for (int i = 0; i < 11000; i++)
                {
                    ltrProdutos.Text += "<tr><td>" + dados[i]["nome"] + "</td><td>" + dados[i]["preco_De"] +"</td><td>" + dados[i]["categoria"] +"</td>";
                }
            }
        }
    }
}