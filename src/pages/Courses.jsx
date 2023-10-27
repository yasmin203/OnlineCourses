import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from "react-router-dom";

const Courses = () => {
  return (
      <>
{/*header*/}
{/* <Header/> */}
{/*/header*/}
{/* about breadcrumb */}
<BreadCrumb title = "Courses" page="Courses"/>
{/*//about breadcrumb */}
<section className="w3l-courses">
    <div className="blog pb-5" id="courses">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
                <div className="col-lg-4 col-md-6 item">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <Link to="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c1.jpg"
                                    alt="Card image cap" />
                            </Link>
                            <div className="post-pos">
                                <Link to="#reciepe" className="receipe blue">Beginner </Link>
                            </div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$35.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <Link to="#course-single" className="course-desc">Open Programming Courses for everyone : Python
                            </Link>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a1.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <Link to="#author"> Olivia </Link>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <Link to="#author"> Programing </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <Link to="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c2.jpg"
                                    alt="Card image cap" />
                            </Link>
                            <div className="course-price-badge"> Free</div>
                            <div className="post-pos">
                                <Link to="#reciepe" className="receipe blue">Beginner </Link>
                            </div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$0.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <Link to="#course-single" className="course-desc">Learning to Write as a clean Professional
                                Author </Link>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a2.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <Link to="#author"> Isabella </Link>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <Link to="#author"> Teaching </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <Link to="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c3.jpg"
                                    alt="Card image cap" />
                            </Link>
                            <div className="course-price-badge-new"> New</div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$49.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <Link to="#course-single" className="course-desc">Learn Master JQuery in a Short Period of Time </Link>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a3.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <Link to="#author"> Alexander </Link>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <Link to="#author"> Programing </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <Link to="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c4.jpg"
                                    alt="Card image cap" />
                            </Link>
                            <div className="post-pos">
                                <Link to="#reciepe" className="receipe blue">Beginner </Link>
                            </div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$35.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <Link to="#course-single" className="course-desc">Open Programming Courses for everyone : Python
                            </Link>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a4.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <Link to="#author"> William </Link>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <Link to="#author"> Programing </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <Link to="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c5.jpg"
                                    alt="Card image cap" />
                            </Link>
                            <div className="course-price-badge"> Free</div>
                            <div className="post-pos">
                                <Link to="#reciepe" className="receipe blue">Beginner </Link>
                            </div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$0.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <Link to="#course-single" className="course-desc">Learning to Write as a clean Professional
                                Author </Link>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a1.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <Link to="#author"> Olivia </Link>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <Link to="#author"> Programing </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <Link to="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="assets/images/c6.jpg"
                                    alt="Card image cap" />
                            </Link>
                            <div className="course-price-badge-new"> New</div>
                        </div>
                        <div className="card-body course-details">
                            <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$49.00</p>
                                <ul className="rating-star">
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star"></span></li>
                                    <li><span className="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <Link to="#course-single" className="course-desc">Learn Master JQuery in a Short Period of Time </Link>
                            <div className="course-meta mt-4">
                                <div className="meta-item course-lesson">
                                    <span className="fa fa-clock-o"></span>
                                    <span className="meta-value"> 20 hrs </span>
                                </div>
                                <div className="meta-item course-">
                                    <span className="fa fa-user-o"></span>
                                    <span className="meta-value"> 50 </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="author align-items-center">
                                <img src="assets/images/a2.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span> <Link to="#author"> Isabella </Link>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span> <Link to="#author"> Teaching </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          {/* pagination */}
            <div className="pagination-wrapper mt-5 pt-lg-3 text-center">
                <ul className="page-pagination">
                    <li>< Link className="next" to="#url"><span className="fa fa-angle-left"></span> Prev </Link></li>
                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                    <li> <Link className="page-numbers" to="#url">2 </Link></li>
                    <li> <Link className="page-numbers" to="#url">3 </Link></li>
                    <li> <Link className="page-numbers" to="#url">.... </Link></li>
                    <li> <Link className="next" to="#url">Next <span className="fa fa-angle-right"></span> </Link></li>
                </ul>
            </div>
          {/* //pagination */}
        </div>
    </div>
          </section>
          {/* <Footer/> */}
      </>
  )
}

export default Courses