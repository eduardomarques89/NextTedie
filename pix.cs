using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using Newtonsoft.Json;

namespace tediev2
{
    public class pix
    {
        public static dynamic GeraPix(pix envio)
        {
            string BASEURL = "https://w7startup.azurewebsites.net/api/pix/create";
            var client = new RestClient($"{BASEURL}");

            var request = new RestRequest(Method.POST);
            string env = envio.toCreate();
            request.AddParameter(
                "application/json",
                env,
                ParameterType.RequestBody);

            request.AddHeader("Accept", "application/json");
            IRestResponse response = client.Execute(request);

            return JsonConvert.DeserializeObject<dynamic>(response.Content);
        }

        internal string toCreate()
        {
            var obj = new
            {
                TransactionAmount,
                Description,
                PayerEmail,
                PayerFirstName,
                PayerLastName,
                IdentificationType,
                IdentificationNumber
            };
            return JsonConvert.SerializeObject(obj);
        }

        public decimal TransactionAmount { get; set; }
        public string Description { get; set; }
        public string PayerEmail { get; set; }
        public string PayerFirstName { get; set; }
        public string PayerLastName { get; set; }
        public string IdentificationType { get; set; }
        public string IdentificationNumber { get; set; }
    }
}