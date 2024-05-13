/* eslint-disable react/prop-types */
const CurrentActivity = ({ latestSong, latestBook }) => {
  return (
    <div className="flex flex-col gap-2.5 text-white font-primary">
      <p>Currently</p>
      <div>
        <p className="text-sm">
          Listening to {latestSong.name} by {latestSong.artist} and reading{" "}
          {latestBook.title} by {latestBook.author}
        </p>
      </div>
    </div>
  );
};

export default CurrentActivity;
