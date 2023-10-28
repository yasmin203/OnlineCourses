import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
  <>
    {/* header*/}
     {/* <Header /> */}
    {/*header*/}
            
{/* main-slider */}
        <section className="w3l-main-slider" id="home">
            <div className="companies20-content">
                <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>50% Discount on all Popular Courses</h5>
                                            <p className="mt-4 pr-lg-4">Take the first step to your journey to success with us</p>
                                           <Link className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" to="/about"> Ready to
                                                get started?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info  banner-view banner-top1 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Learn and Improve Yourself in Less Time </h5>
                                            <p className="mt-4 pr-lg-4">Our self improvement courses is very effective </p>
                                           <Link className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" to="/about"> Ready to
                                                get started?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top2 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Be More Productive to Be More Successful</h5>
                                            <p className="mt-4 pr-lg-4">Don't waste your time, check out our productive courses</p>
                                           <Link className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" to="/about"> Ready to
                                                get started?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top3 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Enhance your skills with best online courses</h5>
                                            <p className="mt-4 pr-lg-4">Take the first step to your journey to success with us</p>
                                           <Link className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" to="/about"> Ready to
                                                get started?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>

            <div className="waveWrapper waveAnimation">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none"}}></path>
                </svg>
            </div>
        </section>
{/* /main-slider */}
            
<section className="w3l-courses">
    <div className="blog pb-5" id="courses">
        <div className="container py-lg-5 py-md-4 py-2">
            <h5 className="title-small text-center mb-1">Join our learn Courses</h5>
            <h3 className="title-big text-center mb-sm-5 mb-4">Featured Online <span>Courses</span></h3>
            <div className="row">
                <div className="col-lg-4 col-md-6 item">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                           <Link to="#course-single" className="zoom d-block">
                                <img className="card-img-bottom d-block" src="OnlineCoursesTemplate/assets/images/c1.jpg"
                                    alt="Card image cap" />
                            </Link>
                            <div className="post-pos">
                               <Link to="#reciepe" className="receipe blue">Beginner</Link>
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
                                <img src="OnlineCoursesTemplate/assets/images/a1.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span><Link to="#author"> Olivia</Link>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span><Link to="#author"> Programing</Link>
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
                                <img className="card-img-bottom d-block" src="OnlineCoursesTemplate/assets/images/c5.jpg"
                                    alt="Card image cap" />
                            </Link>
                            <div className="course-price-badge"> Free</div>
                            <div className="post-pos">
                               <Link to="#reciepe" className="receipe blue">Beginner</Link>
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
                           <Link to="#course-single" className="course-desc">Learning to Write as a clean and Professional
                                Author</Link>
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
                                <img src="OnlineCoursesTemplate/assets/images/a2.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span><Link to="#author"> Isabella</Link>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span><Link to="#author"> Teaching</Link>
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
                                <img className="card-img-bottom d-block" src="OnlineCoursesTemplate/assets/images/c6.jpg"
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
                           <Link to="#course-single" className="course-desc">Learn Master JQuery in a Short Period of Time</Link>
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
                                <img src="OnlineCoursesTemplate/assets/images/a4.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                        <span className="meta-value mx-1">by</span><Link to="#author"> William</Link>
                                    </li>
                                    <li>
                                        <span className="meta-value mx-1">in</span><Link to="#author"> Programing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 text-more">
                <p className="pt-md-3 sample text-center">
                    Control your personal preference settings to get notified about appropriate courses
                   <Link to="courses.html">View All Courses <span className="pl-2 fa fa-long-arrow-right"></span></Link>
                </p>
            </div>
        </div>
    </div>
</section>
<section className="w3l-features py-5" id="facilities">
    <div className="call-w3 py-lg-5 py-md-4 py-2">
        <div className="container">
            <div className="row main-cont-wthree-2">
                <div className="col-lg-5 feature-grid-left">
                    <h5 className="title-small mb-1">Study and graduate</h5>
                    <h3 className="title-big mb-4">Our Facilities </h3>
                    <p className="text-para">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                        lacinia est.
                        Quisque ut lectus consequat, venenatis eros et, commodo risus. Nullam sit amet laoreet elit.
                        Suspendisse non magna a velit efficitur. </p>
                    <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab qui impedit, libero illo
                        quia sequi quibusdam iure. Error minus quod reprehenderit quae dolor velit soluta animi
                        voluptate dicta enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident!</p>
                   <Link to="#url" className="btn btn-primary btn-style mt-md-5 mt-4">Discover More</Link>
                </div>
                <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                    <div className="call-grids-w3 d-grid">
                        <div className="grids-1 box-wrap">
                           <Link to="#more" className="icon"><span className="fa fa-certificate"></span></Link>
                            <h4><Link  to="#feature" className="title-head">Global Certificate</Link></h4>
                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet laoreet.</p>
                        </div>
                        <div className="grids-1 box-wrap">
                           <Link to="#more" className="icon"><span className="fa fa-book"></span></Link>
                            <h4><Link  to="#feature" className="title-head">Books & Library</Link></h4>
                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.</p>
                        </div>
                        <div className="grids-1 box-wrap">
                           <Link to="#more" className="icon"><span className="fa fa-trophy"></span></Link>
                            <h4><Link  to="#feature" className="title-head">Scholarship</Link></h4>
                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.</p>
                        </div>
                        <div className="grids-1 box-wrap">
                           <Link to="#more" className="icon"><span className="fa fa-graduation-cap"></span></Link>
                            <h4><Link  to="#feature" className="title-head">Alumni Support</Link></h4>
                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="w3l-homeblock3 py-5">
    <div className="container py-lg-5 py-md-4 py-2">
        <h5 className="title-small text-center mb-1">From the news</h5>
        <h3 className="title-big text-center mb-sm-5 mb-4">Latest <span>News</span></h3>
        <div className="row top-pics">
            <div className="col-md-6">
                <div className="top-pic1">
                    <div className="card-body blog-details">
                       <Link to="#blog-single" className="blog-desc">Enhance your educational skills and also experience with best online courses
                        </Link>
                        <div className="author align-items-center">
                            <img src="OnlineCoursesTemplate/assets/images/team1.jpg" alt="" className="img-fluid rounded-circle" />
                            <ul className="blog-meta">
                                <li>
                                   <Link to="#author">Isabella ava</Link>
                                </li>
                                <li className="meta-item blog-lesson">
                                    <span className="meta-value"> Nov 19, 2020 </span>. <span className="meta-value ml-2"><span
                                            className="fa fa-clock-o"></span> 1 min</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4">
                <div className="top-pic2">
                    <div className="card-body blog-details">
                       <Link to="#blog-single" className="blog-desc">Be more productive to be more Successful. Take your first jouney
                        </Link>
                        <div className="author align-items-center">
                            <img src="OnlineCoursesTemplate/assets/images/team2.jpg" alt="" className="img-fluid rounded-circle" />
                            <ul className="blog-meta">
                                <li>
                                   <Link to="#author">Charlotte mia</Link>
                                </li>
                                <li className="meta-item blog-lesson">
                                    <span className="meta-value"> Nov 19, 2020 </span>. <span className="meta-value ml-2"><span
                                            className="fa fa-clock-o"></span> 1 min</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="top-pic3">
                        <div className="card-body blog-details">
                           <Link to="#blog-single" className="blog-desc"> Our self improvement courses are more effective. Start leaarning online
                            </Link>
                            <div className="author align-items-center">
                                <img src="OnlineCoursesTemplate/assets/images/team3.jpg" alt="" className="img-fluid rounded-circle" />
                                <ul className="blog-meta">
                                    <li>
                                       <Link to="#author">Elizabeth</Link>
                                    </li>
                                    <li className="meta-item blog-lesson">
                                        <span className="meta-value"> Nov 19, 2020 </span>.<span
                                            className="meta-value ml-2"><span className="fa fa-clock-o"></span> 1 min</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-md-5 mt-4 text-more text-center">
           <Link to="blog.html">View All Posts <span className="pl-2 fa fa-long-arrow-right"></span></Link>
        </div>
    </div>
</div>
{/* middle */}
    <div className="middle py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="welcome-left text-center py-lg-4">
                <h5 className="title-small mb-1">Start learning online</h5>
                <h3 className="title-big">Enhance your skills with best online courses</h3>
               <Link to="#started" className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2">Get started now</Link>
               <Link to="contact.html" className="btn btn-style btn-primary mt-sm-5 mt-4">Contact Us</Link>
            </div>
        </div>
    </div>
{/* //middle */}
    <section className="w3l-team py-5" id="team">
        <div className="call-w3 py-lg-5 py-md-4">
            <div className="container">
                <div className="row main-cont-wthree-2">
                    <div className="col-lg-5 feature-grid-left">
                        <h5 className="title-small mb-1">Experienced professionals</h5>
                        <h3 className="title-big mb-4">Meet our teachers</h3>
                        <p className="text-para">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                            lacinia est.
                            Quisque ut lectus consequat, venenatis eros et, commodo risus. Nullam sit amet laoreet elit.
                            Suspendisse non magna a velit efficitur. </p>
                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab qui impedit,
                            libero illo
                            quia sequi quibusdam iure. Error minus quod reprehenderit quae dolor velit soluta animi
                            voluptate dicta enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident!
                        </p>
                       <Link to="#url" className="btn btn-primary btn-style mt-md-5 mt-4">Discover More</Link>
                    </div>
                    <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="box16">
                                   <Link to="#url"><img src="OnlineCoursesTemplate/assets/images/team1.jpg" alt="" className="img-fluid radius-image" /></Link>
                                    <div className="box-content">
                                        <h3 className="title"><Link  to="#url">James</Link></h3>
                                        <span className="post">Director</span>
                                        <ul className="social">
                                            <li>
                                               <Link to="#" className="facebook">
                                                    <span className="fa fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li>
                                               <Link to="#" className="twitter">
                                                    <span className="fa fa-twitter"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-sm-0 mt-3">
                                <div className="box16">
                                   <Link to="#url"><img src="OnlineCoursesTemplate/assets/images/team2.jpg" alt="" className="img-fluid radius-image" /></Link>
                                    <div className="box-content">
                                        <h3 className="title"><Link  to="#url">Victoria</Link></h3>
                                        <span className="post">Managing Director</span>
                                        <ul className="social">
                                            <li>
                                               <Link to="#" className="facebook">
                                                    <span className="fa fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li>
                                               <Link to="#" className="twitter">
                                                    <span className="fa fa-twitter"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-lg-4 mt-3">
                                <div className="box16">
                                   <Link to="#url"><img src="OnlineCoursesTemplate/assets/images/team3.jpg" alt="" className="img-fluid radius-image" /></Link>
                                    <div className="box-content">
                                        <h3 className="title"><Link  to="#url">Isabella</Link></h3>
                                        <span className="post">Teacher</span>
                                        <ul className="social">
                                            <li>
                                               <Link to="#" className="facebook">
                                                    <span className="fa fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li>
                                               <Link to="#" className="twitter">
                                                    <span className="fa fa-twitter"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-lg-4 mt-3">
                                <div className="box16">
                                   <Link to="#url"><img src="OnlineCoursesTemplate/assets/images/team4.jpg" alt="" className="img-fluid radius-image" /></Link>
                                    <div className="box-content">
                                        <h3 className="title"><Link  to="#url">Elizabeth</Link></h3>
                                        <span className="post">Teacher</span>
                                        <ul className="social">
                                            <li>
                                               <Link to="#" className="facebook">
                                                    <span className="fa fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li>
                                               <Link to="#" className="twitter">
                                                    <span className="fa fa-twitter"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                    </div>
            
    </section>
{/* testimonials */}
<section className="w3l-testimonials" id="clients">
    {/* /grids */}
    <div className="cusrtomer-layout py-5">
        <div className="container py-lg-4 py-md-3 pb-lg-0">

            <h5 className="title-small text-center mb-1">Testimonials</h5>
            <h3 className="title-big text-center mb-sm-5 mb-4">Happy Clients & Feedbacks</h3>
            {/* /grids */}
            <div className="testimonial-width">
                <div id="owl-demo1" className="owl-two owl-carousel owl-theme">
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial">
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                        laudantium
                                        voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                        Dolores molestias adipisci dolo amet!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="OnlineCoursesTemplate/assets/images/team1.jpg" className="img-fluid"
                                            alt="client-img" />
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>John wilson</h3>
                                        <p className="indentity">Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial">
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                        laudantium
                                        voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                        Dolores molestias adipisci dolo amet!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="OnlineCoursesTemplate/assets/images/team2.jpg" className="img-fluid"
                                            alt="client-img" />
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Julia sakura</h3>
                                        <p className="indentity">Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial">
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                        laudantium
                                        voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                        Dolores molestias adipisci dolo amet!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="OnlineCoursesTemplate/assets/images/team3.jpg" className="img-fluid"
                                            alt="client-img"/>
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Roy Linderson</h3>
                                        <p className="indentity">Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial">
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                        laudantium
                                        voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                        Dolores molestias adipisci dolo amet!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="OnlineCoursesTemplate/assets/images/team4.jpg" className="img-fluid"
                                            alt="client-img" />
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Mike Thyson</h3>
                                        <p className="indentity">Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial">
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                        laudantium
                                        voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                        Dolores molestias adipisci dolo amet!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="OnlineCoursesTemplate/assets/images/team2.jpg" className="img-fluid"
                                            alt="client-img"/>
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Laura gill</h3>
                                        <p className="indentity">Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial">
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                        laudantium
                                        voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                        Dolores molestias adipisci dolo amet!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="OnlineCoursesTemplate/assets/images/team3.jpg" className="img-fluid"
                                            alt="client-img"/>
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Smith Johnson</h3>
                                        <p className="indentity">Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial">
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                        laudantium
                                        voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                        Dolores molestias adipisci dolo amet!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="OnlineCoursesTemplate/assets/images/team2.jpg" className="img-fluid"
                                            alt="client-img" />
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Laura gill</h3>
                                        <p className="indentity">Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial">
                                <blockquote>
                                    <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                        laudantium
                                        voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                        Dolores molestias adipisci dolo amet!.</q>
                                </blockquote>
                                <div className="testi-des">
                                    <div className="test-img"><img src="OnlineCoursesTemplate/assets/images/team3.jpg" className="img-fluid"
                                            alt="client-img" />
                                    </div>
                                    <div className="peopl align-self">
                                        <h3>Smith Johnson</h3>
                                        <p className="indentity">Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* /grids */}
    </div>
    {/* //grids */}
</section>
{/* //testimonials */}


<section className="w3l-clients py-5" id="clients">
    <div className="call-w3 py-md-4 py-2">
        <div className="container">
            <div className="company-logos text-center">
                <div className="row logos">
                    <div className="col-lg-2 col-md-3 col-4">
                        <img src="OnlineCoursesTemplate/assets/images/brand1.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4">
                        <img src="OnlineCoursesTemplate/assets/images/brand2.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4">
                        <img src="OnlineCoursesTemplate/assets/images/brand3.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                        <img src="OnlineCoursesTemplate/assets/images/brand4.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                        <img src="OnlineCoursesTemplate/assets/images/brand5.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                        <img src="OnlineCoursesTemplate/assets/images/brand6.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* footer */}
{/* <Footer /> */}
{/* //footer */}
    </>
    )
}

export default Home
