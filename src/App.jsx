import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-row justify-between border-2 border-white m-0 p-0 min-h-full grow">
      <div className="flex flex-col md:p-14 w-2/5"></div>
      <aside className="flex flex-col md:px-4 md:py-4">
        <Header />
      </aside>
    </div>
  );
};

export default App;
