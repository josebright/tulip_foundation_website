import { combineReducers } from 'redux';
import Project from './projectsReducer';
import Team from './teamReducer';
import Partner from './partnersReducer';
import Media from './mediaReducer';
import Subscribe from './subscribeReducer';
import Donation from './donationReducer';
import Summit from './summitReducer';
import Volunteer from './volunteersReducer';
import Event from './EventReducer';
import Press from './pressReducer';
import Audience from './audiencesReducer';
import Videos from './summitEventReducer';
import Consultation from './ConsultationrReducer';
import Organize from './OrganizeReducer';
import Hero from './HeroReducer';
import Categories from './CategoriesReducer';
import Countries from './CountryReducer';
import Partnership from './PartnershipReducer';

const rootReducer = combineReducers({
  Projects: Project,
  getTeam: Team,
  Partners: Partner,
  getMedias: Media,
  Subscribe: Subscribe,
  Donation: Donation,
  Summit: Summit,
  Volunteer: Volunteer,
  Event: Event,
  Press: Press,
  Audience: Audience,
  Videos: Videos,
  Consultation: Consultation,
  Organize: Organize,
  Hero: Hero,
  Categories: Categories,
  Countries: Countries,
  Partnership: Partnership,
});
export default rootReducer;
