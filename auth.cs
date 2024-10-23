using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Web;

namespace w7pay
{
    public class auth
    {
        /// <summary>
        /// verifica login email e senha de acesso
        /// </summary>
        /// <param name="email">email de acesso</param>
        /// <param name="senha">senha de acesso</param>
        /// <returns></returns>
        public static bool Login(string email, string senha)
        {
            using (IDataReader reader1 = DatabaseFactory.CreateDatabase("ConnectionString").ExecuteReader(CommandType.Text,
                       "select * from w7pay_usuario where email = '" + email + "' and senha = '" + senha + "'"))
            {
                if (reader1.Read())
                {                    
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public static bool StatusPlano(string idempresa)
        {
            using (IDataReader reader1 = DatabaseFactory.CreateDatabase("ConnectionString").ExecuteReader(CommandType.Text,
                       "select * from w7pay_empresa where idempresa = '" + idempresa + "' and status = 'ATIVO'"))
            {
                if (reader1.Read())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public static bool VerificaCnpj(string cnpj)
        {
            using (IDataReader reader1 = DatabaseFactory.CreateDatabase("ConnectionString").ExecuteReader(CommandType.Text,
                       "select * from w7pay_empresa where cnpj = '" + cnpj + "'"))
            {
                if (reader1.Read())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }




        public static string RetornaIdUsuario(string email)
        {
            using (IDataReader reader1 = DatabaseFactory.CreateDatabase("ConnectionString").ExecuteReader(CommandType.Text,
                       "select * from w7pay_usuario where email = '" + email + "'"))
            {
                if (reader1.Read())
                {
                    return reader1["idusuario"].ToString();
                }
                else
                {
                    return "";
                }
            }
        }

        public static string RetornaIdEmpresaToken(string token)
        {
            using (IDataReader reader1 = DatabaseFactory.CreateDatabase("ConnectionString").ExecuteReader(CommandType.Text,
                       "select * from w7pay_empresa where token = '" + token + "'"))
            {
                if (reader1.Read())
                {
                    return reader1["idempresa"].ToString();
                }
                else
                {
                    return "";
                }
            }
        }

        public static string RetornaTelefone(string idempresa)
        {
            using (IDataReader reader1 = DatabaseFactory.CreateDatabase("ConnectionString").ExecuteReader(CommandType.Text,
                       "select * from w7pay_empresa where idempresa = '" + idempresa + "'"))
            {
                if (reader1.Read())
                {
                    return reader1["telefone"].ToString().Replace("-", "").Replace("(", "").Replace(")", "").Replace(" ", "");
                }
                else
                {
                    return "";
                }
            }
        }


        public static bool VerificaUltimosDigitosCnpj(string cnpj)
        {
            using (IDataReader reader1 = DatabaseFactory.CreateDatabase("ConnectionString").ExecuteReader(CommandType.Text,
                       "select * from w7pay_empresa where substring(cnpj, 11,4) = '" + cnpj + "'"))
            {
                if (reader1.Read())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public static bool VerificaEmail(string email)
        {
            using (IDataReader reader1 = DatabaseFactory.CreateDatabase("ConnectionString").ExecuteReader(CommandType.Text,
                       "select * from w7pay_usuario where email = '" + email + "'"))
            {
                if (reader1.Read())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public static void AlterSenha(string senha, string user)
        {
            //cria database
            Database db = DatabaseFactory.CreateDatabase("ConnectionString");

            //insere a resposta na tabela softwares
            DbCommand command = db.GetSqlStringCommand(
            "UPDATE onfrete_usuario SET SENHA = @SENHA WHERE IDUSUARIO = @IDUSUARIO");
            db.AddInParameter(command, "@IDUSUARIO", DbType.String, user);
            db.AddInParameter(command, "@SENHA", DbType.String, Criptografia.Encrypt(senha));

            db.ExecuteNonQuery(command);
        }

        public static void EsqueceuSenha(int idempresa)
        {
            //cria database
            Database db = DatabaseFactory.CreateDatabase("ConnectionString");

            //insere a resposta na tabela softwares
            DbCommand command = db.GetSqlStringCommand(
            "INSERT INTO KIW7_ESQUECEU_SENHA (IDEMPRESA, TOKEN, DATA_EXPIRA, DATA_CADASTRO) VALUES (@IDEMPRESA, @TOKEN, @DATA_EXPIRA, getDate())");
            db.AddInParameter(command, "@IDEMPRESA", DbType.Int32, idempresa);
            db.AddInParameter(command, "@TOKEN", DbType.String, RandomString(15));
            db.AddInParameter(command, "@DATA_EXPIRA", DbType.DateTime, DateTime.Now.AddDays(1));

            db.ExecuteNonQuery(command);
        }

        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public static string RandomNumero(int length)
        {
            const string chars = "0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public static string GeraTokenAleatorio()
        {
            return RandomString(6);
        }
    }
}