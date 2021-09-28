import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { AboutPage } from '../pages/AboutPage'
import { CategoriesPage } from '../pages/CategoriesPage'
import { ContactPage } from '../pages/ContactPage'
import DashboardPage from '../pages/DashboardPage'
import { HomePage } from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import PaymentsPage from '../pages/PaymentsPage'
import { ProfilePage } from '../pages/ProfilePage'
import RegisterPage from '../pages/RegisterPage'
import { PrivateRoute } from './PrivateRoute'

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
        
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />

        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/payments" component={PaymentsPage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter
