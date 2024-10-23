<%@ Page Title="" Language="C#" MasterPageFile="~/ecom.Master" AutoEventWireup="true" CodeBehind="carrinho.aspx.cs" Inherits="tediev2.Carrinho" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <asp:HiddenField ID="hdfNumeroPedido" runat="server" />

     <!--== Start Page Header Area Wrapper ==-->
<div class="page-header-area">
  <div class="container pt--0 pb--0">
    <div class="row">
      <div class="col-12">
        <div class="page-header-content">
          <h2 class="title">Seu carrrinho favorito</h2>
          <nav class="breadcrumb-area">
            <ul class="breadcrumb">
              <li><a href="index.html">Página Inicial</a></li>
              <li class="breadcrumb-sep">//</li>
              <li>Carrinho de Compras</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
<!--== End Page Header Area Wrapper ==-->


 <section class="shopping-cart-area">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="shopping-cart-form table-responsive">

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
                         <span class="price" onkeyup="formataValor(this,event);">R$ <%#Eval("valor_unit") %></span>
                       </td>
                       <td class="product-quantity">
                         <div class="pro-qty">
                           <input type="text" class="quantity" title="Quantity" value='<%#Eval("qtde") %>'>
                         </div>
                       </td>
                       <td class="product-subtotal">
                         <span class="price" onkeyup="formataValor(this,event);">R$ <%#Eval("valor") %></span>
                       </td>
                     </tr>
                                     </ItemTemplate>
                                 </asp:ListView>
                                 <asp:SqlDataSource ID="sdsCarrinho" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="select numero_pedido, i.idproduto, p.nome_abrev, p.imagem, qtde, valor, valor_unit from app_pedido_item i
                    join app_produto p on p.idproduto = i.idproduto
                    where numero_pedido = @numero_pedido
                    ">
                                     <SelectParameters>
                                         <asp:ControlParameter ControlID="hdfNumeroPedido" Name="numero_pedido" PropertyName="Value" />
                                     </SelectParameters>
                                 </asp:SqlDataSource>

             <table class="table text-center">
            
               <tbody>
                
                 
               </tbody>
             </table>
         </div>
       </div>
     </div>
     <div class="row">
       <div class="col-12 col-lg-6">
         <div class="coupon-wrap">
           <h4 class="title">Cupom</h4>
           <p class="desc">Entre com um código de cupom.</p>
           <input type="text" class="form-control" placeholder="Cupom código">
           <button type="button" class="btn-coupon">Aplicar Cupom</button>
         </div>
       </div>
       <div class="col-12 col-lg-6">
         <div class="cart-totals-wrap">
           <h2 class="title">Total do Carrinho</h2>
           <table>
             <tbody>
               <tr class="cart-subtotal">
                 <th>Subtotal</th>
                 <td>
                   <span class="amount">R$  <asp:Label runat="server" id="llbSubtotal" CssClass="total" Text="0,00"></asp:Label></span>
                 </td>
               </tr>
               <tr class="shipping-totals">
                 <th>Entrega</th>
                 <td>
                   <ul class="shipping-list">
                     <li class="radio">
                       <input type="radio" name="shipping" id="radio1" checked>
                       <label for="radio1">Taxa de Entrega: <span>R$  <asp:Label runat="server" id="lblFrete" CssClass="total" Text="0,00"></asp:Label></span></label>
                     </li>                     
                   </ul>                   
                 </td>
               </tr>
               <tr class="order-total">
                 <th>Total</th>
                 <td>
                   <span class="amount">R$ <asp:Label runat="server" id="lblTotal" CssClass="total" Text="0,00"></asp:Label></span>
                 </td>
               </tr>
             </tbody>
           </table>
           <div class="text-end">
                 <asp:Label runat="server" ID="lblMsg"></asp:Label>   
             <a href="checkout.aspx" class="checkout-button">Ir para Checkout</a>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 <!--== End Blog Area Wrapper ==-->
</asp:Content>
