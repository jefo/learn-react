interface ExerciseCounterProps {
  exerciseName: string;
}

export function ExerciseCounter({ exerciseName }: ExerciseCounterProps) {
  // TODO: Implement state management using useState hook
  // The counter should:
  // 1. Track count starting from 0
  // 2. Provide increment functionality
  // 3. Provide decrement functionality (not going below 0)
  // 4. Provide reset functionality
  
  return (
    <div className="exercise-counter">
      <h3>{exerciseName}</h3>
      {/* TODO: Implement the counter UI with:
          - Display for current count
          - Increment button
          - Decrement button (should be disabled when count is 0)
          - Reset button
      */}
    </div>
  );
}
