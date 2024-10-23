<%@ Page Title="" Language="C#" MasterPageFile="~/ecom.Master" AutoEventWireup="true" CodeBehind="produtodetalhes.aspx.cs" Inherits="tediev2.produtodetalhes" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
         <!--== Start Page Header Area Wrapper ==-->
    <asp:Timer ID="Timer1" runat="server" Enabled="false" Interval="3000" OnTick="Timer1_Tick"></asp:Timer>
  <section class="product-area product-single-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="product-single-item">
            <div class="row">
              <div class="col-lg-6">
                <!--== Start Product Thumbnail Area ==-->
                <div class="product-single-thumb">
                  <div class="swiper single-product-thumb single-product-thumb-slider">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="lightbox-image">
                          <img src="#" width="570" height="675" alt="Image-HasTech" runat="server" id="imgProd">
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="product-single-swiper-wrap position-relative">
                    <div class="swiper single-product-nav single-product-nav-slider">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                         <%-- <img src="#" width="127" height="127" alt="Image-HasTech" runat="server" id="imgProduto">--%>
                        </div>                       
                      </div>
                    </div>
                    <!--== Add Swiper Arrows ==-->
                   <%-- <div class="single-swiper-btn-wrap">
                      <div class="swiper-btn-prev">
                        <i class="fa fa-angle-left"></i>
                      </div>
                      <div class="swiper-btn-next">
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </div>--%>
                  </div>
                </div>
                <!--== End Product Thumbnail Area ==-->
              </div>
              <div class="col-lg-6">
                <!--== Start Product Info Area ==-->
                <div class="product-single-info">
                  <h3 class="main-title"><asp:Label id="lblNome" runat="server"></asp:Label></h3>
                  <div class="prices">
                    <span class="price">R$ <asp:Label id="lblPreco" runat="server"></asp:Label></span>
                  </div>
                  <div class="rating-box-wrap">
                    <div class="rating-box">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="review-status">
                      <a href="javascript:void(0)">(5 Customer Review)</a>
                    </div>
                  </div>
<%--                  <p>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>--%>
                  <div class="product-single-meta">
                    <ul>
                      <li><span>SKU:</span> <asp:Label id="lblId" runat="server"></asp:Label></li>
                      <li><span>Categoria:</span> 
                        <asp:Label id="lblCategoria" runat="server"></asp:Label>
                      </li>
                      <%--<li><span>Tags:</span> 
                        <a href="shop.html">Petfood. Pet</a>,
                        <a href="shop.html">Animal.</a>
                      </li>--%>
                    </ul>
                  </div>
                  <div class="product-quick-action">
                    <div class="qty-wrap">
                      <div class="pro-qty">
                          <asp:TextBox ID="txtQtde" runat="server" Text="1"></asp:TextBox>
<%--                        <input type="text" title="Quantity" value="01">--%>
                      </div>
                    </div>
                      <asp:Button ID="btnAddCarrinho" Font-Bold="true" CssClass="btn-product-cart" runat="server" Text="EU QUERO" OnClick="btnAddCarrinho_Click" />
                      <%--<button type="button" class="btn-product-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                        <i class="pe-7s-like"></i>
                      </button>
                    <button type="button" class="btn-product-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                      <i class="pe-7s-look"></i>
                    </button>--%>
                  </div>
                    <div><br /><br />
                        <h4>
                        <asp:Label ID="lblMsg" runat="server" Text=""></asp:Label></h4>
                    </div>
                 <%-- <div class="product-review-tabs-content">
                    <ul class="nav product-tab-nav" id="ReviewTab" role="tablist">
                      <li role="presentation">
                        <a class="active" id="information-tab" data-bs-toggle="pill" href="#information" role="tab" aria-controls="information" aria-selected="true">Information</a>
                      </li>
                      <li role="presentation">
                        <a id="description-tab" data-bs-toggle="pill" href="#description" role="tab" aria-controls="description" aria-selected="false">Description</a>
                      </li>
                      <li role="presentation">
                        <a id="reviews-tab" data-bs-toggle="pill" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (05)</a>
                      </li>
                    </ul>
                    <div class="tab-content product-tab-content" id="ReviewTabContent">
                      <div class="tab-pane fade show active" id="information" role="tabpanel" aria-labelledby="information-tab">
                        <div class="product-information">
                          <p>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptateLorem ipsum dolor sit amet col adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
                        <div class="product-description">
                          <p>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptateLorem ipsum dolor sit amet col adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                        <div class="product-review-content">
                          <div class="comment-author">
                            <div class="comment-thumb">
                              <img src="assets/img/shop/avatar.webp" width="60" height="60" alt="Image-HasTech">
                            </div>
                            <div class="comment-content">
                              <div class="rating-box">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </div>
                              <h4 class="title"><span>Admin</span> - April 8, 2022</h4>
                              <p class="desc">Donec venenatis euismod turpis sed dapibus. Maecenas augue augue, iaculis id dui eget, ultricies sagittis purus. Praesent sed blandit mauris. Pellentesque non auctor dolor.</p>
                            </div>
                          </div>
                          <div class="comment-form-content">
                            <h4 class="title collapsed" data-bs-toggle="collapse" data-bs-target="#comment-widgetId-1">Add Reviwe</h4>
                            <div id="comment-widgetId-1" class="collapse collapse-body">
                              <div class="review-comment-form">
                                <form action="#">
                                  <div class="row">
                                    <div class="col-12">
                                      <div class="form-group">
                                        <label for="ReviewComment" class="form-label">Your review *</label>
                                        <textarea id="ReviewComment" class="form-control"></textarea>
                                      </div>
                                    </div>
                                    <div class="col-12">
                                      <div class="form-group">
                                        <label for="Reviewname" class="form-label">Name *</label>
                                        <input id="Reviewname" class="form-control" type="text">
                                      </div>
                                    </div>
                                    <div class="col-12">
                                      <div class="form-group">
                                        <label for="Reviewemail" class="form-label">Email *</label>
                                        <input id="Reviewemail" class="form-control" type="email">
                                      </div>
                                    </div>
                                    <div class="col-md-12">
                                      <div class="form-group mb--0">
                                        <button type="submit">Submit</button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>--%>
                </div>
                <!--== End Product Info Area ==-->
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
  </section>
  <!--== End Product Single Area Wrapper ==-->
</asp:Content>
