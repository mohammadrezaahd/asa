const SampleTemplate = () => {
  const handleCreateTable = async () => {
    try {
      const response = await fetch("/api/createTable", {
        method: "POST",
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
      } else {
        console.error(data.error);
      }
    } catch (err) {
      console.error("Error creating table", err);
    }
  };

  const handleConnectionCheck = async () => {
    const res = await fetch("/api/connectionCheck");
    const data = await res.json();
    if (res.ok) {
      console.log(data.message);
    } else {
      console.log(data.error);
    }
  };

  return (
    <>
      <div>
        <h1>HELLO</h1>
      </div>
      <div className="border">
        <button onClick={handleCreateTable}>CLICK FOR CREATE TABLE</button>
        <button className="bg-red-400" onClick={handleConnectionCheck}>
          CLICK FOR CHECK CONNECTION
        </button>
      </div>
    </>
  );
};

export default SampleTemplate;
