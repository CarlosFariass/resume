import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import LanguageSwitcher from '../LanguageSwitcher'

const changeLanguageMock = jest.fn(() => Promise.resolve())

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: changeLanguageMock,
    },
  }),
}))

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
    jest.clearAllMocks()
  })

  it('deve renderizar os botões de idiomas EN e PT', () => {
    render(<LanguageSwitcher />)
    expect(screen.getByText('EN')).toBeInTheDocument()
    expect(screen.getByText('PT')).toBeInTheDocument()
  })

  it('deve mostrar o texto de carregando ao trocar de idioma', async () => {
    render(<LanguageSwitcher />)

    await act(async () => {
      fireEvent.click(screen.getByText('EN'))
    })

    expect(screen.getByTestId('loading-text')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(300)
    })

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
  })
})
