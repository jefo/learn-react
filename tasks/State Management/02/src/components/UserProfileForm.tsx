export type UserProfile = {
  displayName: string;
  email: string;
  phone: string;
  emailNotifications: boolean;
  smsNotifications: boolean;
};

interface ProfileFormProps {
  onSubmit: (profile: UserProfile) => Promise<void>;
  initialData: UserProfile;
}

export function UserProfileForm({ onSubmit, initialData }: ProfileFormProps) {
  // TODO: Implement state management for form fields
  // Hint: Consider using multiple useState hooks or a single useState with an object

  // TODO: Implement form validation
  // Hint: Track validation state for each field

  // TODO: Implement change tracking
  // Hint: Compare current values with initialData

  return (
    <div className="profile-form">
      <form onSubmit={(e) => {
        e.preventDefault();
        // TODO: Implement form submission
      }}>
        <div className="form-section">
          <h3>Contact Information</h3>
          {/* TODO: Implement contact information fields */}
          {/* Required fields: displayName, email, phone */}
        </div>

        <div className="form-section">
          <h3>Notification Preferences</h3>
          {/* TODO: Implement notification toggles */}
          {/* Fields: emailNotifications, smsNotifications */}
        </div>

        <div className="form-preview">
          <h3>Preview</h3>
          {/* TODO: Show real-time preview of form changes */}
        </div>

        <div className="form-actions">
          {/* TODO: Implement Submit and Reset buttons */}
          {/* Submit should be disabled if form is invalid or unchanged */}
        </div>
      </form>
    </div>
  );
}
