using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace w7pay
{
    internal class produtos
    {
        public static dynamic GerarLista()
        {
            string BASEURL = "https://w7startup.azurewebsites.net/api/Produtos";
            var client = new RestClient($"{BASEURL}");

            var request = new RestRequest(Method.GET);
            request.AddParameter(
                "application/json",
                ParameterType.RequestBody);

            request.AddHeader("Accept", "application/json");
            IRestResponse response = client.Execute(request);

            return JsonConvert.DeserializeObject<dynamic>(response.Content);
        }

        public static dynamic DetalhesdoProduto(int id)
        {
            string BASEURL = "https://w7startup.azurewebsites.net/api/Produtos";
            var client = new RestClient($"{BASEURL}");

            var request = new RestRequest(Method.GET);
            request.AddParameter(
                "application/json",
                ParameterType.RequestBody);

            request.AddHeader("Accept", "application/json");
            IRestResponse response = client.Execute(request);

            return JsonConvert.DeserializeObject<dynamic>(response.Content);
        }

        //internal string toCreate()
        //{
        //    var obj = new
        //    {
        //        TransactionAmount,
        //        Description,
        //        PayerEmail,
        //        PayerFirstName,
        //        PayerLastName,
        //        IdentificationType,
        //        IdentificationNumber
        //    };
        //    return JsonConvert.SerializeObject(obj);
        //}

        public int Id { get; set; }
        public int IdEmpresa { get; set; }
        public int CEPInicial { get; set; }
        public int CEPFinal { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Categoria { get; set; }
        public int IdCategoria { get; set; }
        public string Codigo_Barras { get; set; }
        public double Preco_De { get; set; }
        public double Pontos { get; set; }
        public double Qtde_Inicial { get; set; }
        public double Qtde_Final { get; set; }
        public string Imagem { get; set; }
        public double QtdePadrao { get; set; }
        public double Estoque { get; set; }
        public string UnidadeMedida { get; set; }
        public string Status { get; set; }
        public string Token { get; set; }
    }
}