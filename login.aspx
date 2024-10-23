<%@ Page Title="" Language="C#" MasterPageFile="~/ecom.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="tediev2.login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="assets/js/mascara.js"></script>
          <!--== Start Page Header Area Wrapper ==-->
<div class="page-header-area">
  <div class="container pt--0 pb--0">
    <div class="row">
      <div class="col-12">
        <div class="page-header-content">
          <h2 class="title">Acesso Rápido</h2>
          <nav class="breadcrumb-area">
            <ul class="breadcrumb">
              <li><a href="index.html">Página Inicial</a></li>
              <li class="breadcrumb-sep">//</li>
              <li>Acesso Rápido</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
<!--== End Page Header Area Wrapper ==-->
 <section class="account-area">
   <div class="container">    
     <div class="row">
       <div class="col-12">
         <div class="login-form-content">          
             <div class="row">
               <div class="col-12">
                 <div class="form-group">
                   <label for="username">Whatsapp <span class="required">*</span></label>
                    <asp:TextBox ID="txtemail" runat="server"  MaxLength="15" onkeyup="formataTelefone(this,event);" CssClass="form-control" Required></asp:TextBox>
                 </div>
               </div>               
               <div class="col-12">
                 <div class="form-group">
                  <asp:Button runat="server" ID="btnLogin" CssClass="btn-login" Text="Acessar" OnClick="btnLogin_Click" />
                     <asp:Label runat="server" ID="lblMsg"></asp:Label>   
                 </div>
               </div>
               <div class="col-12">
                 <div class="form-group account-info-group mb--0">                  
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
