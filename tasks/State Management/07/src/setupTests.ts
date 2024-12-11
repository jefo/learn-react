import '@testing-library/jest-dom'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

// Очистка после каждого теста
afterEach(() => {
  cleanup()
})

// Создаем мок-сервер
export const server = setupServer(
  // Определяем обработчики для API
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      ])
    )
  }),
  
  rest.get('/api/users/:id', (req, res, ctx) => {
    const { id } = req.params
    return res(
      ctx.status(200),
      ctx.json({
        id: Number(id),
        name: 'John Doe',
        email: 'john@example.com',
        details: { age: 30, location: 'New York' }
      })
    )
  }),

  rest.put('/api/users/:id', async (req, res, ctx) => {
    const { id } = req.params
    const body = await req.json()
    return res(
      ctx.status(200),
      ctx.json({ ...body, id: Number(id) })
    )
  })
)

// Запускаем сервер перед всеми тестами
beforeAll(() => server.listen())

// Сбрасываем обработчики между тестами
afterEach(() => server.resetHandlers())

// Закрываем сервер после всех тестов
afterAll(() => server.close())
