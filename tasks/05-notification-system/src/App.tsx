import { useCallback } from 'react';
import { NotificationProvider, useNotifications } from './context/NotificationContext';
import { NotificationContainer } from './components/NotificationContainer';
import './App.css';

/**
 * Демонстрационный компонент
 * 
 * Подумайте:
 * 1. Как организовать демонстрацию функционала?
 * 2. Какие примеры показать пользователю?
 * 3. Как сделать интерфейс понятным?
 */
function Demo() {
  const { success, error, warning, info } = useNotifications();

  /**
   * Примеры использования
   * 
   * Изучите:
   * 1. Как работают разные типы уведомлений?
   * 2. Когда использовать действия?
   * 3. Как настраивать длительность?
   */
  const showSuccess = useCallback(() => {
    success({
      title: 'Успешно!',
      message: 'Операция выполнена успешно.',
      duration: 3000
    });
  }, [success]);

  const showError = useCallback(() => {
    error({
      title: 'Ошибка!',
      message: 'Что-то пошло не так.',
      duration: 0,
      actions: [
        {
          label: 'Повторить',
          onClick: () => console.log('Retry clicked')
        }
      ]
    });
  }, [error]);

  const showWarning = useCallback(() => {
    warning({
      title: 'Внимание!',
      message: 'Это предупреждение.',
      duration: 5000
    });
  }, [warning]);

  const showInfo = useCallback(() => {
    info({
      message: 'Это информационное сообщение.',
      duration: 4000
    });
  }, [info]);

  return (
    <div className="demo">
      <h1>Система уведомлений</h1>
      
      <div className="demo-buttons">
        <button onClick={showSuccess}>
          Показать success
        </button>
        
        <button onClick={showError}>
          Показать error
        </button>
        
        <button onClick={showWarning}>
          Показать warning
        </button>
        
        <button onClick={showInfo}>
          Показать info
        </button>
      </div>
    </div>
  );
}

/**
 * Главный компонент приложения
 * 
 * Подумайте:
 * 1. Где разместить провайдер?
 * 2. Какие настройки передать?
 * 3. Как организовать демо?
 */
function App() {
  return (
    <NotificationProvider maxNotifications={5} defaultDuration={5000}>
      <Demo />
      <NotificationContainer position="top-right" />
    </NotificationProvider>
  );
}

export default App;
