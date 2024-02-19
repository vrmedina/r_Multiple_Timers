import { Timers } from "./timers/pages/Timers"
import { Header } from "./ui/components/Header"

export const MultipleTimersApp = () => {
  return (
    <>
        <Header />
        {/* <Sidebar /> */}
        <div className="container mx-auto">
            <Timers />
        </div>
    </>
  )
}