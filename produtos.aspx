<%@ Page Title="" Language="C#" MasterPageFile="~/ecom.Master" AutoEventWireup="true" CodeBehind="produtos.aspx.cs" Inherits="tediev2.produtos2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


        <!--== Start Search Area Wrapper ==-->
    <section class="search-area">
        <div class="container">
      <div class="row justify-content-center">
      <div class="col-8 text-center mb-48">
        <asp:Panel runat="server" ID="Panel1" CssClass="text-center">
          <div class="input-group input-group-lg">
              <h2>O seu momento, o seu estilo de vida, a melhor experiência em compras</h2>
            <asp:TextBox runat="server" ID="txtBusca" CssClass="form-control" placeholder="Digite o que você está buscando"></asp:TextBox>
          </div>
        </asp:Panel>
      </div>
    </div>
        </div>
    </section>
      <!--== End Search Area Wrapper ==-->


    <!--== Start Product Area Wrapper ==-->
<section class="product-area">
  <div class="container">
      <div class="col-12">
        <div class="row">
          <div class="col-12 mt-48">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                <div class="row">
                    <table>
                        <tr><td>Nome do Produto</td><td>Preço</td><td>Categoria</td></tr>
                   <asp:Literal runat="server" ID="ltrProdutos"></asp:Literal>
                        </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <!--== End Product Area Wrapper ==-->


    <iframe allow="join-ad-interest-group" data-tagging-id="AW-464834261/jNnPCPihp6QDENWd090B" data-load-time="1728484710562" height="0" width="0" style="display: none; visibility: hidden;" src="https://td.doubleclick.net/td/rul/464834261?random=1728484710551&amp;cv=11&amp;fst=1728484710551&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be4a70v9120612865z8859602401za201zb859602401&amp;gcs=G111&amp;gcd=13r3r3r3r5l1&amp;dma=0&amp;tag_exp=101671035~101747727&amp;u_w=1920&amp;u_h=1080&amp;url=https%3A%2F%2Fwww.streamshop.com.br%2F%3Fgad_source%3D1%26gclid%3DCj0KCQjw05i4BhDiARIsAB_2wfBP3QoHQd7GiPl5MEQM6MNKbiSlfXCSkXu4bG1nuNS83CBoxALWlDgaAkF4EALw_wcB&amp;ref=https%3A%2F%2Fwww.google.com%2F&amp;label=jNnPCPihp6QDENWd090B&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=StreamShop%20%7C%20Uma%20nova%20interface%20de%20compras%20para%20seu%20ecommerce&amp;value=0&amp;bttype=purchase&amp;npa=0&amp;gclgs=1&amp;gclst=1553&amp;gcllp=171941730&amp;gclaw=Cj0KCQjw05i4BhDiARIsAB_2wfBP3QoHQd7GiPl5MEQM6MNKbiSlfXCSkXu4bG1nuNS83CBoxALWlDgaAkF4EALw_wcB&amp;gac=UA-197717825-1%3ACj0KCQjw05i4BhDiARIsAB_2wfAPZH0AGgCfsjzYALOz7iMjntkNJtDtf16vqFTT35zzzVgjZKMJjwMaAvPQEALw_wcB&amp;pscdl=noapi&amp;auid=2107568419.1728484343&amp;uaa=x86&amp;uab=64&amp;uafvl=Google%2520Chrome%3B129.0.6668.90%7CNot%253DA%253FBrand%3B8.0.0.0%7CChromium%3B129.0.6668.90&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=10.0.0&amp;uaw=0&amp;fledge=1&amp;capi=1&amp;ct_cookie_present=0"></iframe>

     <!--== Start Divider Area Wrapper ==-->
 <section class="bg-theme-color position-relative z-index-1">
   <div class="container-fluid p--0">
     <div class="row divider-style1">
       <div class="col-lg-3 col-xl-4">
         <div class="divider-thumb divider-thumb-left">
           <img src="assets/img/photos/divider1.webp" width="351" height="435" alt="Image-HasTech">
           <div class="shape-circle"></div>
         </div>
       </div>
       <div class="col-lg-6 col-xl-4">
         <div class="divider-content text-center">
           <h5 class="sub-title">Save 50% Off</h5>
           <h2 class="title">Best Deal Offer</h2>
           <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etlop.</p>
           <a class="btn-theme text-dark" href="shop.html">Shop Now</a>
           <img class="shape-object" src="assets/img/shape/object1.webp" width="316" height="302" alt="Image-HasTech">
         </div>
       </div>
       <div class="col-lg-3 col-xl-4">
         <div class="divider-thumb divider-thumb-right">
           <img src="assets/img/photos/divider2.webp" width="488" height="447" alt="Image-HasTech">
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
         <div class="col-lg-6 order-2 order-lg-1">
           <div class="about-content">
             <div class="section-title shape-left">
               <h5 class="sub-title">Como funciona a nossa </h5>
               <h2 class="title">Inteligência Artificial</h2>
             </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
             <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.</p>
             <a class="btn-theme" href="shop.html">Shop Now</a>
           </div>
         </div>
         <div class="col-lg-6 order-1 order-lg-2">
           <div class="about-thumb">
             <img src="assets/img/about/1.webp" width="569" height="577" alt="Image-HasTech">
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 <!--== End About Area Wrapper ==-->
</asp:Content>
