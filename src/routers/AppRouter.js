import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { AboutPage } from '../pages/AboutPage'
import { CategoriesPage } from '../pages/CategoriesPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProfilePage } from '../pages/ProfilePage'

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/profile/:username" component={ProfilePage} />
        <Route path="/categories" component={CategoriesPage} />
        
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter
