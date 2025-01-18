import { useForm } from 'react-hook-form';
import { useState } from 'react';

type Step = 'personal' | 'company' | 'plan' | 'payment';

interface FormData {
  // Personal
  firstName: string;
  lastName: string;
  email: string;
  
  // Company (optional)
  isCompany: boolean;
  companyName?: string;
  vatNumber?: string;
  
  // Plan
  planType: 'basic' | 'pro' | 'enterprise';
  billingCycle: 'monthly' | 'yearly';
  addons: string[];
  
  // Payment
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<Step>('personal');
  const { register, handleSubmit, watch } = useForm<FormData>();

  // Простая навигация без условий
  const nextStep = () => {
    switch (currentStep) {
      case 'personal':
        setCurrentStep('company');
        break;
      case 'company':
        setCurrentStep('plan');
        break;
      case 'plan':
        setCurrentStep('payment');
        break;
    }
  };

  // Нет обработки прерываний
  const prevStep = () => {
    switch (currentStep) {
      case 'company':
        setCurrentStep('personal');
        break;
      case 'plan':
        setCurrentStep('company');
        break;
      case 'payment':
        setCurrentStep('plan');
        break;
    }
  };

  // Рендер шагов без условной логики
  const renderStep = () => {
    switch (currentStep) {
      case 'personal':
        return (
          <>
            <div>
              <label>First Name</label>
              <input {...register('firstName')} placeholder="First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input {...register('lastName')} placeholder="Last Name" />
            </div>
            <div>
              <label>Email</label>
              <input {...register('email')} placeholder="Email" type="email" />
            </div>
          </>
        );

      case 'company':
        return (
          <>
            <div>
              <label>
                <input type="checkbox" {...register('isCompany')} />
                Register as Company
              </label>
            </div>
            {watch('isCompany') && (
              <>
                <div>
                  <label>Company Name</label>
                  <input {...register('companyName')} placeholder="Company Name" />
                </div>
                <div>
                  <label>VAT Number</label>
                  <input {...register('vatNumber')} placeholder="VAT Number" />
                </div>
              </>
            )}
          </>
        );

      case 'plan':
        return (
          <>
            <div>
              <label>Plan Type</label>
              <select {...register('planType')}>
                <option value="basic">Basic</option>
                <option value="pro">Pro</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
            <div>
              <label>Billing Cycle</label>
              <select {...register('billingCycle')}>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div>
              <label>Addons</label>
              <div className="addons">
                <label>
                  <input
                    type="checkbox"
                    value="support"
                    {...register('addons')}
                  />
                  Priority Support
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="storage"
                    {...register('addons')}
                  />
                  Extra Storage
                </label>
              </div>
            </div>
          </>
        );

      case 'payment':
        return (
          <>
            <div>
              <label>Card Number</label>
              <input {...register('cardNumber')} placeholder="Card Number" />
            </div>
            <div>
              <label>Expiry Date</label>
              <input {...register('expiryDate')} placeholder="MM/YY" />
            </div>
            <div>
              <label>CVV</label>
              <input {...register('cvv')} placeholder="CVV" />
            </div>
          </>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <div className="step-content">
        {renderStep()}
      </div>

      <div className="form-navigation">
        {currentStep !== 'personal' && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep !== 'payment' ? (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </div>
    </form>
  );
}
