import {
  MainPage,
  Header,
  TeamPage,
  LoginPage,
  FAQPage,
  CaruselHintPage,
  Footer,
} from "components";

import s from "./app.module.scss";

export const App = () => {
  return (
    <div className={s.App}>
      <header className={s.AppHeader}>
        <Header />
      </header>

      <main className={s.AppMain}>
        <MainPage />
        <TeamPage />
        <LoginPage />
        <FAQPage />
        <CaruselHintPage />
        <Footer />
      </main>
    </div>
  );
};
