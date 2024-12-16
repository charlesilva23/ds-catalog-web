'use client'

const BackButton = () => {
  const handleBack = () => {
    window.history.back()
  }

  return (
    <button
      onClick={handleBack}
      className="mt-6 flex justify-center"
    >
      VOLTAR
    </button>
  )
}

export default BackButton