const successMessage = `Tables created successfully`;

const schema = `
CREATE TABLE IF NOT EXISTS Items (
  id text NOT NULL PRIMARY KEY,
  name text NOT NULL,
  date_created text NOT NULL,
  date_updated text NOT NULL
);
`

module.exports = async (dbExec) => {
  try {
    await dbExec(schema);
    console.log(successMessage);
  } catch (error) {
    console.log("Error:", error)
  }
}