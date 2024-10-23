<%@ Page Title="" Language="C#" MasterPageFile="~/ecom.Master" AutoEventWireup="true" CodeBehind="cadastro.aspx.cs" Inherits="tediev2.cadastro" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="assets/js/mascara.js"></script>
         <!--== Start Page Header Area Wrapper ==-->
<div class="page-header-area">
  <div class="container pt--0 pb--0">
    <div class="row">
      <div class="col-12">
        <div class="page-header-content">
          <h2 class="title">Cadastro</h2>
          <nav class="breadcrumb-area">
            <ul class="breadcrumb">
              <li><a href="index.html">Página Inicial</a></li>
              <li class="breadcrumb-sep">//</li>
              <li>Cadastro</li>
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
                    <div class="register-form-content">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="username">Como gostaria de ser chamado(a) <span class="required">*</span></label>
                                    <asp:TextBox ID="txtusername" runat="server" CssClass="form-control" Required></asp:TextBox>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="email">Whatsapp <span class="required">*</span></label>
                                    <asp:TextBox ID="txtemail" MaxLength="15" onkeyup="formataTelefone(this,event);" runat="server" TextMode="phone" CssClass="form-control" Required></asp:TextBox>
                                </div>
                            </div>                           
                            <div class="col-12">
                                <div class="form-group mb--0">
                                    <asp:Button runat="server" ID="btnSalvar" CssClass="btn-register" Text="Cadastrar" OnClick="btnSalvar_Click" />
                                       <asp:Label runat="server" ID="lblMsg"></asp:Label>   
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group account-info-group mb--0">
                                  
                                    <a class="lost-password" href="login.aspx">Já tenho conta</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
