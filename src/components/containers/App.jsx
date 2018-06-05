import React from 'react'; 
import {getGallerys, getBlogs} from '../../actions/AppActions.js';

//LAYOUT
import Sidemenu from '../layouts/sidemenu.jsx';
import Header from '../layouts/header.jsx';
import Footer from '../layouts/footer.jsx';


//DASHBOARD
import Dashboard from '../pages/dash/dashboard.jsx';
import Applications from '../pages/dash/applications.jsx';
import Profile from '../pages/dash/profile.jsx';
import VideoUpload from '../pages/dash/videoUpload.jsx';
import ImageUpload from '../pages/dash/imageUpload.jsx';
import BlogUpload from '../pages/dash/blogUpload.jsx';
import AddUsers from '../pages/dash/addUsers.jsx';


//PAGES
import Welcome from '../pages/welcome.jsx';
import Register from '../pages/register.jsx';
import Images from '../pages/images.jsx';
import Videos from '../pages/videos.jsx';
import Blog from '../pages/blog.jsx';
import Gallery from '../pages/gallery.jsx';
import Mentors from '../pages/mentors.jsx';
import BecomeAMentor from '../pages/becomeAMentor.jsx';
import Members from '../pages/members.jsx';
import Startups from '../pages/startups.jsx';
import About from '../pages/about.jsx';
import Partners from '../pages/partners.jsx';
import Contact from '../pages/contact.jsx';
import AppStore from '../../store/AppStore.js';


export default class App extends React.Component {

   constructor(props) {
  	super(props)
    this.state = AppStore.getStore();
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState(AppStore.getStore());
  }

  pageAccess() {
    if (this.state.user.LoggedIn == "true") { 
      return
    }else {
      location.hash = "#/dashboard"
    }
  }

  componentDidMount() {
    // getGallerys();
    // getBlogs();
  	AppStore.addListener(this._onChange);    
  }

  componentWillUnmount() {
    AppStore.removeListener(this._onChange)
  }

  render() {
  	var body;
    var menu;
    var footer;

  	switch(this.props.location) {
      case '#/dashboard/addUsers':
        this.pageAccess()
        menu = <Header />
        body = <AddUsers />
        break
      case '#/dashboard/blogUpload':
        this.pageAccess()
        menu = <Header />
        body = <BlogUpload />
        break
      case '#/dashboard/imageUpload':
        this.pageAccess()
        menu = <Header />
        body = <ImageUpload />
        break
      case '#/dashboard/videoUpload':
        this.pageAccess()
        menu = <Header />
        body = <VideoUpload />
        break
      case '#/dashboard/applications/profile':
        this.pageAccess()
        menu = <Header />
        body = <Profile data={this.state.activeApplication} />
        break
      case '#/dashboard/applications':
        this.pageAccess()
        menu = <Header />
        body = <Applications list={this.state.applications} data={this.state.activeApplication} />
        break
      case '#/dashboard':
        body = <Dashboard />
        break
      case '#/partners':
        menu = <Sidemenu />
        body = <Partners />
        footer = <Footer />
        break
      case '#/about':
        menu = <Sidemenu />
        body = <About />
        footer = <Footer />
        break
      case '#/blog':
        menu = <Sidemenu />
        body = <Blog />
        footer = <Footer />
        break
      case '#/startups':
        menu = <Sidemenu />
        body = <Startups />
        footer = <Footer />
        break
      case '#/members':
        menu = <Sidemenu />
        body = <Members />
        footer = <Footer />
        break
      case '#/become-a-mentors':
        menu = <Sidemenu />
        body = <BecomeAMentor />
        footer = <Footer />
        break
      case '#/mentors':
        menu = <Sidemenu />
        body = <Mentors />
        footer = <Footer />
        break
      case '#/contact':
        menu = <Sidemenu />
        body = <Contact />
        footer = <Footer />
        break
      case '#/gallery':
        if (this.state.activeGallery.length == 0) {
          location.hash = "#/images"
        }else {
          menu = <Sidemenu />
          body = <Gallery list={this.state.activeGallery} />
          footer = <Footer />
        }        
        break
      case '#/videos':
        menu = <Sidemenu />
        body = <Videos />
        footer = <Footer />
        break
      case '#/images':
        menu = <Sidemenu />
        body = <Images list={this.state.gallerys}  />
        footer = <Footer />
        break
      case '#/register':
        menu = <Sidemenu />
        body = <Register />
        footer = <Footer />
        break
      case '':
        menu = <Sidemenu />
        body = <Welcome />
        footer = <Footer />
        break
      default:
       return (
          <div>
            <h1>Page not found</h1>
          </div>
        )
    }
    return (
	    <div className="grid">
        {menu}
  			{body}
        {footer}
      </div>
        
    );
  }

}
