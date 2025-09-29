import AppRoutes from "./routes/AppRoutes"
import Suspense from "./shared/fallback/SuspenseContainer"

function App() {
  return (
    <Suspense>
      <AppRoutes />
    </Suspense>
  )
}

export default App
