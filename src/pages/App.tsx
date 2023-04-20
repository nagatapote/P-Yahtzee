import * as styles from './App.css'
import { Link } from 'react-router-dom'

export const App = () => {
  return (
    <div className={styles.template}>
      <h1>遊ぶボードゲームを選ぶ</h1>
      <p>
        <Link to="/yahtzee">ヤッツィー</Link>
      </p>
    </div>
  )
}
