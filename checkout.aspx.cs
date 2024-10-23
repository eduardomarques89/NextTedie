using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using w7pay;

namespace tediev2
{
    public partial class checkout : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["idcliente"] != null)
            {
                Database db = DatabaseFactory.CreateDatabase("ConnectionString");
                DbCommand selectCommand = db.GetSqlStringCommand(
                                    "select c.cpf, c.nomecliente, c.sobrenome, c.telefone1, c.email, e.endereco, e.num, e.bairro, e.cidade, e.uf, e.cep from app_cliente c left join app_endereco e on e.idcliente = c.idcliente where idcliente = @idcliente");

                db.AddInParameter(selectCommand, "@idcliente", DbType.String, Session["idcliente"].ToString());

                using (IDataReader reader = db.ExecuteReader(selectCommand))
                {
                    if (reader.Read())
                    {
                        lblNome.Text = reader["nome"].ToString();
                        lblSobrenome.Text = reader["sobrenome"].ToString();
                        lblCPF.Text = reader["cpf"].ToString();
                        lblEmail.Text = reader["email"].ToString();
                        txtcep.Text = reader["cep"].ToString();
                        txtcidade.Text = reader["cidade"].ToString();
                        txtendereco.Text = reader["endereco"].ToString();
                        txttelefone.Text = reader["telefone1"].ToString();
                        txtNumero.Text = reader["numero"].ToString();
                        ddlEstado.SelectedValue = reader["uf"].ToString();

                        pix valores = new pix();
                        valores.TransactionAmount = Convert.ToDecimal(lblTotal.Text);
                        valores.PayerEmail = lblEmail.Text;
                        valores.PayerLastName = lblSobrenome.Text;
                        valores.PayerFirstName = lblNome.Text;
                        valores.IdentificationType = "CPF";
                        valores.Description = "Testes";
                        valores.IdentificationNumber = lblCPF.Text.Replace(".", "").Replace("-", "");
                        dynamic dados = pix.GeraPix(valores);
                        lblPixCopiaCola.Text = dados["pointOfInteraction"]["transactionData"]["qrCode"];
                        imgPix.ImageUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + dados["pointOfInteraction"]["transactionData"]["qrCode"];
                    }
                }

                DbCommand selectCommand2 = db.GetSqlStringCommand(
                                   "select valor, valor + isnull(taxa,0) as total numero_pedido from app_pedido where sessao = @sessao");

                db.AddInParameter(selectCommand2, "@sessao", DbType.String, Session["cookie"].ToString());


                using (IDataReader reader2 = db.ExecuteReader(selectCommand2))
                {
                    if (reader2.Read())
                    {
                        lblTotal.Text = reader2["total"].ToString();
                        llbSubtotal.Text = reader2["valor"].ToString();
                    }
                }
            }
        }

        protected void txtcep_TextChanged(object sender, EventArgs e)
        {
            if(txtcep.Text.Length == 9)
            {
                string cepnovo = txtcep.Text.Replace("-", "");
                var info = cep.HttpPost("http://viacep.com.br/ws/" + cepnovo + "/json/");
                dynamic dados = JsonConvert.DeserializeObject<dynamic>(info);
                var end = dados["logradouro"];
                txtendereco.Text = end.ToString();
                var bairro = dados["bairro"];
                txtBairro.Text = bairro.ToString();
                var cidade = dados["localidade"];
                txtcidade.Text = cidade.ToString();
                var uf = dados["uf"];
                ddlEstado.SelectedValue = uf.ToString();
                txtNumero.Focus();
            }
        }

        protected void rblFormaPagamento_SelectedIndexChanged(object sender, EventArgs e)
        {
            if(rblFormaPagamento.SelectedValue == "PIX")
            {
                pnlPix.Visible = true;
                pnlCartao.Visible = false;

                try
                {
                    pix valores = new pix();
                    valores.TransactionAmount = 1;// Convert.ToDecimal(lblTotal.Text);
                    valores.PayerEmail = lblEmail.Text;
                    valores.PayerLastName = lblSobrenome.Text;
                    valores.PayerFirstName = lblNome.Text;
                    valores.IdentificationType = "CPF";
                    valores.Description = "Testes";
                    valores.IdentificationNumber = lblCPF.Text.Replace(".", "").Replace("-", "");
                    dynamic dados = pix.GeraPix(valores);
                    lblPixCopiaCola.Text = dados["pointOfInteraction"]["transactionData"]["qrCode"];
                    imgPix.ImageUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + dados["pointOfInteraction"]["transactionData"]["qrCode"];                    
                }
                catch(Exception ex)
                {
                    lblMsg.Text = ex.Message;
                }
            }
            else
            {
                pnlPix.Visible = false;
                pnlCartao.Visible = true;
            }
        }
    }
}