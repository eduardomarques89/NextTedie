<%@ Page Title="" Language="C#" MasterPageFile="~/ecom.Master" CodeBehind="index.aspx.cs" Inherits="tediev2.index" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!--== Start Search Area Wrapper ==-->
    <section class="search-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center mb-48">
                    <asp:Panel runat="server" ID="Panel2" CssClass="text-center">
                        <div class="input-group input-group-lg">
                            <h2>Oie,
                                <asp:Label ID="Label1" runat="server"></asp:Label>
                                bem-vindo(a)! Navegue à vontade usando a nossa IA</h2>
                            <br />
                        </div>
                        <asp:TextBox runat="server" ID="txtBusca" CssClass="form-control" TextMode="MultiLine" Rows="2" placeholder="Digite o que você está buscando"></asp:TextBox>
                    </asp:Panel>
                </div>
            </div>
        </div>
    </section>
    <!--== End Search Area Wrapper ==-->

    <!--== Start Product Area Wrapper ==-->
     <asp:Panel ID="pnlVitrine" runat="server" Visible="false">
    <section class="product-area">
        <div class="container">
            <div class="col-12">
                <div class="row">
                    <div class="col-12 mt-48">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                                <div class="row">
                                   
                                        <asp:ListView ID="ListView1" runat="server" DataSourceID="sdsVitrine" OnItemCommand="ltvCarrinho_ItemCommand">
                                            <ItemTemplate>
                                                <div class="col-sm-6 col-xl-3">
                                                    <div class="product-item">
                                                        <div class="product-thumb">
                                                            <a href="produtodetalhes.aspx?id=<%#Eval("idproduto") %>">
                                                                <img src="<%#Eval("imagem") %>" width="270" height="320" alt="Image-HasTech">
                                                            </a>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                                        <div class="product-info">
                                                            <h4 class="title"><a href="produtodetalhes.aspx?id=<%#Eval("idproduto") %>"><%#Eval("nome_abrev") %></a></h4>
                                                            <div class="prices">
                                                                <span class="price">R$ <%# Eval("valor") %></span>
                                                            </div>
                                                            <asp:Button ID="btnAddCarrinho" Font-Bold="true" CommandName="Add" CommandArgument='<%# Eval("idproduto") %>' CssClass="btn-product-cart" runat="server" Text="EU QUERO" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </ItemTemplate>
                                        </asp:ListView>
                                        <asp:SqlDataSource ID="sdsVitrine" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="select top 10 p.idproduto, p.nome_abrev, p.imagem, a.VALOR from app_produto p join app_produto_atacado a on p.idproduto = a.idproduto where nome_abrev like '%coca%'"></asp:SqlDataSource>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> </asp:Panel>
    <!--== End Product Area Wrapper ==-->

    <!--== Start Carousel Area Wrapper ==-->
    <asp:Panel ID="pnlGaleria" runat="server" Visible="true">
        <div class="galleria">
            <div class="galleria__inner">
                <div class="galleria__item">
                    <asp:LinkButton ID="LinkButton1" runat="server" OnClick="LinkButton1_Click">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/e89f4296-1f38-4504-92ce-66b10c88a090.png');">
                    </div>
                        </asp:LinkButton>
                </div>
                <div class="galleria__item">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/36e90db1-ad94-4256-a791-c991f903d9f8.png');">
                    </div>
                </div>
                <div class="galleria__item">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/45992a60-aca5-4e21-b36e-4db4b076dfc5.png');">
                    </div>
                </div>
                <div class="galleria__item">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/7567c490-31ff-41e6-a998-9c227db2230d.png');">
                    </div>
                </div>
                <div class="galleria__item">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/aae9274a-ffdd-49f0-a9a8-732f5017ea05.png');">
                    </div>
                </div>
                <div class="galleria__item">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/aae9274a-ffdd-49f0-a9a8-732f5017ea05.png');">
                    </div>
                </div>
                <div class="galleria__item">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/7567c490-31ff-41e6-a998-9c227db2230d.png');">
                    </div>
                </div>
                <div class="galleria__item">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/36e90db1-ad94-4256-a791-c991f903d9f8.png');">
                    </div>
                </div>
                <div class="galleria__item">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/45992a60-aca5-4e21-b36e-4db4b076dfc5.png');">
                    </div>
                </div>
                <div class="galleria__item">
                    <div class="galleria__item-inner" style="background-image: url('https://files.streamshop.com.br/a9948d42-69e1-4e15-ba22-d1dc3fdedb14/aae9274a-ffdd-49f0-a9a8-732f5017ea05.png');">
                    </div>
                </div>
            </div>
        </div>
    </asp:Panel>
    <!--== End Carousel Area Wrapper ==-->

    <!--== Start Divider Area Wrapper ==-->
    <section class="bg-theme-color position-relative z-index-1">
        <div class="container-fluid p--0">
            <div class="row divider-style1">
                <div class="col-lg-3 col-xl-4">
                    <div class="divider-thumb divider-thumb-left">
                        <img src="assets/img/shop/banner/banner2.png" alt="Image-HasTech">
                    </div>
                </div>
                <div class="col-lg-6 col-xl-3">
                    <div class="divider-content text-center">
                        <h5 class="sub-title">Comece a vender online</h5>
                        <h2 class="title">Seja nosso fornecedor</h2>
                        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etlop.</p>
                        <a class="btn-theme text-dark" href="shop.html">Quero vender!</a>
                    </div>
                </div>
                <div class="col-lg-3 col-xl-4">
                    <div class="divider-thumb divider-thumb-right">
                        <img src="assets/img/shop/banner/banner1.png" alt="Image-HasTech">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--== End Divider Area Wrapper ==-->

    <!--== Start About Area Wrapper ==-->
    <section class="about-area">
        <div class="container">
            <div class="about-item position-relative">
                <div class="row align-items-center">
                    <div class="col-lg-5 order-2 order-lg-1">
                        <div class="about-content">
                            <h5 class="sub-title">Estamos aqui para ajudar</h5>
                            <h2 class="title">O que fazemos?</h2>
                            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul class="list-check">
                                <li>Atendimento personalizado</li>
                                <li>Produtos de alta qualidade</li>
                                <li>Entrega rápida</li>
                            </ul>
                            <a class="btn-theme" href="about.html">Saiba mais</a>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2">
                        <div class="about-thumb text-center">
                            <img src="assets/img/shop/banner/banner2.png" alt="Image-HasTech">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--== End About Area Wrapper ==-->
</asp:Content>
