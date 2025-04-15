import React, { useState } from 'react';
import Header from '../layouts/Header';
import Sidemenu from '../layouts/Sidemenu';
import Breadcrumb from '../components/Breadcrumbs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('Overview');
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [customerRequests, setCustomerRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({ name: '', request: '' });
  const [totalGuests, setTotalGuests] = useState(120);
  const [totalRooms, setTotalRooms] = useState(100);
  const [occupiedRooms, setOccupiedRooms] = useState(85);
  const [guests, setGuests] = useState([
    { id: 1, name: 'John Doe', roomNumber: '101' },
    { id: 2, name: 'Jane Smith', roomNumber: '102' },
  ]);
  const pricePerGuest = 100;

  const [monthlyData, setMonthlyData] = useState([
    { month: 'January', totalGuests: 120, revenue: 22000, occupancyRate: 85 },
    { month: 'February', totalGuests: 400, revenue: 1000, occupancyRate: 88 },
    { month: 'March', totalGuests: 140, revenue: 13000, occupancyRate: 90 },
    { month: 'April', totalGuests: 150, revenue: 15000, occupancyRate: 92 },
    { month: 'May', totalGuests: 160, revenue: 900, occupancyRate: 94 },
    { month: 'June', totalGuests: 170, revenue: 5000, occupancyRate: 100 },
    { month: 'July', totalGuests: 180, revenue: 18000, occupancyRate: 96 },
    { month: 'August', totalGuests: 90, revenue: 19000, occupancyRate: 97 },
    { month: 'September', totalGuests: 200, revenue: 20000, occupancyRate: 98 },
    { month: 'October', totalGuests: 210, revenue: 21000, occupancyRate: 99 },
    { month: 'November', totalGuests: 220, revenue: 22000, occupancyRate: 100 },
    { month: 'December', totalGuests: 230, revenue: 2000, occupancyRate: 100 },
  ]);

  const breadcrumbLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const handleAddRequest = () => {
    if (newRequest.name && newRequest.request) {
      const request = {
        id: Date.now(),
        name: newRequest.name,
        request: newRequest.request,
        status: 'Pending',
      };
      setCustomerRequests([...customerRequests, request]);
      setNewRequest({ name: '', request: '' });
    }
  };

  const handleResolveRequest = (id) => {
    setCustomerRequests(
      customerRequests.map((req) =>
        req.id === id ? { ...req, status: 'Resolved' } : req
      )
    );
  };

  const calculateRevenue = () => {
    return totalGuests * pricePerGuest;
  };

  const calculateOccupancyRate = () => {
    return ((occupiedRooms / totalRooms) * 100).toFixed(2);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  const getWeeklyData = (month) => {
    const monthData = monthlyData.find((data) => data.month === month);
    if (!monthData) return [];

    const weeklyRevenue = monthData.revenue / 4; // Assuming equal distribution
    return [
      { day: 'Week 1', newGuests: monthData.totalGuests / 4, newRevenue: weeklyRevenue },
      { day: 'Week 2', newGuests: monthData.totalGuests / 4, newRevenue: weeklyRevenue },
      { day: 'Week 3', newGuests: monthData.totalGuests / 4, newRevenue: weeklyRevenue },
      { day: 'Week 4', newGuests: monthData.totalGuests / 4, newRevenue: weeklyRevenue },
    ];
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Overview':
        return (
          <div className='w-full'>
            <Breadcrumb title="" links={breadcrumbLinks} />
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-6">Resort Reservation Overview</h3>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Monthly Resort Data</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: '#666' }} onClick={(data) => handleMonthClick(data.value)} />
                  <YAxis tick={{ fill: '#666' }} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="totalGuests"
                    stroke="#D8BFD8"
                    fill="#D8BFD8"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#D8BFD8"
                    fill="#D8BFD8"
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="occupancyRate"
                    stroke="#D8BFD8"
                    fill="#D8BFD8"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            {selectedMonth && (
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Weekly New Guests and Revenue for {selectedMonth}</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={getWeeklyData(selectedMonth)}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tick={{ fill: '#666' }} />
                    <YAxis tick={{ fill: '#666' }} />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="newGuests"
                      stroke="#D8BFD8"
                      fill="#D8BFD8"
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="newRevenue"
                      stroke="#D8BFD8"
                      fill="#D8BFD8"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        );
      default:
        return <p>Welcome to the Admin Dashboard</p>;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-5">
      <Header />
      <div className="flex w-full gap-6">
        <div className="">
          <Sidemenu />
        </div>
        <div className="w-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
