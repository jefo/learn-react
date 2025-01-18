export function Sidebar() {
  // Этот компонент не использует тему, но все равно ререндерится
  console.log('Rendering Sidebar');
  
  return (
    <aside style={{ padding: '1rem' }}>
      <h2>Sidebar</h2>
      <p>This component doesn't use theme but still rerenders.</p>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </aside>
  );
}
