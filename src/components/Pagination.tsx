import Image from 'next/image'
import React from 'react'

interface PaginationProps {
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void,
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePageClick = (page: number) => {
    onPageChange(page)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 0}
        className="p-2 border rounded disabled:opacity-50"
      >
        <Image src="/assets/arrowLeftGray.svg" alt="arrow" width={10} height={20} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index)}
          className={`flex items-center justify-center p-2 border w-10 h-10 rounded-full ${index === currentPage ? 'bg-blue-500 text-white' : ''}`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
        className="p-2 border rounded disabled:opacity-50"
      >
        <Image src="/assets/arrowRightBlue.svg" alt="arrow" width={10} height={20} />
      </button>
    </div>
  )
}

export default Pagination
