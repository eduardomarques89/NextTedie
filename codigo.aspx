<%@ Page Title="" Language="C#" MasterPageFile="~/ecom.Master" AutoEventWireup="true" CodeBehind="codigo.aspx.cs" Inherits="tediev2.codigo" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="assets/js/mascara.js"></script>
     <!--== Start My Account Area Wrapper ==-->
 <section class="account-area">
   <div class="container">
     <div class="row">
       <div class="col-12">
         <div class="login-form-content">          
             <div class="row">
               <div class="col-12">
                 <div class="form-group">
                   <label for="username">Código de Segurança <span class="required">*</span></label>
                    <asp:TextBox ID="txtcodigo" runat="server" onkeyup="formataNumero(this,event);" MaxLength="6" CssClass="form-control" Required></asp:TextBox>
                 </div>
               </div>              
               <div class="col-12">
                 <div class="form-group">
                  <asp:Button runat="server" ID="btnLogin" CssClass="btn-login" Text="Enviar" OnClick="btnLogin_Click" />
                 <asp:Label runat="server" ID="lblMsg"></asp:Label>   
                 </div>
               </div>
               <div class="col-12">
                 <div class="form-group account-info-group mb--0">
                   <div class="rememberme-account">
                     <a class="lost-password" href="login.aspx">Voltar ao login</a>
                   </div>
                   <a class="lost-password" href="cadastro.aspx">Não tenho conta</a>
                 </div>
               </div>
             </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 <!--== End My Account Area Wrapper ==-->
</asp:Content>
