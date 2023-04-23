export default function transactionsTable({transions}) {
    return (
        <table class="transaction-history">
            <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transions.map(transion =>
     <tr>
      <td>{transion.type}</td>
      <td>{transion.amount}</td>
      <td>{transion.currency}</td>
    </tr>)}
  </tbody>
</table>
    )
}