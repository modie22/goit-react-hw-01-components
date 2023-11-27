import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.list}>
    <thead>
      <tr className={css.item}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tr key={id}>
            <td className={css.element}>{type}</td>
            <td className={css.element}>{amount}</td>
            <td className={css.element}>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}
TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };