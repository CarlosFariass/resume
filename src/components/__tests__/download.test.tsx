import { render, screen } from '@testing-library/react'
import Download from '../Download'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'downloadBtn') return 'Download CV'
      return key
    },
    i18n: {
      language: 'en' 
    }
  })
}))

describe('Download component', () => {
  it('deve renderizar o botão de download com o texto correto', () => {
    render(<Download />)

    const link = screen.getByRole('link', { name: /download cv/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/resume-carlos-farias-en.pdf')
    expect(link).toHaveAttribute('download', 'carlos-farias-resume-en.pdf')
  })
})
