import TableContent from "../TableContent";

export default function Table({ queries }) {
  const tables = queries.map((query) => (
    <TableContent key={query.id} data={query} />
  ));

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
        <tbody>{tables}</tbody>
      </table>
    </div>
  );
}
