import Bio from "./components/Bio";
import ContactForm from "./components/ContactForm";
import CurrentActivity from "./components/CurrentActivity";
import Header from "./components/Header";
import ProjectList from "./components/ProjectsList";
const App = () => {
  const latestSong = {
    name: "Eyeless",
    artist: "Slipknot",
  };

  const latestBook = {
    title: "Atomic Habits",
    author: "James Clear",
  };

  return (
    <div className="flex flex-row justify-between min-h-full p-0 m-0 border-2 border-white grow">
      <div className="flex flex-col gap-5 md:w-2/5 md:p-10">
        <Bio />
        <CurrentActivity latestSong={latestSong} latestBook={latestBook} />
        <ProjectList />
        <ContactForm />
      </div>
      <aside className="flex flex-col md:w-max md:px-5 md:py-10">
        <Header />
      </aside>
    </div>
  );
};

export default App;
