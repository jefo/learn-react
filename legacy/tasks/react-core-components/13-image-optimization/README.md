# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})

# Оптимизация изображений в React

## Теория

При работе с изображениями в React важно учитывать несколько аспектов производительности:
1. Медленная загрузка больших изображений
2. Отсутствие плейсхолдеров во время загрузки
3. Загрузка всех изображений сразу
4. Плохой UX при загрузке и отображении

Для решения этих проблем используются следующие техники:
- Ленивая загрузка изображений
- Прогрессивная загрузка с плейсхолдерами
- Оптимизация размеров изображений
- Предварительная загрузка важных изображений

## Задача

В этом проекте реализована галерея изображений с сеткой и модальным окном. Однако есть несколько проблем с производительностью:

1. Все изображения загружаются сразу при монтировании
2. Отсутствуют плейсхолдеры во время загрузки
3. Нет оптимизации размеров изображений
4. Плохой UX при загрузке и просмотре

### Требования

1. Внедрите ленивую загрузку изображений:
   - Используйте IntersectionObserver
   - Добавьте loading="lazy" для изображений
   - Реализуйте постепенную загрузку

2. Добавьте плейсхолдеры с blurhash:
   - Показывайте размытую версию во время загрузки
   - Реализуйте плавный переход
   - Добавьте анимацию загрузки

3. Оптимизируйте размеры изображений:
   - Используйте разные размеры для сетки и модального окна
   - Добавьте srcset для разных разрешений
   - Оптимизируйте качество изображений

4. Улучшите UX:
   - Добавьте анимации при открытии/закрытии
   - Реализуйте предварительную загрузку
   - Добавьте индикаторы загрузки

### Подсказки

1. Используйте react-intersection-observer:
   ```typescript
   import { useInView } from 'react-intersection-observer';
   
   const Image = ({ src }) => {
     const { ref, inView } = useInView({
       triggerOnce: true,
       threshold: 0.1
     });
     
     return (
       <div ref={ref}>
         {inView && <img src={src} loading="lazy" />}
       </div>
     );
   };
   ```

2. Реализуйте blurhash:
   ```typescript
   import { Blurhash } from 'react-blurhash';
   
   const Image = ({ src, hash }) => {
     const [loaded, setLoaded] = useState(false);
     
     return (
       <div>
         {!loaded && (
           <Blurhash
             hash={hash}
             width={400}
             height={300}
           />
         )}
         <img
           src={src}
           onLoad={() => setLoaded(true)}
           style={{ opacity: loaded ? 1 : 0 }}
         />
       </div>
     );
   };
   ```

3. Оптимизируйте размеры:
   ```html
   <img
     src="small.jpg"
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 900w"
     sizes="(max-width: 320px) 280px,
            (max-width: 640px) 580px,
            880px"
     loading="lazy"
   />
   ```

## Критерии приемки

1. Галерея должна быстро загружаться даже с медленным интернетом
2. Все изображения должны иметь плейсхолдеры
3. Должны быть реализованы все требования по UX
4. Код должен быть чистым и хорошо организованным
