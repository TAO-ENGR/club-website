import type { EventType } from "@/lib/types"

export default function Event({date, startTime, endTime, title, desc} : EventType){
    return <div className="w-[100%]">
    <div className="flex items-center px-4 py-2">
      <span className="inline-block mr-2 text-4xl">
        📚
      </span>
      <div className="text-sm">
        <div className="font-bold text-gray-800">{date + " // " + startTime + " - " + endTime}</div>
      </div>
    </div>
    <div className="px-4 py-2">
      <p className="text-gray-800">{title}</p>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
  
}