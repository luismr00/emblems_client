import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Account from "./pages/Account";
import Players from "./pages/Players";
import PlayerSummary from "./pages/PlayerSummary";
import Events from "./pages/Events";
import News from "./pages/News";
import Melee from "./pages/games/Melee";
import Ultimate from "./pages/games/Ultimate";
import EventDrafts from "./pages/fantasy/EventDrafts";
import SeasonRosters from "./pages/fantasy/SeasonRosters";
import CreditMoneyExchange from "./pages/emblems/CreditMoneyExchange";
import Wallet from "./pages/emblems/Wallet";
import TrendsAndInsights from "./pages/emblems/TrendsAndInsights";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Register2 from "./pages/Register2";
import ListviewAll from "./pages/listview/ListviewAll";
import ListviewPlayers from "./pages/listview/ListviewPlayers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registernext" element={<Register2 />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account/manage" element={<Account />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/player-summary/:id" element={<PlayerSummary />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/games/melee" element={<Melee />} />
        <Route path="/games/ultimate" element={<Ultimate />} />
        <Route path="/fantasy/event-drafts" element={<EventDrafts />} />
        <Route path="/fantasy/season-roster" element={<SeasonRosters />} />
        <Route path="/emblems/credit-money-exchange" element={<CreditMoneyExchange />} />
        <Route path="/emblems/wallet" element={<Wallet />} />
        <Route path="/emblems/trends-and-insights" element={<TrendsAndInsights />} />
        <Route path="/listview/all" element={<ListviewAll />} />
        <Route path="/listview/players" element={<ListviewPlayers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
