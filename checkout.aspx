<%@ Page Title="" Language="C#" MasterPageFile="~/ecom.Master" AutoEventWireup="true" CodeBehind="checkout.aspx.cs" Inherits="tediev2.checkout" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="assets/js/mascara.js"></script>
        <!--== Start Page Header Area Wrapper ==-->
<div class="page-header-area">
  <div class="container pt--0 pb--0">
    <div class="row">
      <div class="col-12">
        <div class="page-header-content">
          <h2 class="title">Checkout Rápido</h2>
          <nav class="breadcrumb-area">
            <ul class="breadcrumb">
              <li><a href="index.html">Página Inicial</a></li>
              <li class="breadcrumb-sep">//</li>
              <li>Checkout Rápido</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
<!--== End Page Header Area Wrapper ==-->
    <section class="shopping-checkout-wrap">
        <div class="container">
           <h2 class:"titulo">Checkout</h2>
            <div class="row">
                <div class="col-12">
                    <div class="checkout-page-coupon-wrap">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <!--== Start Billing Accordion ==-->
                    <div class="checkout-billing-details-wrap">
                        <h2 class="title">Detalhes do Pagamento:</h2>
                        <div class="billing-form-wrap">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="f_name">Nome:
                                               </label>
                                            <asp:TextBox runat="server" id="lblNome" type="text" class="form-control" Required></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="l_name">Sobrenome:
                                               </label>
                                             <asp:TextBox runat="server"  id="lblSobrenome" type="text" class="form-control" Required></asp:TextBox>
                                        </div>
                                    </div>
                                       <div class="col-md-6">
       <div class="form-group" data-margin-bottom="30">
           <label for="CPF">CPF:
              </label>
            <asp:TextBox runat="server"  id="lblCPF" type="text" onkeyup="formataCPF(this,event);" class="form-control" Required></asp:TextBox>
       </div>
   </div>
                                       <div class="col-md-6">
       <div class="form-group">
           <label for="phone">Telefone:</label>
            <asp:TextBox runat="server" id="txttelefone" onkeyup="formataTelefone(this,event);" type="text" class="form-control" Required></asp:TextBox>
       </div>
   </div>

   <div class="col-md-12">
       <div class="form-group" data-margin-bottom="30">
           <label for="email">Email:
              </label>
            <asp:TextBox runat="server"  id="lblEmail" type="text" class="form-control" Required></asp:TextBox>
       </div>
   </div>
                                    <div class="col-md-6">
    <div class="form-group">
        <label for="pz-code">CEP:</label>
         <asp:TextBox runat="server"  id="txtcep" type="text" MaxLength="9" AutoPostBack="true" onkeyup="formataCEP(this,event);" class="form-control" Required OnTextChanged="txtcep_TextChanged"></asp:TextBox>
    </div>
</div>
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <label for="street-address">Endereço:
                                               </label>
                                             <asp:TextBox runat="server"  id="txtendereco" type="text" class="form-control" placeholder="Endereço" Required></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="street-address">Número
                                               </label>
                                             <asp:TextBox runat="server"  id="txtNumero" type="text" class="form-control" Required></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
    <div class="form-group">
        <label for="pz-code">Bairro:</label>
         <asp:TextBox runat="server"  id="txtBairro" type="text" class="form-control" Required></asp:TextBox>
    </div>
</div>
                                 
                                    <div class="col-md-2">
                                      <div class="form-group">
                                          <label for="town">UF:
                                             </label><br />
                                          <asp:DropDownList ID="ddlEstado" runat="server" CssClass="form-control">
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                              <asp:ListItem Text="AP"></asp:ListItem>
                                          </asp:DropDownList>
                                      </div>
                                  </div>
                                       <div class="col-md-10">
       <div class="form-group">
           <label for="town">Cidade:
              </label>
            <asp:TextBox runat="server"  id="txtcidade" type="text" class="form-control" Required></asp:TextBox>
       </div>
   </div>
                                 
                                    <div class="col-md-12">
                                        <div class="form-group mb--0">
                                            <label for="order-notes">Notas do pedido (opcional)</label>
                                            <textarea id="order-notes" class="form-control" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <!--== End Billing Accordion ==-->
                </div>
                <div class="col-lg-6">
                    <!--== Start Order Details Accordion ==-->
                    <div class="checkout-order-details-wrap">
                        <div class="order-details-table-wrap table-responsive">
                            <h2 class="title mb-25">Seu Pedido:</h2>
                            <asp:ListView ID="ltvCarrinho" runat="server" DataSourceID="sdsCarrinho">
                                 <ItemTemplate>
                                      <tr class="tbody-item">
                                       <td class="product-remove">
                                         <a class="remove" href="javascript:void(0)">×</a>
                                       </td>
                                       <td class="product-thumbnail">
                                         <div class="thumb">
                                           <a href="single-product.html">
                                             <img src='<%#Eval("imagem") %>' width="75" height="75" alt="Image-HasTech">
                                           </a>
                                         &nbsp;&nbsp;&nbsp;</div>
                                       </td>
                                       <td class="product-name">
                                         <a class="title" href="produtodetalhes.aspx?id=<%# Eval("idproduto") %>"><%# Eval("nome_abrev") %></a>
                                       </td>
                                       <td class="product-price">
                                         <span class="price">R$ <%#Eval("valor_unit") %></span>
                                       </td>
                                       <td class="product-quantity">
                                         <div class="pro-qty">
                                           <input type="text" class="quantity" title="Quantity" value='<%#Eval("qtde") %>'>
                                         </div>
                                       </td>
                                       <td class="product-subtotal">
                                         <span class="price">R$ <%#Eval("valor") %></span>
                                       </td>
                                     </tr>
                                                     </ItemTemplate>
                                                 </asp:ListView>
                                                <asp:SqlDataSource ID="sdsCarrinho" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="select pe.numero_pedido, i.idproduto, p.nome_abrev, p.imagem, qtde, i.valor, valor_unit from app_pedido pe
                            join  app_pedido_item i on i.numero_pedido = pe.numero_pedido
                                   join app_produto p on p.idproduto = i.idproduto
                                   where pe.sessao  = @sessao
                                   ">
                                                    <SelectParameters>
                                                        <asp:SessionParameter Name="sessao" SessionField="cookie" />
                                                    </SelectParameters>
                                                </asp:SqlDataSource> 
                            <table>
                                    <tr class="cart-subtotal">
                                        <th>Subtotal</th>
                                        <asp:Label runat="server" id="llbSubtotal" CssClass="sub-total" Text="0,00"></asp:Label>
                                    </tr>
                                    <tr class="shipping">
                                        <th>Envio</th>
                                    </tr>
                                    <tr class="order-total">
                                        <th>Total </th>
                                        <asp:Label runat="server" id="lblTotal" CssClass="total" Text="0,00"></asp:Label>
                                    </tr>
                            </table>
                            <asp:RadioButtonList ID="rblFormaPagamento" RepeatLayout="Flow" RepeatDirection="Vertical" CssClass="form-control" runat="server" AutoPostBack="true" OnSelectedIndexChanged="rblFormaPagamento_SelectedIndexChanged">
                                <asp:ListItem Text="PIX"></asp:ListItem>
                                <asp:ListItem Text="Cartão de Crédito"></asp:ListItem>                                
                            </asp:RadioButtonList>
                            <div class="shop-payment-method">
                                <div id="PaymentMethodAccordion">
                                    <asp:Panel ID="pnlCartao" Visible="false" runat="server">
                                    <div class="card">                                       
                                        <div id="itemOne">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <div class="form-group">
                                                            <label for="cardNumber">
                                                                Numero do Cartão
                                                               </label>
                                                            <div class="form-group d-inline-flex">
                                                                 <asp:TextBox runat="server"  id="num1" MaxLength="4"  type="text" class="form-control"></asp:TextBox>
                                                                 <asp:TextBox runat="server"  id="num2" MaxLength="4"  type="text" class="form-control"></asp:TextBox>
                                                                 <asp:TextBox runat="server"  id="num3" MaxLength="4"  type="text" class="form-control"></asp:TextBox>
                                                                 <asp:TextBox runat="server"  id="num4" MaxLength="4"  type="text" class="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validade">Validade:</label>
                                                        <div class="form-group d-inline-flex">
                                                            <asp:TextBox runat="server" id="vldMes" MaxLength="2" type="text" class="form-control"></asp:TextBox>
                                                            <asp:TextBox runat="server" id="vldAno" MaxLength="2" type="text"  class="form-control"></asp:TextBox>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="form-group">
                                                            <label for="cdNome">Nome Cartão:</label>
                                                            <asp:TextBox runat="server" id="cdNome" type="text" class="form-control"></asp:TextBox>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group" data-margin-bottom="30">
                                                            <label for="cdgSeg">
                                                                Código:
                                                               </label>
                                                            <asp:TextBox runat="server" id="cdgSeg" MaxLength="3" type="text" class="form-control"></asp:TextBox>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                            </div>                                           
                                            <a href="account.html" class="btn-place-order">Finalizar Pedido</a>
                                        </div>
                                    </div>
                                        </asp:Panel>
                                    <asp:Panel ID="pnlPix" Visible="false" runat="server">
                                    <div class="card">                                        
                                        <div id="itemThree">
                                            <div class="card-body">
                                                <p>Realize o pagamento via qrcode ou chave aleatória e aguarde confirmação.</p>                                                    
                                                <asp:Image ID="imgPix" runat="server" CssClass="img-thumbnail" />     <br />                                               
                                                <asp:Label ID="lblPixCopiaCola" runat="server"></asp:Label>
                                            </div>
                                        </div>
                                    </div>
                                        </asp:Panel>

                                     <p class="p-text">Seus dados pessoais serão usados ​​para processar seu pedido, apoiar sua experiência neste site e para outros fins descritos em nossa <a href="#/">Política de Privacidade.</a></p>
 <div class="agree-policy">
     <div class="custom-control custom-checkbox">
         <asp:TextBox runat="server" type="checkbox" id="privacy" class="custom-control-input visually-hidden"></asp:TextBox>
         <label for="privacy" class="custom-control-label">Li e concordo com os termos e condições da plataforma<span class="required">*</span></label>
     </div>
 </div>

                                      <asp:Label runat="server" ID="lblMsg"></asp:Label>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--== End Order Details Accordion ==-->
                </div>
            </div>
        </div>
    </section>
    <!--== End Shopping Checkout Area Wrapper ==-->
</asp:Content>
