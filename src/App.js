import React from 'react';
import {connect} from 'react-redux';
class App extends React.Component {


  componentDidMount(){
    let baseUrl = window.location.origin;
    this.loadCss(baseUrl+'/assets/css/main.css')
    this.loadJs(baseUrl+'/assets/js/jquery.min.js');
    this.loadJs(baseUrl+'/assets/js/jquery.scrolly.min.js');
    this.loadJs(baseUrl+'/assets/js/skel.min.js');
    this.loadJs(baseUrl+'/assets/js/util.js');
    this.loadJs(baseUrl+'/assets/js/main.js');
    console.log(this.props.userStatus.isLogin);
  }

  loadJs(url){
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }

  loadCss(url){
    const sheet = document.createElement('link');
    sheet.href=url;
    sheet.async =true;
    sheet.rel='stylesheet';
    sheet.type="text/css";
    document.head.appendChild(sheet);
  }

  render(){
    return (
      <div >
          <header id="header">
              <h1><a href="#">Broadcast <span>by TEMPLATED</span></a></h1>
              <a href="#menu">Menu</a>
        </header>

        <nav id="menu">
            <ul className="links">
              <li><a href="index.html">Home</a></li>
              <li><a href="generic.html">Generic</a></li>
              <li><a href="elements.html">Elements</a></li>
            </ul>
			  </nav>

        <section id="banner" data-video="images/banner">
            <div className="inner">
              <header>
                <h1>This is Broadcast</h1>
                <p>Morbi eu purus eget urna interdum dignissim sed consectetur augue<br />
                vivamus vitae libero in nulla iaculis eleifend non sit amet nulla.</p>
              </header>
              <a href="#main" className="button big alt scrolly">Dignissim</a>
            </div>
				</section>

        <div id="main">
				<section className="wrapper style1">
            <div className="inner">
              <header className="align-center">
                <h2>Nam eu nisi non ante sodale</h2>
                <p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
              </header>
                <div className="flex flex-2">
                  <div className="video col">
                    <div className="image fit">
                      <img src="assets/images/pic07.jpg" alt="" />
                      <div className="arrow">
                        <div className="icon fa-play"></div>
                      </div>
                    </div>
                    <p className="caption">
                      Pellentesque at nunc vitae urna suscipit mollis nec in arcu
                    </p>
                    <a href="generic.html" className="link"><span>Click Me</span></a>
                  </div>
                  <div className="video col">
                    <div className="image fit">
                      <img src="assets/images/pic08.jpg" alt="" />
                      <div className="arrow">
                        <div className="icon fa-play"></div>
                      </div>
                    </div>
                    <p className="caption">
                      Morbi mattis ligula ut eros ipsum aliquam iaculis dictum suscipit
                    </p>
                    <a href="generic.html" className="link"><span>Click Me</span></a>
                  </div>
                </div>
            </div>
				</section>
        
                
				<section className="wrapper style2">
					<div className="inner">
						<header>
							<h2>Etiam veroeros lorem</h2>
							<p>Fusce fringilla enim sit amet lectus sollicitudin, eu tincidunt odio semper.</p>
						</header>
							<div className="flex flex-tabs">
								<ul className="tab-list">
									<li><a href="#" data-tab="tab-1" className="active">Duis vestibulum tellus</a></li>
									<li><a href="#" data-tab="tab-2">Quam tempus sodales ipsum</a></li>
									<li><a href="#" data-tab="tab-3">Donec faucibus risus cursus</a></li>
								</ul>
								<div className="tabs">

										<div className="tab tab-1 flex flex-3 active">
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic01.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic02.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic03.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic04.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic05.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic06.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
										</div>

										<div className="tab tab-2 flex flex-3">
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic06.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic05.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic04.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic03.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
											
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic02.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
											
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic01.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
										</div>

										<div className="tab tab-3 flex flex-3">
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic03.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
											
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic02.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
											
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic01.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
											
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic06.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic05.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
												<div className="video col">
													<div className="image fit">
														<img src="assets/images/pic04.jpg" alt="" />
														<div className="arrow">
															<div className="icon fa-play"></div>
														</div>
													</div>
													<a href="generic.html" className="link"><span>Click Me</span></a>
												</div>
										</div>

								</div>
							</div>
					</div>
				</section>
      
        
        <section className="wrapper ">
					<div className="inner">
						<header className="align-center">
							<h2>Aliquam ipsum purus dolor</h2>
							<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
						</header>

							<div className="flex flex-3">
								<div className="video col">
									<div className="image fit">
										<img src="assets/images/pic09.jpg" alt="" />
										<div className="arrow">
											<div className="icon fa-play"></div>
										</div>
									</div>
									<p className="caption">
										Cras eget lacus sed mauris scelerisque tincidunt
									</p>
									<a href="generic.html" className="link"><span>Click Me</span></a>
								</div>
								<div className="video col">
									<div className="image fit">
										<img src="assets/images/pic10.jpg" alt="" />
										<div className="arrow">
											<div className="icon fa-play"></div>
										</div>
									</div>
									<p className="caption">
										Vivamus vulputate lacus non massa auctor lobortis
									</p>
									<a href="generic.html" className="link"><span>Click Me</span></a>
								</div>
								<div className="video col">
									<div className="image fit">
										<img src="assets/images/pic11.jpg" alt="" />
										<div className="arrow">
											<div className="icon fa-play"></div>
										</div>
									</div>
									<p className="caption">
										Nam eu nisi non ante sodales interdum a vitae neque
									</p>
									<a href="generic.html" className="link"><span>Click Me</span></a>
								</div>
							</div>
					</div>
				</section>
        </div>

        <footer id="footer">
				<div className="inner">
					<div className="flex flex-3">
						<div className="col">
							<h3>Vestibullum</h3>
							<ul className="alt">
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
								<li><a href="#">Vis id faucibus montes tempor</a></li>
								<li><a href="#">Massa amet lobortis vel.</a></li>
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
							</ul>
						</div>
						<div className="col">
							<h3>Lobortis</h3>
							<ul className="alt">
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
								<li><a href="#">Vis id faucibus montes tempor</a></li>
								<li><a href="#">Massa amet lobortis vel.</a></li>
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
							</ul>
						</div>
						<div className="col">
							<h3>Accumsan</h3>
							<ul className="alt">
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
								<li><a href="#">Vis id faucibus montes tempor</a></li>
								<li><a href="#">Massa amet lobortis vel.</a></li>
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyright">
					<ul className="icons">
						<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon fa-snapchat"><span className="label">Snapchat</span></a></li>
					</ul>
					&copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com">Coverr</a>. Video: <a href="https://coverr.co">Coverr</a>.
				</div>
			</footer>
      
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    userStatus:state.UserIsLogin
  }
}
export default connect(mapStateToProps,null)(App);

