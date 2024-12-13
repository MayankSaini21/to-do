import TodoList from '@/components/TodoList'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  )
}

