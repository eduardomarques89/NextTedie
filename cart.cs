using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using Newtonsoft.Json;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Sdk.CobrancaApi;
using System.Data.Common;
using System.Data;
using w7pay;

namespace tediev2
{
    public class cart
    {
        public static void AdicionarCarrinho(string sessao, int idproduto, double valor, int qtde)
        {
            Database db = DatabaseFactory.CreateDatabase("ConnectionString");

            DbCommand selectCommand = db.GetSqlStringCommand(
                                "SELECT numero_pedido FROM app_pedido WHERE sessao = @sessao");

            db.AddInParameter(selectCommand, "@sessao", DbType.String, sessao);

            using (IDataReader reader = db.ExecuteReader(selectCommand))
            {
                if (reader.Read())
                {
                    DbCommand selectCommand2 = db.GetSqlStringCommand(
                                    "SELECT numero_pedido, qtde FROM app_pedido_item WHERE numero_pedido = @numero_pedido and idproduto = @idproduto");

                    db.AddInParameter(selectCommand2, "@numero_pedido", DbType.String, reader["numero_pedido"].ToString());
                    db.AddInParameter(selectCommand2, "@idproduto", DbType.String, idproduto);

                    using (IDataReader reader2 = db.ExecuteReader(selectCommand2))
                    {
                        if (reader2.Read())
                        {
                            int qtdeatual = Convert.ToInt32(reader2["qtde"].ToString());
                            DbCommand insertCommand = db.GetSqlStringCommand(
            "UPDATE APP_PEDIDO_ITEM SET QTDE = @QTDE, VALOR = @VALOR, VALOR_UNIT = @VALOR_UNIT WHERE NUMERO_PEDIDO = @NUMERO_PEDIDO AND IDPRODUTO = @IDPRODUTO");

                            db.AddInParameter(insertCommand, "@NUMERO_PEDIDO", DbType.String, reader2["numero_pedido"].ToString());
                            db.AddInParameter(insertCommand, "@IDPRODUTO", DbType.String, idproduto);
                            db.AddInParameter(insertCommand, "@QTDE", DbType.Int16, qtdeatual + qtde);
                            db.AddInParameter(insertCommand, "@VALOR", DbType.Double, valor * (qtdeatual + qtde));
                            db.AddInParameter(insertCommand, "@VALOR_UNIT", DbType.Double, valor);

                            try
                            {
                                db.ExecuteNonQuery(insertCommand);
                            }
                            catch (Exception ex)
                            {

                            }
                        }
                        else
                        {
                            DbCommand insertCommand = db.GetSqlStringCommand(
            "INSERT INTO APP_PEDIDO_ITEM (NUMERO_PEDIDO, IDPRODUTO, QTDE, VALOR, STATUS, VALOR_UNIT) " +
                "VALUES (@NUMERO_PEDIDO, @IDPRODUTO, @QTDE, @VALOR, @STATUS, @VALOR_UNIT)");

                            db.AddInParameter(insertCommand, "@NUMERO_PEDIDO", DbType.String, reader["numero_pedido"].ToString());
                            db.AddInParameter(insertCommand, "@IDPRODUTO", DbType.String, idproduto);
                            db.AddInParameter(insertCommand, "@QTDE", DbType.Int16, qtde);
                            db.AddInParameter(insertCommand, "@VALOR", DbType.Double, valor * qtde);
                            db.AddInParameter(insertCommand, "@STATUS", DbType.String, "ATIVO");
                            db.AddInParameter(insertCommand, "@VALOR_UNIT", DbType.Double, valor);

                            try
                            {
                                db.ExecuteNonQuery(insertCommand);
                            }
                            catch (Exception ex)
                            {

                            }
                        }
                    }
                }
            }
        }

        public static dynamic RemoverCarrinho()
        {
            string BASEURL = "https://w7startup.azurewebsites.net/api/Carrinho/RemoverItem/{id}";
            var client = new RestClient($"{BASEURL}");

            var request = new RestRequest(Method.POST);
            request.AddParameter(
                "application/json",
                ParameterType.RequestBody);

            request.AddHeader("Accept", "application/json");
            IRestResponse response = client.Execute(request);

            return JsonConvert.DeserializeObject<dynamic>(response.Content);
        }


        public static dynamic LimparCarrinho()
        {
            string BASEURL = "https://w7startup.azurewebsites.net/api/Carrinho/LimparCarrinho";
            var client = new RestClient($"{BASEURL}");

            var request = new RestRequest(Method.POST);
            request.AddParameter(
                "application/json",
                ParameterType.RequestBody);

            request.AddHeader("Accept", "application/json");
            IRestResponse response = client.Execute(request);

            return JsonConvert.DeserializeObject<dynamic>(response.Content);
        }

        public static dynamic ObterCarrinho()
        {
            string BASEURL = "https://w7startup.azurewebsites.net/api/Carrinho/ObterCarrinho";
            var client = new RestClient($"{BASEURL}");

            var request = new RestRequest(Method.POST);
            request.AddParameter(
                "application/json",
                ParameterType.RequestBody);

            request.AddHeader("Accept", "application/json");
            IRestResponse response = client.Execute(request);

            return JsonConvert.DeserializeObject<dynamic>(response.Content);
        }

    }
}