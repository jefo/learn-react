import { useState, useEffect } from 'react';
import { User } from '../types/user';
import { generateUsers, delay } from '../utils/generateData';

// Неоптимизированный список с рендерингом всех элементов
export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof User>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Загрузка данных
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      await delay(1000); // Имитация задержки сети
      const data = generateUsers(10000); // Генерация 10,000 пользователей
      setUsers(data);
      setLoading(false);
    };

    loadUsers();
  }, []);

  // Фильтрация и сортировка всех данных при каждом изменении
  const filteredAndSortedUsers = users
    .filter(user => {
      const searchLower = searchTerm.toLowerCase();
      return (
        user.firstName.toLowerCase().includes(searchLower) ||
        user.lastName.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.role.toLowerCase().includes(searchLower) ||
        user.department.toLowerCase().includes(searchLower)
      );
    })
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc'
          ? aValue - bValue
          : bValue - aValue;
      }

      return 0;
    });

  const handleSort = (field: keyof User) => {
    if (field === sortField) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  return (
    <div className="user-list">
      <div className="controls">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('id')}>#</th>
              <th>Avatar</th>
              <th onClick={() => handleSort('firstName')}>First Name</th>
              <th onClick={() => handleSort('lastName')}>Last Name</th>
              <th onClick={() => handleSort('email')}>Email</th>
              <th onClick={() => handleSort('role')}>Role</th>
              <th onClick={() => handleSort('department')}>Department</th>
              <th onClick={() => handleSort('status')}>Status</th>
              <th onClick={() => handleSort('performance')}>Performance</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img
                    src={user.avatar}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="avatar"
                  />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.department}</td>
                <td>
                  <span className={`status ${user.status}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className="performance-bar">
                    <div
                      className="performance-fill"
                      style={{ width: `${user.performance}%` }}
                    />
                    <span>{user.performance}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
