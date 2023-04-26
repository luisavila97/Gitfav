import TableContent from "../TableContent";

export default function Table({ queries }) {
  return (
    <div className="content">
      <table>
        <thead className="title">
          <tr>
            <th>User</th>
            <th>Repositories</th>
            <th>Followers</th>
          </tr>
        </thead>

        <tbody>
          {queries.map((query) => (
            <TableContent key={query.id} data={query} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
