import React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from "@/components/ui/pagination"

interface PaginationComponentProps {
  page: number
  totalPages: number
  setPage: (page: number) => void
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  page,
  totalPages,
  setPage,
}) => {
  return (
    <Pagination className="mt-4">
      <PaginationContent className="flex gap-2">
        <PaginationItem>
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            className="px-3 py-1 rounded border border-gray-400 bg-white text-black hover:bg-slate-200"
          >
            &lt;
          </button>
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((num) => {
            if (num === 1 || num === totalPages) return true
            if (Math.abs(num - page) <= 1) return true
            return false
          })
          .map((num, idx, arr) => {
            const prev = arr[idx - 1]
            const showEllipsis = prev && num - prev > 1

            return (
              <React.Fragment key={num}>
                {showEllipsis && (
                  <PaginationEllipsis className="px-3 py-1 text-gray-500" />
                )}
                <PaginationItem>
                  <button
                    onClick={() => setPage(num)}
                    className={`px-3 py-1 rounded border ${
                      page === num
                        ? "bg-slate-500 text-white border-black-600" // Active qizil
                        : "bg-white text-black border-gray-400 hover:bg-slate-200"
                    }`}
                  >
                    {num}
                  </button>
                </PaginationItem>
              </React.Fragment>
            )
          })}

        <PaginationItem>
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            className="px-3 py-1 rounded border border-gray-400 bg-white text-black hover:bg-slate-200"
          >
            &gt;
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationComponent
