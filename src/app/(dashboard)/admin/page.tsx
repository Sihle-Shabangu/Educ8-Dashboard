import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
        <div className="w-full lg:w-2/3">
          {/* User Cards */}
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="students"/>
            <UserCard type="teachers"/>
            <UserCard type="parents"/>
            <UserCard type="staffs"/>
          </div>
          {/* middle charts */}
          <div className="flex gap-4 flex-col lg:flex-row">
            {/* count chart */}
            <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
            </div>
            {/* attendance chart */}
            <div className="w-full lg:w-2/3 h-[450px]">

            </div>
          </div>
          {/* bottom charts */}
          <div className="">

          </div>
        </div>
      {/* Right */}
        <div className="w-full lg:w-1/3">
          right
        </div>
    </div>
  )
}

export default Adminpage
