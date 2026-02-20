export const WatchOtt = () => {
  let age = 17;

  if (age < 18) {
    return <button>Age Limit Restriction</button>;
  }

  return <button>You can Watch</button>;
};

export const WatchOtt1 = () => {
  let age = 19;

  return (
    <button>
      {age >= 18 ? "Watch Ott" : "Age Limit Restriction"}
    </button>
  );
};

export const WatchOtt2 = () => {
  let age = 2;

  let canWatch = "Below Age";
  if (age >= 18) canWatch = "You can Watch";

  return <button>{canWatch}</button>;
};

export const WatchOtt3 = () => {
  let age = 18;

  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Below Age";
  };

  return <button>{canWatch()}</button>;
};
