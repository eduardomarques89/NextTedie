using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;

namespace w7pay
{
    internal class pedidos
    {
        public static void CriarPedido(string sessao)
        {
            Database db = DatabaseFactory.CreateDatabase("ConnectionString");

            DbCommand insertCommand = db.GetSqlStringCommand(
                "INSERT INTO APP_PEDIDO (SESSAO, DATA, STATUS, VALOR) " +
                "VALUES (@SESSAO, GETDATE(), 'INICIANDO', 0)");

            db.AddInParameter(insertCommand, "@SESSAO", DbType.String, sessao);

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