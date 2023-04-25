export default function TableContent({ data }) {
  return (
    <tr>
      <td className="profile">
        <a target="_blank" href={data.html_url}>
          <img src={data.avatar_url} />
          <h2>/{data.login}</h2>
        </a>
      </td>
      <td>{data.public_repos}</td>
      <td>{data.followers}</td>
    </tr>
  );
}
