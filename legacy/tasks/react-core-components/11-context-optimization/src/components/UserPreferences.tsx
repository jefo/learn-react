import { useApp } from '../context/AppContext';

// Компонент перерендеривается при любом изменении контекста
export function UserPreferences() {
  console.log('UserPreferences render');
  const { settings, updateSettings, theme } = useApp();

  const handleNotificationChange = () => {
    updateSettings({ notifications: !settings.notifications });
  };

  const handleMarketingChange = () => {
    updateSettings({
      emailPreferences: {
        ...settings.emailPreferences,
        marketing: !settings.emailPreferences.marketing
      }
    });
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({
      accessibility: {
        ...settings.accessibility,
        fontSize: Number(e.target.value)
      }
    });
  };

  return (
    <div
      className="preferences"
      style={{
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      <h2>User Preferences</h2>
      
      <div className="preference-group">
        <label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={handleNotificationChange}
          />
          Enable Notifications
        </label>
      </div>

      <div className="preference-group">
        <label>
          <input
            type="checkbox"
            checked={settings.emailPreferences.marketing}
            onChange={handleMarketingChange}
          />
          Receive Marketing Emails
        </label>
      </div>

      <div className="preference-group">
        <label>
          Font Size: {settings.accessibility.fontSize}px
          <input
            type="range"
            min="12"
            max="24"
            value={settings.accessibility.fontSize}
            onChange={handleFontSizeChange}
          />
        </label>
      </div>

      <div className="current-settings">
        <h3>Current Settings:</h3>
        <pre>
          {JSON.stringify(settings, null, 2)}
        </pre>
      </div>
    </div>
  );
}
