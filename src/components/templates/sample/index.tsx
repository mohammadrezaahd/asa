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

  return (
    <>
      <div>
        <h1>HELLO</h1>
      </div>
      <div className="border">
        <button onClick={handleCreateTable}>CLICK FOR CREATE TABLE</button>
      </div>
    </>
  );
};

export default SampleTemplate;
